import base64
import io
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from ultralytics import YOLO
from scripts.inference import inference as inferenceYOLO
from scripts.chat import chatbot, class_info_dict

app = Flask(__name__)
CORS(app) 

labels = []
classes = dict()

def detect(image):
    inferencedImage, classesInDataset, classesInImage = inferenceYOLO(image)
    imageClassesList = list(set(classesInImage))
    label = ""

    for x in range(len(imageClassesList)):
        if x>=len(imageClassesList) - 1:
            label = label + str(classesInDataset[imageClassesList[x]])
        else:
            label = label + str(classesInDataset[imageClassesList[x]]) + ", "

    global labels 
    labels = imageClassesList
    global classes 
    classes = classesInDataset

    return inferencedImage, label

def chatfront(history, message):

    info = ""

    for x in range(len(labels)):
        name = str(classes[labels[x]])
        infoCurrent = str(class_info_dict[name])
        
        if x >= len(labels) -1:
            info = info + name + ":" + infoCurrent
        else:
            info = info + name + ":" + infoCurrent + ", "
            
    response = chatbot(info, history, message)

    return response

def inference(image):
    model = YOLO("assets/best.pt")
    results = model(image, conf=0.4)
    
    if not results:
        return image, [], []

    infer = np.zeros(image.shape, dtype=np.uint8)
    detected_classes = []

    for r in results:
        infer = r.plot()
        detected_classes = r.boxes.cls.tolist()

    return infer, detected_classes
    

@app.route('/detect', methods=['POST'])
def detect():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image_np = np.frombuffer(file.read(), np.uint8)
    image = cv2.imdecode(image_np, cv2.IMREAD_COLOR)

    processed_image, detected_labels = inference(image)

    _, buffer = cv2.imencode('.jpg', processed_image)
    encoded_image = base64.b64encode(buffer).decode('utf-8')

    return jsonify({
        'image': encoded_image,
        'label': detected_labels
    })

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': "No selected file"}), 400
    
    if file:
        in_memory_file = io.BytesIO()
        file.save(in_memory_file)
        data = np.frombuffer(in_memory_file.getvalue(), dtype=np.uint8)
        color_image_flag = 1
        img = cv2.imdecode(data,color_image_flag)

        detected_image, label = detect(img)

        _, img_encoded = cv2.imencode('.jpg', detected_image)
        image_as_text = base64.b64encode(img_encoded).decode('utf-8')

        return jsonify({'image': image_as_text, 'label': label})
    
    return jsonify({'error': 'Failed to process the image'}), 500

@app.route('/chat', methods=["POST"])
def chat():
    if request.method == 'OPTIONS':  # Handle preflight request
        return '', 200  # Respond with HTTP 200 OK

    if not request.json or 'message' not in request.json:
        return jsonify({'error': 'No message provided'}), 400

    data = request.get_json()
    user_message = data['message']
    chat_history = data.get('chatHistory', [])

    botResponse = f"{chatfront(chat_history, user_message)}"
    

    return jsonify({'response': botResponse})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000,debug=True)



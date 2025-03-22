import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import numpy as np
from ultralytics import YOLO
import os

app = Flask(__name__)
CORS(app)

model_path = os.path.join(os.path.dirname(__file__), "assets/best.pt")
model = YOLO(model_path)

def inference(image):
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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


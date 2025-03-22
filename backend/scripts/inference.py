from ultralytics import YOLO
import numpy as np
import cv2  # Import cv2 to handle image loading and saving

# Load the YOLOv8 Model Once

def inference(image):
    print("Loading model...")
    model = YOLO('backend/assets/best.pt')  # Ensure correct path
    results = model(image, conf=0.4)

    if not results:
        print("No results returned by YOLO model.")
        return image, {}, []  # Return original image if inference fails

    infer = np.zeros(image.shape, dtype=np.uint8)
    classes = dict()
    namesInfer = []

    for r in results:
        infer = r.plot()
        classes = r.names
        namesInfer = r.boxes.cls.tolist()

    print(f"Detected classes: {namesInfer}")
    return infer, classes, namesInfer

image = cv2.imread('../assets/download.jpeg')

inferenceImage, classesInDataset, classesInImage = inference(image)

print("Names of the classes: ", classesInDataset)
print("Classes present in the image: ", classesInImage)
cv2.imwrite("Inferenced Image.jpeg", inferenceImage)

'''
def run_inference(image_path):
    """
    Process an image with YOLOv8 model and return detections.
    """
    # Read image
    image = cv2.imread(image_path)
    
    if image is None:
        raise ValueError("Error: Image not loaded. Check the file path.")

    # Run YOLOv8 inference
    results = model(image, conf=0.4)

    # Draw detections
    infer = np.zeros(image.shape, dtype=np.uint8)
    detected_classes = []

    for r in results:
        infer = r.plot()  # Get annotated image
        detected_classes = [model.names[int(cls)] for cls in r.boxes.cls.tolist()]

    # Save the processed image
    output_path = "backend/uploads/download.jpeg"
    cv2.imwrite(output_path, infer)

    return output_path, detected_classes'
    '''

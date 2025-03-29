from ultralytics import YOLO
import numpy as np
import cv2  # Import cv2 to handle image loading and saving

# Load the YOLOv8 Model Once

def inference(image):
    print("Loading model...")
    model = YOLO('assets/best.pt')  # Ensure correct path
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

image = cv2.imread('./assets/download.jpeg')

inferenceImage, classesInDataset, classesInImage = inference(image)


from ultralytics import YOLO
import numpy as np
import cv2  # Import cv2 to handle image loading and saving

# Load the YOLOv8 Model Once
model = YOLO('backend/assets/best.pt')

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
    output_path = "backend/uploads/processed_image.jpg"
    cv2.imwrite(output_path, infer)

    return output_path, detected_classes

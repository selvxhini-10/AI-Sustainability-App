from transformers import pipeline

chatbot_model = pipeline("text-generation", model="microsoft/DialoGPT-medium")

#Define disctionary
class_info_dict = {
    # Healthy Leaves
    "Apple leaf": "This represents a healthy apple leaf.",
    "Bell_pepper leaf": "This represents a healthy bell pepper leaf.",
    "Blueberry leaf": "This represents a healthy blueberry leaf.",
    "Cherry leaf": "This represents a healthy cherry leaf.",
    "Peach leaf": "This represents a healthy peach leaf.",
    "Potato leaf": "This represents a healthy potato leaf.",
    "Raspberry leaf": "This represents a healthy raspberry leaf.",
    "Soyabean leaf": "This represents a healthy soybean leaf.",
    "Soybean leaf": "This represents a healthy soybean leaf.",
    "Strawberry leaf": "This represents a healthy strawberry leaf.",
    "Tomato leaf": "This represents a healthy tomato leaf.",
    "Grape leaf": "This represents a healthy grape leaf.",

    # Diseased Leaves
    "Apple Scab Leaf": "This leaf is infected with Apple Scab, a fungal disease caused by Venturia inaequalis.",
    "Apple rust leaf": "This leaf has rust disease, commonly caused by Gymnosporangium species.",
    "Bell_pepper leaf spot": "This leaf has bacterial or fungal spots, indicating a possible infection.",
    "Corn Gray leaf spot": "This leaf has gray leaf spot, a fungal disease caused by Cercospora zeae-maydis.",
    "Corn leaf blight": "This leaf is affected by leaf blight, caused by different fungal species.",
    "Corn rust leaf": "This leaf has rust, a fungal disease affecting corn crops.",
    "Potato leaf early blight": "This potato leaf shows early blight, a disease caused by Alternaria solani.",
    "Potato leaf late blight": "This potato leaf shows late blight, caused by Phytophthora infestans.",
    "Squash Powdery mildew leaf": "This leaf has powdery mildew, a fungal disease.",
    "Tomato Early blight leaf": "This tomato leaf has early blight caused by Alternaria solani.",
    "Tomato Septoria leaf spot": "This tomato leaf has Septoria leaf spot, a fungal disease.",
    "Tomato leaf bacterial spot": "This tomato leaf has bacterial spots, often caused by Xanthomonas species.",
    "Tomato leaf late blight": "This tomato leaf is infected with late blight caused by Phytophthora infestans.",
    "Tomato leaf mosaic virus": "This leaf shows symptoms of Tomato Mosaic Virus (ToMV).",
    "Tomato leaf yellow virus": "This leaf is affected by Tomato Yellow Leaf Curl Virus (TYLCV).",
    "Tomato mold leaf": "This leaf is affected by mold-related diseases.",
    "Tomato two spotted spider mites leaf": "This leaf has damage from two-spotted spider mites.",
    "Grape leaf black rot": "This grape leaf has black rot, a fungal disease caused by Guignardia bidwellii."
}

def chatbot(info, history, message):
    context = f"Information about the disease: {info}\n"

    # Keep only the last 5 exchanges to avoid excessive repetition
    recent_history = history[-5:]  

    for exchange in recent_history:
        context += f"{exchange}\n"

    context += f"User: {message}\n"
    prompt = f"""
    You are a farming expert with specialized knowledge in plant diseases. A farmer comes to you with the name of a specific plant disease 
    and some basic information about it. Your job is to guide the farmer with practical advice.

    If the user asks something unrelated, respond with "I cannot answer that prompt."
    {context}
    """

    # Generate response using chatbot_model
    response_data = chatbot_model(prompt, max_new_tokens=50)

    # Check if response_data is not empty and contains the expected key
    if response_data and isinstance(response_data, list) and 'generated_text' in response_data[0]:
        full_response = response_data[0]['generated_text'].strip()

        # Extract only the chatbot's reply by removing the prompt part if it exists
        if "Bot:" in full_response:
            bot_reply = full_response.split("Bot:")[-1].strip()
        else:
            bot_reply = full_response  # Fallback: return full response if no explicit "Bot:"

        return bot_reply

    return "Error: No response generated."

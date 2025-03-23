from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain

OPENAI_API_KEY = ""

model_name = "gpt-3.5-turbo"

llm = ChatOpenAI(model_name = model_name, temperature = 0.3, openai_api_key=OPENAI_API_KEY)

def chatbot(info, history, message, output):
    prompt_template = """"
    You are assisting a farmer with information on water irrigation optimization and its implications for agriculture.
    Explain how farmers can use predictive knowledge to increase their crops.
    Offer practical advice, strategies and resources that farmers can use.

    Also, some input parameters about the soil and weather will be provided to you
    (do not ask the user for this information from user in chat). This information includes:
    soil_moisture, temperature, soil_humidity, air_temperature, wind_speed, air_humidity, wind_gust, pressure
    There values are {info} respectively

    The prediction of the water supply is {output} based on the input information about soil and weather, here 0 corresponds to off and 1 corresponds to on.

    Asked the user if they want generic information or specific crop related. Once you have chat history don't greet again, perform your task based on the input parameters and water supply prediciton.


    Chat history: {history},
    User question: {message}

    If the user asks anything outside of this scope, display the message: I cannot answer that prompt. 
    """

    PROMPT = PromptTemplate(
        template = prompt_template, input_variables=['info', 'history', 'message','output']

        chain = LLMChain(llm, prompt=PROMPT)

        response = chain.predict(info = info, history=history, message=message, output=output)
    )
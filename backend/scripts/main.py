from fastapi import FastAPI, Request, Form, HTTPException
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from fastapi.staticfiles import StaticFiles
import joblib 
import numpy as np
from pathlib import Path
import json 
from sklearn.preprocessing import StandardScaler

from chat import chatbot

import unicorn

app = FastAPI()

model = joblib.load("model.pkl")

class IrrigationDataRequest(BaseModel):
    SM: float
    TEMP: float
    SH: float
    AT:float
    WS:float
    AH:float
    WG:float
    P:float

app.mount("/static", StaticFiles(directory=Path("static")), name="static")

templates = Jinja2Templates(directory="templates")

output = None
def predict_drought(features: IrrigationDataRequest):
    global output
    input_data = np.array(list(features.dict().values())).reshape(1,-1)

    scaler = StandardScaler()

    scaler.fit(input_data)

    scaled_input_data = scaler.transform(input_data)

    prediction = model.predict(scaled_input_data)

    output = int(prediction[0])
    print(output)

    return output

@app.get("/")
async def predict(request: Request, json_data: str=Form(...)):
    features = json.loads(json_data)
    prediction = predict_drought(IrrigationDataRequest(**features))

    return templates.TemplateResponse("index.html", {"request": request, "prediction": prediction})
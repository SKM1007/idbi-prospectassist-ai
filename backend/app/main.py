from fastapi import FastAPI
from app.routes import router

app = FastAPI(
    title="Customer Prospect Prediction API",
    description="Predict customer prospect score using Machine Learning",
    version="1.0.0"
)

app.include_router(router)


@app.get("/")
def home():
    return {
        "message": "Customer Prospect Prediction API is running!"
    }
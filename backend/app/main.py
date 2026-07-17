from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import router

app = FastAPI(
    title="Customer Prospect Prediction API",
    description="Predict customer prospect score using Machine Learning",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000/",
        "https://idbi-prospectassist-ai.vercel.app/",
    ],
    allow_credentials=True,
    allow_methods=[""],
    allow_headers=[""],
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "Customer Prospect Prediction API is running!"
    }
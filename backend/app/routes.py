from typing import List

from fastapi import (
    APIRouter,
    HTTPException,
    UploadFile,
    File
)

from app.schemas import (
    PredictionRequest,
    PredictionResponse,
    DashboardResponse,
    CustomerSummary,
    CustomerDetails,
    UploadResponse
)

from app.predictor import predict_prospect_score

from app.recommender import generate_recommendation

from app.dashboard import get_dashboard_data

from app.customer_service import (
    get_all_customers,
    get_customer_by_id
)

from app.upload_service import save_uploaded_dataset


router = APIRouter()


# =====================================================
# HOME
# =====================================================

@router.get("/")
def home():
    return {
        "message": "Customer Prospect Prediction API is running!"
    }


# =====================================================
# PREDICT CUSTOMER
# =====================================================

@router.post(
    "/predict",
    response_model=PredictionResponse
)
def predict(request: PredictionRequest):

    score = predict_prospect_score(
        salary=request.salary,
        credit_score=request.credit_score,
        savings=request.savings,
        emi=request.emi,
        age=request.age,
        employment_years=request.employment_years,
        transaction_count=request.transaction_count
    )

    score = round(score, 2)

    details = generate_recommendation(score)

    return PredictionResponse(
        prospect_score=score,
        category=details["category"],
        risk_level=details["risk_level"],
        eligible_products=details["eligible_products"],
        recommendation=details["recommendation"]
    )


# =====================================================
# DASHBOARD
# =====================================================

@router.get(
    "/dashboard",
    response_model=DashboardResponse
)
def dashboard():

    data = get_dashboard_data()

    return DashboardResponse(
        total_customers=data["total_customers"],
        average_salary=data["average_salary"],
        average_credit_score=data["average_credit_score"],
        average_prospect_score=data["average_prospect_score"],
        category_distribution=data["category_distribution"],
        top_cities=data["top_cities"]
    )


# =====================================================
# GET ALL CUSTOMERS
# =====================================================

@router.get(
    "/customers",
    response_model=List[CustomerSummary]
)
def customers():

    data = get_all_customers()

    result = []

    for customer in data:

        result.append(
            CustomerSummary(
                customer_id=customer["customer_id"],
                name=customer["name"],
                city=customer["city"],
                prospect_score=customer["prospect_score"],
                category=customer["category"]
            )
        )

    return result


# =====================================================
# GET CUSTOMER BY ID
# =====================================================

@router.get(
    "/customer/{customer_id}",
    response_model=CustomerDetails
)
def customer(customer_id: str):

    data = get_customer_by_id(customer_id)

    if data is None:
        raise HTTPException(
            status_code=404,
            detail="Customer not found"
        )

    return CustomerDetails(**data)


# =====================================================
# UPLOAD CUSTOMER DATASET
# =====================================================

@router.post(
    "/upload",
    response_model=UploadResponse
)
def upload_dataset(
    file: UploadFile = File(...)
):

    # Allow only CSV files
    if not file.filename.lower().endswith(".csv"):
        raise HTTPException(
            status_code=400,
            detail="Only CSV files are allowed."
        )

    result = save_uploaded_dataset(file)

    return UploadResponse(
        message=result["message"],
        filename=result["filename"]
    )
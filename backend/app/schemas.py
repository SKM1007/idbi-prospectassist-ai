from pydantic import BaseModel


# =====================================================
# Prediction Request
# =====================================================

class PredictionRequest(BaseModel):
    salary: float
    credit_score: int
    savings: float
    emi: float
    age: int
    employment_years: int
    transaction_count: int


# =====================================================
# Prediction Response
# =====================================================

class PredictionResponse(BaseModel):
    prospect_score: float
    category: str
    risk_level: str
    eligible_products: list[str]
    recommendation: str


# =====================================================
# Dashboard Response
# =====================================================

class DashboardResponse(BaseModel):

    total_customers: int

    average_salary: float

    average_credit_score: float

    average_prospect_score: float

    category_distribution: dict

    top_cities: dict


# =====================================================
# Customer Summary
# Used for GET /customers
# =====================================================

class CustomerSummary(BaseModel):

    customer_id: str
    name: str
    city: str
    prospect_score: float
    category: str
    salary: float
    credit_score: int
    occupation: str
    loan_type: str


# =====================================================
# Customer Details
# Used for GET /customer/{customer_id}
# =====================================================

class CustomerDetails(BaseModel):

    customer_id: str
    name: str
    age: int
    occupation: str

    salary: float
    monthly_expense: float
    savings: float
    emi: float

    credit_score: int
    employment_years: int
    existing_loan: str
    transaction_count: int
    loan_history: str

    city: str

    emi_ratio: float
    savings_ratio: float

    prospect_score: float
    category: str

    risk_level: str

    eligible_products: list[str]

    recommendation: str

class UploadResponse(BaseModel):
    message: str
    filename: str
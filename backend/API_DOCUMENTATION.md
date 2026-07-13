# Customer Prospect Prediction API

## Project Overview

This backend is developed using **FastAPI** and **Machine Learning (Random Forest Regressor)**.

It provides APIs for:

- Customer Prospect Prediction
- Customer Recommendations
- Dashboard Analytics
- Customer Management
- Dataset Upload

---

# Base URL

Development

```
http://localhost:8000
```

Swagger Documentation

```
http://localhost:8000/docs
```

---

# Tech Stack

- Python
- FastAPI
- Scikit-Learn
- Pandas
- NumPy
- Joblib

---

# API Endpoints

---

# 1. Home API

## Endpoint

```
GET /
```

## Description

Checks whether the backend server is running.

### Sample Response

```json
{
    "message": "Customer Prospect Prediction API is running!"
}
```

---

# 2. Dashboard API

## Endpoint

```
GET /dashboard
```

## Description

Returns overall analytics of all customers.

### Sample Response

```json
{
    "total_customers": 1000,
    "average_salary": 133359.78,
    "average_credit_score": 605.52,
    "average_prospect_score": 74.50,
    "category_distribution": {
        "Excellent": 317,
        "Good": 511,
        "Average": 168,
        "Poor": 4
    },
    "top_cities": {
        "Mumbai": 111,
        "Pune": 105,
        "Bangalore": 103,
        "Kolkata": 102,
        "Coimbatore": 102
    }
}
```

---

# 3. Customer List API

## Endpoint

```
GET /customers
```

## Description

Returns all customers.

### Sample Response

```json
[
    {
        "customer_id": "CUST0001",
        "name": "Rahul Sharma",
        "city": "Mumbai",
        "prospect_score": 88.42,
        "category": "Excellent"
    },
    {
        "customer_id": "CUST0002",
        "name": "Priya Nair",
        "city": "Chennai",
        "prospect_score": 76.55,
        "category": "Good"
    }
]
```

---

# 4. Customer Details API

## Endpoint

```
GET /customer/{customer_id}
```

Example

```
GET /customer/CUST0001
```

## Description

Returns complete customer information along with recommendation.

### Sample Response

```json
{
    "customer_id": "CUST0001",
    "name": "Rahul Sharma",
    "age": 32,
    "occupation": "Software Engineer",
    "salary": 85000,
    "monthly_expense": 32000,
    "savings": 450000,
    "emi": 12000,
    "credit_score": 785,
    "employment_years": 6,
    "existing_loan": "Yes",
    "transaction_count": 142,
    "loan_history": "Good",
    "city": "Chennai",
    "emi_ratio": 0.14,
    "savings_ratio": 5.29,
    "prospect_score": 88.42,
    "category": "Excellent",
    "risk_level": "Very Low",
    "eligible_products": [
        "Premium Credit Card",
        "Home Loan",
        "Business Loan",
        "Investment Advisory"
    ],
    "recommendation": "Customer qualifies for premium financial products."
}
```

---

# 5. Predict API

## Endpoint

```
POST /predict
```

## Description

Predicts the prospect score for a new customer.

### Request Body

```json
{
    "salary": 85000,
    "credit_score": 780,
    "savings": 450000,
    "emi": 12000,
    "age": 30,
    "employment_years": 6,
    "transaction_count": 150
}
```

### Sample Response

```json
{
    "prospect_score": 77.72,
    "category": "Good",
    "risk_level": "Low",
    "eligible_products": [
        "Personal Loan",
        "Credit Card",
        "Vehicle Loan"
    ],
    "recommendation": "Increase savings to become eligible for premium financial products."
}
```

---

# 6. Upload Dataset API

## Endpoint

```
POST /upload
```

## Description

Uploads a new customer dataset.

### Request

Upload a CSV file.

### Sample Response

```json
{
    "message": "Customer dataset uploaded successfully.",
    "filename": "customers.csv"
}
```

---

# HTTP Status Codes

| Status Code | Meaning |
|-------------|----------|
| 200 | Success |
| 400 | Invalid Request |
| 404 | Customer Not Found |
| 422 | Validation Error |
| 500 | Internal Server Error |

---

# Frontend Integration Guide

## Dashboard Screen

```
GET /dashboard
```

Use for:

- Total Customers
- Average Salary
- Average Credit Score
- Average Prospect Score
- Category Distribution
- Top Cities

---

## Customer List Screen

```
GET /customers
```

Use for displaying the customer table.

---

## Customer Details Screen

```
GET /customer/{customer_id}
```

Use when a customer row is clicked.

---

## Prediction Screen

```
POST /predict
```

Use for predicting the prospect score of a new customer.

---

## Upload Screen

```
POST /upload
```

Allows the user to upload a new customer dataset.

---

# Running the Backend

Activate the virtual environment

```bash
source venv/bin/activate
```

Start the backend

```bash
uvicorn app.main:app --reload
```

Open Swagger

```
http://localhost:8000/docs
```

---

# Project Structure

```
backend/
│
├── app/
│   ├── main.py
│   ├── routes.py
│   ├── predictor.py
│   ├── recommender.py
│   ├── dashboard.py
│   ├── customer_service.py
│   ├── upload_service.py
│   └── schemas.py
│
├── data/
│   └── customers.csv
│
├── trained_model/
│   └── model.pkl
│
├── generate_dataset.py
├── train_model.py
├── requirements.txt
└── API_DOCUMENTATION.md
```

---

# Developed By

**Customer Prospect Prediction System**

Backend API using FastAPI and Machine Learning.
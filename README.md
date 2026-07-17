# IDBI ProspectAssist AI

AI-powered Customer Prospect Prediction System developed for IDBI Innovate.

## Overview

IDBI ProspectAssist AI helps banks identify high-potential customers by analyzing financial and behavioral data. The system predicts prospect scores, categorizes customers, and recommends suitable banking products.

## Features

- Customer Prospect Score Prediction
- Customer Risk Assessment
- Product Recommendation Engine
- Interactive Dashboard
- Customer Insights Page
- CSV Dataset Upload
- Real-time Analytics
- Responsive UI

## Tech Stack

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Backend
- FastAPI
- Python
- Pandas
- Scikit-learn

### Deployment
- Vercel (Frontend)
- Render (Backend)

## Project Structure

```text
Idbi-prospectassist-ai/
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── services/
│   └── types/
│
├── backend/
│   ├── app/
│   ├── data/
│   └── models/
│
└── README.md
```

## Installation

### 1. Clone Repository

```bash
Git clone https://github.com/SKM1007/idbi-prospectassist-ai.git
Cd idbi-prospectassist-ai
```

### 2. Backend Setup

```bash
Cd backend

Python -m venv venv

Venv\Scripts\activate

Pip install -r requirements.txt

Uvicorn app.main:app –reload
```

Backend runs on:

```text
http://localhost:8000
```

### 3. Frontend Setup

Open a new terminal:

```bash
Cd frontend

Npm install

Npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

## API Endpoints

### Dashboard

```http
GET /dashboard
```

### Customers

```http
GET /customers
```

### Customer Details

```http
GET /customer/{customer_id}
```

### Prediction

```http
POST /predict
```

### Upload Dataset

```http
POST /upload
```

## Team Members

### Panabaka Mahesh
- Frontend Development
- Integration
- Deployment

### Manoj S K
- Backend Development
- API Development
- Machine Learning Integration

## Deployment Links

### Frontend
Add Vercel URL here

### Backend
Add Render URL here

## Future Enhancements

- Authentication System
- Advanced ML Models
- Loan Eligibility Calculator
- Customer Segmentation
- Real-time Data Integration

## License

This project was developed for the IDBI Innovate Hackathon.


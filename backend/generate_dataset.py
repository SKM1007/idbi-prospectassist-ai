import random
import pandas as pd
from faker import Faker

# -----------------------------
# Initialize Faker
# -----------------------------
fake = Faker("en_IN")

# -----------------------------
# Sample Data
# -----------------------------
occupations = [
    "Software Engineer",
    "Doctor",
    "Teacher",
    "Business",
    "Lawyer",
    "Data Analyst",
    "Mechanical Engineer",
    "Civil Engineer",
    "Student",
    "Government Employee",
    "Sales Executive",
    "Bank Employee",
    "Electrician",
    "Farmer",
    "Designer"
]

cities = [
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Coimbatore",
    "Jaipur"
]

loan_history_options = [
    "Good",
    "Average",
    "Poor"
]

customers = []

# -----------------------------
# Generate 1000 Customers
# -----------------------------
for i in range(1, 1001):

    # Basic Information
    customer_id = f"CUST{i:04d}"
    name = fake.name()
    age = random.randint(21, 60)
    occupation = random.choice(occupations)
    city = random.choice(cities)

    # Financial Details
    salary = random.randint(20000, 250000)

    monthly_expense = int(
        salary * random.uniform(0.30, 0.80)
    )

    savings = random.randint(20000, 3000000)

    emi = random.randint(
        0,
        int(salary * 0.40)
    )

    credit_score = random.randint(300, 900)

    employment_years = random.randint(0, 35)

    existing_loan = random.choice([
        "Yes",
        "No"
    ])

    transaction_count = random.randint(10, 400)

    loan_history = random.choice(
        loan_history_options
    )

    # -----------------------------
    # Derived Features
    # -----------------------------
    emi_ratio = round(emi / salary, 2)

    savings_ratio = round(
        savings / (salary * 12),
        2
    )

    # =====================================================
    # Prospect Score Calculation
    # =====================================================

    # Salary (20 Points)
    if salary < 30000:
        salary_points = 5
    elif salary < 60000:
        salary_points = 10
    elif salary < 100000:
        salary_points = 15
    else:
        salary_points = 20

    # Savings (20 Points)
    if savings < 100000:
        savings_points = 5
    elif savings < 300000:
        savings_points = 10
    elif savings < 800000:
        savings_points = 15
    else:
        savings_points = 20

    # Credit Score (25 Points)
    if credit_score < 600:
        credit_points = 5
    elif credit_score < 700:
        credit_points = 10
    elif credit_score < 750:
        credit_points = 18
    elif credit_score < 800:
        credit_points = 22
    else:
        credit_points = 25

    # EMI Ratio (15 Points)
    if emi_ratio < 0.20:
        emi_points = 15
    elif emi_ratio < 0.30:
        emi_points = 12
    elif emi_ratio < 0.40:
        emi_points = 8
    else:
        emi_points = 3

    # Employment Years (10 Points)
    if employment_years <= 2:
        employment_points = 2
    elif employment_years <= 5:
        employment_points = 5
    elif employment_years <= 10:
        employment_points = 8
    else:
        employment_points = 10

    # Loan History (5 Points)
    if loan_history == "Good":
        history_points = 5
    elif loan_history == "Average":
        history_points = 3
    else:
        history_points = 1

    # Existing Loan (5 Points)
    if existing_loan == "No":
        loan_points = 5
    else:
        loan_points = 2

    # -----------------------------
    # Final Prospect Score
    # -----------------------------
    prospect_score = (
        salary_points
        + savings_points
        + credit_points
        + emi_points
        + employment_points
        + history_points
        + loan_points
    )

    # -----------------------------
    # Customer Category
    # -----------------------------
    if prospect_score >= 80:
        category = "Excellent"
    elif prospect_score >= 65:
        category = "Good"
    elif prospect_score >= 45:
        category = "Average"
    else:
        category = "Poor"

    # -----------------------------
    # Save Customer
    # -----------------------------
    customers.append({
        "customer_id": customer_id,
        "name": name,
        "age": age,
        "occupation": occupation,
        "salary": salary,
        "monthly_expense": monthly_expense,
        "savings": savings,
        "emi": emi,
        "credit_score": credit_score,
        "employment_years": employment_years,
        "existing_loan": existing_loan,
        "transaction_count": transaction_count,
        "loan_history": loan_history,
        "city": city,
        "emi_ratio": emi_ratio,
        "savings_ratio": savings_ratio,
        "prospect_score": prospect_score,
        "category": category
    })

# -----------------------------
# Create DataFrame
# -----------------------------
df = pd.DataFrame(customers)

# -----------------------------
# Save CSV
# -----------------------------
df.to_csv("data/customers.csv", index=False)

print("\nDataset Generated Successfully!\n")

print(df.head())

print("\nShape :", df.shape)

print("\nProspect Score Statistics\n")

print(df["prospect_score"].describe())
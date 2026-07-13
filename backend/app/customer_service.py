import pandas as pd
from app.recommender import generate_recommendation


def load_customers():
    """
    Load the latest customer dataset.
    """
    df = pd.read_csv("data/customers.csv")

    # Clean column names
    df.columns = df.columns.str.strip()

    # Ensure customer_id is always a clean string
    df["customer_id"] = df["customer_id"].astype(str).str.strip()

    return df


def get_all_customers():
    """
    Return all customers.
    """
    df = load_customers()
    return df.to_dict(orient="records")


def get_customer_by_id(customer_id: str):
    """
    Return one customer by customer_id.
    """

    df = load_customers()

    customer_id = str(customer_id).strip()

    print("Searching for:", customer_id)
    print("Available IDs:", df["customer_id"].head(10).tolist())

    customer = df[df["customer_id"] == customer_id]

    if customer.empty:
        return None

    customer = customer.iloc[0].to_dict()

    recommendation = generate_recommendation(
        customer["prospect_score"]
    )

    customer.update(recommendation)

    return customer
import pandas as pd

from app.recommender import generate_recommendation


def load_customers():
    """
    Load the latest customer dataset.
    """
    return pd.read_csv("data/customers.csv")


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

    customer = df[df["customer_id"] == customer_id]

    if customer.empty:
        return None

    customer = customer.iloc[0].to_dict()

    recommendation = generate_recommendation(
        customer["prospect_score"]
    )

    customer.update(recommendation)

    return customer
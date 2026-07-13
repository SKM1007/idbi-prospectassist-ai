import pandas as pd


def get_dashboard_data():

    # Load Dataset
    df = pd.read_csv("data/customers.csv")

    # --------------------------
    # Basic Statistics
    # --------------------------

    total_customers = len(df)

    average_salary = round(
        df["salary"].mean(),
        2
    )

    average_credit_score = round(
        df["credit_score"].mean(),
        2
    )

    average_prospect_score = round(
        df["prospect_score"].mean(),
        2
    )

    # --------------------------
    # Category Distribution
    # --------------------------

    category_distribution = (
        df["category"]
        .value_counts()
        .to_dict()
    )

    # --------------------------
    # Top 5 Cities
    # --------------------------

    top_cities = (
        df["city"]
        .value_counts()
        .head(5)
        .to_dict()
    )

    # --------------------------
    # Return Result
    # --------------------------

    return {

        "total_customers": total_customers,

        "average_salary": average_salary,

        "average_credit_score": average_credit_score,

        "average_prospect_score": average_prospect_score,

        "category_distribution": category_distribution,

        "top_cities": top_cities
    }
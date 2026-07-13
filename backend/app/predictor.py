import joblib

# Load the trained model once when the server starts
model = joblib.load("trained_model/model.pkl")


def predict_prospect_score(
    salary,
    credit_score,
    savings,
    emi,
    age,
    employment_years,
    transaction_count,
):
    """
    Predict the customer's prospect score using the trained ML model.
    """

    input_data = [[
        salary,
        credit_score,
        savings,
        emi,
        age,
        employment_years,
        transaction_count
    ]]

    prediction = model.predict(input_data)

    return float(prediction[0])
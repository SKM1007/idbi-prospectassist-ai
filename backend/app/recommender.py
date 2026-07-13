def generate_recommendation(score: float):
    """
    Generate category, risk level,
    eligible products and recommendation
    based on the predicted prospect score.
    """

    if score >= 80:

        return {
            "category": "Excellent",
            "risk_level": "Very Low",
            "eligible_products": [
                "Premium Credit Card",
                "Home Loan",
                "Business Loan",
                "Investment Advisory"
            ],
            "recommendation":
                "Customer qualifies for premium financial products."
        }

    elif score >= 65:

        return {
            "category": "Good",
            "risk_level": "Low",
            "eligible_products": [
                "Personal Loan",
                "Credit Card",
                "Vehicle Loan"
            ],
            "recommendation":
                "Increase savings to become eligible for premium financial products."
        }

    elif score >= 45:

        return {
            "category": "Average",
            "risk_level": "Medium",
            "eligible_products": [
                "Small Personal Loan",
                "Secured Credit Card"
            ],
            "recommendation":
                "Improve credit score and reduce EMI before applying for larger loans."
        }

    else:

        return {
            "category": "Poor",
            "risk_level": "High",
            "eligible_products": [
                "Financial Counseling"
            ],
            "recommendation":
                "Reduce debt, improve credit history and increase savings."
        }
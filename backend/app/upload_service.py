import shutil
from pathlib import Path


DATA_DIRECTORY = Path("data")
DATA_DIRECTORY.mkdir(exist_ok=True)

CUSTOMER_DATASET = DATA_DIRECTORY / "customers.csv"


def save_uploaded_dataset(file):
    """
    Save the uploaded CSV as data/customers.csv
    """

    with CUSTOMER_DATASET.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {
        "message": "Customer dataset uploaded successfully.",
        "filename": CUSTOMER_DATASET.name
    }
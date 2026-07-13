import pandas as pd
import joblib

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score
)

# ==========================================
# STEP 1: Load Dataset
# ==========================================

print("=" * 50)
print("Loading Dataset...")
print("=" * 50)

df = pd.read_csv("data/customers.csv")

print(f"Dataset Loaded Successfully!")
print(f"Total Records : {len(df)}")
print(f"Total Columns : {len(df.columns)}")

# ==========================================
# STEP 2: Select Features
# ==========================================

features = [
    "salary",
    "credit_score",
    "savings",
    "emi",
    "age",
    "employment_years",
    "transaction_count"
]

target = "prospect_score"

X = df[features]
y = df[target]

print("\nSelected Features:")
for feature in features:
    print(f"  • {feature}")

print(f"\nTarget Column : {target}")

# ==========================================
# STEP 3: Split Dataset
# ==========================================

print("\nSplitting Dataset...")

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42
)

print(f"Training Samples : {len(X_train)}")
print(f"Testing Samples  : {len(X_test)}")

# ==========================================
# STEP 4: Create Model
# ==========================================

print("\nCreating Random Forest Regressor...")

model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)

# ==========================================
# STEP 5: Train Model
# ==========================================

print("Training Model...")

model.fit(X_train, y_train)

print("Training Completed!")

# ==========================================
# STEP 6: Predict
# ==========================================

print("\nTesting Model...")

predictions = model.predict(X_test)

# ==========================================
# STEP 7: Evaluate
# ==========================================

mae = mean_absolute_error(y_test, predictions)
mse = mean_squared_error(y_test, predictions)
rmse = mse ** 0.5
r2 = r2_score(y_test, predictions)

print("\nModel Performance")
print("-" * 30)

print(f"MAE  : {mae:.2f}")
print(f"MSE  : {mse:.2f}")
print(f"RMSE : {rmse:.2f}")
print(f"R²   : {r2:.4f}")

# ==========================================
# STEP 8: Feature Importance
# ==========================================

print("\nFeature Importance")
print("-" * 30)

importance = model.feature_importances_

for feature, score in sorted(
    zip(features, importance),
    key=lambda x: x[1],
    reverse=True
):
    print(f"{feature:<22} {score:.4f}")

# ==========================================
# STEP 9: Save Model
# ==========================================

model_path = "trained_model/model.pkl"

joblib.dump(model, model_path)

print("\nModel Saved Successfully!")
print(f"Location : {model_path}")

# ==========================================
# STEP 10: Sample Predictions
# ==========================================

print("\nSample Predictions")
print("-" * 30)

comparison = pd.DataFrame({
    "Actual": y_test.values[:10],
    "Predicted": predictions[:10].round(2)
})

print(comparison)

print("\n" + "=" * 50)
print("Training Process Completed Successfully!")
print("=" * 50)
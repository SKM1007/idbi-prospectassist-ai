"use client";

import Layout from "@/components/Layout";
import { api } from "@/services/api";
import { useState } from "react";

export default function PredictPage() {
  const [form, setForm] = useState({
    salary: "",
    credit_score: "",
    savings: "",
    emi: "",
    age: "",
    employment_years: "",
    transaction_count: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await api.predictCustomer({
        salary: Number(form.salary),
        credit_score: Number(form.credit_score),
        savings: Number(form.savings),
        emi: Number(form.emi),
        age: Number(form.age),
        employment_years: Number(form.employment_years),
        transaction_count: Number(form.transaction_count),
      });

      setResult(response);
    } catch (err) {
      console.error(err);
      alert("Prediction failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Prospect Analysis
        </h1>

        <p className="text-gray-500 mb-8">
          Predict customer prospect score using AI.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Salary
            </label>

            <input
              type="number"
              name="salary"
              value={form.salary}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Credit Score
            </label>

            <input
              type="number"
              name="credit_score"
              value={form.credit_score}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Savings
            </label>

            <input
              type="number"
              name="savings"
              value={form.savings}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              EMI
            </label>

            <input
              type="number"
              name="emi"
              value={form.emi}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Age
            </label>

            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Employment Years
            </label>

            <input
              type="number"
              name="employment_years"
              value={form.employment_years}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Transaction Count
            </label>

            <input
              type="number"
              name="transaction_count"
              value={form.transaction_count}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#00836C] text-white px-8 py-3 rounded-lg hover:bg-[#006b58]"
            >
              {loading ? "Predicting..." : "Predict Prospect"}
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-8 bg-white rounded-xl shadow p-6">

            <h2 className="text-2xl font-bold mb-6">
              Prediction Result
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <div className="border rounded-lg p-4">
                <p className="text-gray-500">
                  Prospect Score
                </p>

                <h3 className="text-3xl font-bold text-green-600">
                  {result.prospect_score}
                </h3>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-gray-500">
                  Category
                </p>

                <h3 className="text-xl font-semibold">
                  {result.category}
                </h3>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-gray-500">
                  Risk Level
                </p>

                <h3 className="text-xl font-semibold">
                  {result.risk_level}
                </h3>
              </div>

              <div className="border rounded-lg p-4">
                <p className="text-gray-500">
                  Eligible Products
                </p>

                <ul className="list-disc ml-5 mt-2">
                  {result.eligible_products.map(
                    (item: string) => (
                      <li key={item}>{item}</li>
                    )
                  )}
                </ul>
              </div>

            </div>

            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">

              <h3 className="font-semibold mb-2">
                Recommendation
              </h3>

              <p>{result.recommendation}</p>

            </div>

          </div>
        )}

      </div>
    </Layout>
  );
}
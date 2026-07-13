const API = "http://localhost:8000";

async function request(url: string, options?: RequestInit) {
  try {
    const res = await fetch(`${API}${url}`, {
      cache: "no-store",
      ...options,
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
}

export const api = {
  async getDashboard() {
    const data: any = await request("/dashboard");

    return {
      totalCustomers: data.total_customers,
      highProspects: data.category_distribution?.Excellent ?? 0,
      averageSalary: Math.round(data.average_salary),
      approvalRate: Math.round(data.average_prospect_score),
      averageCreditScore: Math.round(data.average_credit_score),
      categoryDistribution: data.category_distribution ?? {},
      topCities: data.top_cities ?? [],
    };
  },

  async getCustomers() {
    const customers: any[] = await request("/customers");

    return customers.map((c) => ({
    id: c.customer_id,
    name: c.name,
    city: c.city,
    occupation: c.occupation,
    salary: c.salary,
    creditScore: c.credit_score,
    prospectScore: c.prospect_score,
    recommendation: {
      loanType: c.loan_type,
    },
  }));
  },

  async getCustomer(id: string) {
    const c: any = await request(`/customer/${id}`);

    return {
      id: c.customer_id,
      customerId: c.customer_id,
      name: c.name,
      age: c.age,
      occupation: c.occupation,
      city: c.city,
      salary: c.salary,
      monthlyExpense: c.monthly_expense,
      savings: c.savings,
      emi: c.emi,
      creditScore: c.credit_score,
      employmentYears: c.employment_years,
      existingLoan: c.existing_loan,
      transactionCount: c.transaction_count,
      loanHistory: c.loan_history,
      emiRatio: c.emi_ratio,
      savingsRatio: c.savings_ratio,
      prospectScore: c.prospect_score,
      category: c.category,
      riskLevel: c.risk_level,
      eligibleProducts: c.eligible_products,
      recommendation: c.recommendation,
    };
  },

  async predictCustomer(data: any) {
    return request("/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },

  async uploadDataset(file: File) {
    const form = new FormData();
    form.append("file", file);

    return request("/upload", {
      method: "POST",
      body: form,
    });
  },
};
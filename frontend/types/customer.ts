export interface LoanRecommendation {
  loanType: string;
  amount?: string;
  confidence?: number;
  risk?: "Low" | "Medium" | "High";
  interestRate?: string;
}

export interface Customer {
  id: string;
  name: string;

  age?: number;
  occupation?: string;
  city?: string;

  salary?: number;
  monthlyExpense?: number;
  savings?: number;
  emi?: number;

  creditScore?: number;
  prospectScore?: number;

  transactionCount?: number;
  employmentYears?: number;

  recommendation?: LoanRecommendation;
}
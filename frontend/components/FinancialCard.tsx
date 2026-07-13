interface Props {
  customer: any;
}

export default function FinancialCard({ customer }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Financial Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Salary</span>
          <span className="font-semibold">
            ₹{customer.salary.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Monthly Expense</span>
          <span>
            ₹{customer.monthlyExpense.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Savings</span>
          <span>
            ₹{customer.savings.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Current EMI</span>
          <span>
            ₹{customer.emi.toLocaleString()}
          </span>
        </div>

      </div>

    </div>
  );
}
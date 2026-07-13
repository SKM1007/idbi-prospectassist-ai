interface Props {
  customer: any;
}

export default function CreditCard({ customer }: Props) {

  const color =
    customer.creditScore >= 750
      ? "text-green-600"
      : customer.creditScore >= 650
      ? "text-orange-500"
      : "text-red-600";

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Credit Analysis
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">

          <span>Credit Score</span>

          <span className={`font-bold ${color}`}>
            {customer.creditScore}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Prospect Score</span>

          <span className="font-bold text-blue-700">
            {customer.prospectScore}
          </span>

        </div>

        <div className="flex justify-between">

          <span>Transactions</span>

          <span>
            {customer.transactionCount}
          </span>

        </div>

      </div>

    </div>
  );
}
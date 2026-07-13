interface Props {
  customer: any;
}

export default function RecommendationCard({
  customer,
}: Props) {
  const score = customer.prospectScore;

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-[#00836C] to-[#006B5B] text-white p-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-2xl font-bold">
              AI Recommendation
            </h2>

            <p className="text-green-100 mt-1">
              ProspectAssist AI Decision Engine
            </p>

          </div>

          <span className="bg-[#F58220] text-white px-4 py-2 rounded-full text-sm font-semibold shadow">
            Recommended
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="bg-white p-6">

        {/* Prospect Score */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-semibold text-gray-700">
              Prospect Score
            </span>

            <span className="text-[#00836C] font-bold">
              {score}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-gray-200">

            <div
              className="h-3 rounded-full bg-[#00836C]"
              style={{
                width: `${score}%`,
              }}
            />

          </div>

        </div>

        {/* Recommendation */}

        <div className="grid grid-cols-2 gap-5 mt-8">

          <div className="border rounded-xl p-4">

            <p className="text-sm text-gray-500">
              Recommended Product
            </p>

            <h3 className="font-bold text-lg text-[#006B5B] mt-1">
              {customer.recommendation.loanType}
            </h3>

          </div>

          <div className="border rounded-xl p-4">

            <p className="text-sm text-gray-500">
              Loan Amount
            </p>

            <h3 className="font-bold text-lg text-[#006B5B] mt-1">
              {customer.recommendation.amount}
            </h3>

          </div>

          <div className="border rounded-xl p-4">

            <p className="text-sm text-gray-500">
              Interest Rate
            </p>

            <h3 className="font-bold text-lg text-[#006B5B] mt-1">
              {customer.recommendation.interestRate}
            </h3>

          </div>

          <div className="border rounded-xl p-4">

            <p className="text-sm text-gray-500">
              Risk Level
            </p>

            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-semibold
              ${
                customer.recommendation.risk === "Low"
                  ? "bg-green-100 text-green-700"
                  : customer.recommendation.risk === "Medium"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {customer.recommendation.risk}
            </span>

          </div>

        </div>

        {/* Confidence */}

        <div className="mt-8">

          <div className="flex justify-between">

            <span className="font-semibold">
              AI Confidence
            </span>

            <span className="font-bold text-[#006B5B]">
              {customer.recommendation.confidence}%
            </span>

          </div>

          <div className="w-full h-2 rounded-full bg-gray-200 mt-2">

            <div
              className="h-2 rounded-full bg-[#F58220]"
              style={{
                width: `${customer.recommendation.confidence}%`,
              }}
            />

          </div>

        </div>

        {/* AI Explanation */}

        <div className="mt-8 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] p-5">

          <h3 className="font-bold text-[#006B5B] mb-4">
            AI Decision Summary
          </h3>

          <ul className="space-y-3 text-gray-700">

            <li>✅ Stable monthly salary credited regularly.</li>

            <li>✅ Strong repayment behaviour observed.</li>

            <li>✅ Healthy savings maintained.</li>

            <li>✅ Credit score meets premium lending criteria.</li>

            <li>✅ EMI-to-income ratio remains within safe limits.</li>

          </ul>

        </div>

        {/* Footer */}

        <div className="mt-8 rounded-xl bg-[#EAF8F5] border border-[#CDEEE5] p-5">

          <h3 className="font-semibold text-[#006B5B]">
            Relationship Manager Recommendation
          </h3>

          <p className="text-gray-700 mt-2 leading-7">

            Based on the AI assessment, this customer demonstrates a
            high probability of accepting the recommended loan product.
            A personalized discussion regarding eligibility,
            repayment options and applicable offers is recommended.

          </p>

        </div>

      </div>

    </div>
  );
}
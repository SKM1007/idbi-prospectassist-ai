"use client";

import {
    BadgeCheck,
    IndianRupee,
    TrendingUp,
    Users,
} from "lucide-react";

interface DashboardCardsProps {
  totalCustomers: number;
  highProspects: number;
  averageSalary: number;
  approvalRate: number;
}

export default function DashboardCards({
  totalCustomers,
  highProspects,
  averageSalary,
  approvalRate,
}: DashboardCardsProps) {
  const cards = [
    {
      title: "Total Customers",
      value: totalCustomers.toLocaleString(),
      subtitle: "Updated Today",
      icon: Users,
    },
    {
      title: "High Prospect Customers",
      value: highProspects.toLocaleString(),
      subtitle: "AI Evaluated",
      icon: TrendingUp,
    },
    {
      title: "Average Monthly Income",
      value: `₹${averageSalary.toLocaleString()}`,
      subtitle: "Customer Portfolio",
      icon: IndianRupee,
    },
    {
      title: "Estimated Conversion Rate",
      value: `${approvalRate}%`,
      subtitle: "Current Prediction",
      icon: BadgeCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="bg-white border border-[#E5E7EB] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
          >

            <div className="flex justify-between items-start">

              <div>

                <p className="text-sm font-medium text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-[#006B5B]">
                  {card.value}
                </h2>

                <p className="mt-2 text-xs text-gray-400">
                  {card.subtitle}
                </p>

              </div>

              <div className="w-14 h-14 rounded-xl bg-[#FFF4E8] flex items-center justify-center">

                <Icon
                  size={28}
                  className="text-[#F58220]"
                />

              </div>

            </div>

            <div className="mt-6">

              <div className="flex justify-between text-sm">

                <span className="text-gray-500">
                  Status
                </span>

                <span className="font-semibold text-[#00836C]">
                  Active
                </span>

              </div>

              <div className="w-full h-2 rounded-full bg-gray-200 mt-2">

                <div
                  className="h-2 rounded-full bg-[#00836C]"
                  style={{
                    width:
                      card.title === "Total Customers"
                        ? "92%"
                        : card.title === "High Prospect Customers"
                        ? "86%"
                        : card.title === "Average Monthly Income"
                        ? "78%"
                        : "94%",
                  }}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>
  );
}
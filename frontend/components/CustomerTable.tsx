"use client";

import { Customer } from "@/types/customer";
import Link from "next/link";

interface Props {
  customers: Customer[];
}

export default function CustomerTable({ customers }: Props) {
  return (
    <div className="bg-white rounded-xl shadow mt-8 overflow-hidden">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-4 text-left">Customer</th>
            <th className="text-left">Salary</th>
            <th className="text-left">Credit</th>
            <th className="text-left">Prospect</th>
            <th className="text-left">Loan</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {customers?.map((customer) => (
            <tr
              key={customer.id}
              className="border-b hover:bg-slate-50"
            >
              <td className="p-4">
                <div>
                  <p className="font-semibold">
                    {customer.name ?? "N/A"}
                  </p>
                  <p className="text-sm text-gray-500">
                    {customer.occupation ?? "N/A"}
                  </p>
                </div>
              </td>

              <td>
                {customer.salary != null
                  ? `₹${customer.salary.toLocaleString()}`
                  : "N/A"}
              </td>

              <td>{customer.creditScore ?? "N/A"}</td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {customer.prospectScore ?? "N/A"}
                </span>
              </td>

              <td>
                {customer.recommendation?.loanType ?? "N/A"}
              </td>

              <td>
                <Link
                  href={`/customer/${customer.id}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}

          {customers?.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-6 text-gray-500">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
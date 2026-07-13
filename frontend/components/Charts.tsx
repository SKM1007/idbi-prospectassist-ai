"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const incomeData = [
  { range: "20K", customers: 20 },
  { range: "40K", customers: 45 },
  { range: "60K", customers: 85 },
  { range: "80K", customers: 65 },
  { range: "100K", customers: 30 },
];

const loanData = [
  { name: "Home Loan", value: 40 },
  { name: "Personal Loan", value: 28 },
  { name: "Vehicle Loan", value: 18 },
  { name: "Education Loan", value: 14 },
];

const COLORS = [
  "#00836C",
  "#F58220",
  "#65C18C",
  "#006B5B",
];

export default function Charts() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

      {/* Income Distribution */}

      <div className="dashboard-card">

        <div className="mb-6">

          <h2 className="section-title">
            Income Distribution
          </h2>

          <p className="page-subtitle">
            Customer salary segmentation
          </p>

        </div>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <BarChart
            data={incomeData}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="range"
            />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="customers"
              fill="#00836C"
              radius={[8,8,0,0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Loan Distribution */}

      <div className="dashboard-card">

        <div className="mb-6">

          <h2 className="section-title">
            Loan Recommendation Distribution
          </h2>

          <p className="page-subtitle">
            AI suggested products
          </p>

        </div>

        <ResponsiveContainer
          width="100%"
          height={320}
        >

          <PieChart>

            <Pie
              data={loanData}
              dataKey="value"
              outerRadius={110}
              innerRadius={55}
              paddingAngle={4}
              label
            >

              {loanData.map((entry, index) => (

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}
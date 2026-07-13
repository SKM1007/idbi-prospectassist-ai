import Charts from "@/components/Charts";
import CustomerTable from "@/components/CustomerTable";
import DashboardCards from "@/components/DashboardCards";
import Layout from "@/components/Layout";
import { api } from "@/services/api";

export default async function DashboardPage() {
  // Fetch live data from backend
  const dashboard = await api.getDashboard();
  const customers = await api.getCustomers();

  // Sort customers by prospect score
  const topCustomers = [...customers]
    .sort((a, b) => b.prospectScore - a.prospectScore)
    .slice(0, 5);

  return (
    <Layout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">
          Relationship Manager Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          AI Powered Customer Prospect Identification System
        </p>
      </div>

      {/* KPI Cards */}
      <DashboardCards
        totalCustomers={dashboard.totalCustomers}
        highProspects={dashboard.highProspects}
        averageSalary={dashboard.averageSalary}
        approvalRate={dashboard.approvalRate}
      />

      {/* Charts */}
      <div className="mt-8">
        <Charts />
      </div>

      {/* Customer Table */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          High Prospect Customers
        </h2>

        <CustomerTable customers={topCustomers} />
      </div>
    </Layout>
  );
}
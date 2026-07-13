import CustomerTable from "@/components/CustomerTable";
import Layout from "@/components/Layout";
import { api } from "@/services/api";

export default async function CustomersPage() {

  const customers = await api.getCustomers();

  return (

    <Layout>

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Customer Database
        </h1>

        <p className="text-gray-500">
          AI analyzed banking customers
        </p>

      </div>

      <CustomerTable customers={customers} />

    </Layout>

  );
}
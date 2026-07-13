import CreditCard from "@/components/CreditCard";
import CustomerInfoCard from "@/components/CustomerInfoCard";
import FinancialCard from "@/components/FinancialCard";
import Layout from "@/components/Layout";
import RecommendationCard from "@/components/RecommendationCard";
import { api } from "@/services/api";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CustomerPage({ params }: Props) {

  const { id } = await params;

  const customer = await api.getCustomer(id);

  if (!customer) {
    return (
      <Layout>
        <h1 className="text-2xl font-bold">
          Customer Not Found
        </h1>
      </Layout>
    );
  }

  return (
    <Layout>

      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Customer Insights
        </h1>

        <p className="text-gray-500">
          AI-powered financial analysis
        </p>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <CustomerInfoCard customer={customer} />

        <FinancialCard customer={customer} />

        <CreditCard customer={customer} />

        <RecommendationCard customer={customer} />

      </div>

    </Layout>
  );
}
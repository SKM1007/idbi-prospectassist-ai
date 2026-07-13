interface Props {
  customer: any;
}

export default function CustomerInfoCard({ customer }: Props) {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-bold mb-5">
        Customer Information
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Name</span>
          <span className="font-semibold">{customer.name}</span>
        </div>

        <div className="flex justify-between">
          <span>Age</span>
          <span>{customer.age}</span>
        </div>

        <div className="flex justify-between">
          <span>Occupation</span>
          <span>{customer.occupation}</span>
        </div>

        <div className="flex justify-between">
          <span>City</span>
          <span>{customer.city}</span>
        </div>

        <div className="flex justify-between">
          <span>Employment</span>
          <span>{customer.employmentYears} Years</span>
        </div>

      </div>

    </div>
  );
}
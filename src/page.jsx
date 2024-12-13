import { columns } from "./components/transactions/columns";
import { DataTable } from "./components/transactions/data-table";
import { payments } from "./data/payments";

export default function PaymentsPage() {
  return (
    (<div className="container mx-auto py-10">
      <DataTable columns={columns} data={payments} />
    </div>)
  );
}


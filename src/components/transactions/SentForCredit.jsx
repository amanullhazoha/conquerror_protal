import { payments } from "@/data/payments";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function SentForCredit() {
    return (
        <div>
            <DataTable columns={columns} data={payments} />
        </div>
    )
}


import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { TransactionRecord } from "./transaction-record";

export function TransactionsTab() {
    const [globalFilter, setGlobalFilter] = useState("")

    return (
        (<div className="border rounded-xl overflow-hidden bg-white">
            {/* header */}
            <div className="flex justify-between items-center p-2 px-3">
                <p >Transaction History</p>
                <div className="flex gap-2">
                    <Input
                        placeholder="Search"
                        value={globalFilter ?? ""}
                        onChange={(event) => setGlobalFilter(String(event.target.value))}
                        className="max-w-sm min-w-52"
                    />
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder="Date" />
                        </SelectTrigger>
                        <SelectContent align="end">
                            <SelectItem value="light">Amount</SelectItem>
                            <SelectItem value="dark">Date</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {/* main table */}
            <div>
                <div className="w-full">
                    {[1, 2, 3].map((item, index) => (
                        <TransactionRecord
                            key={index}
                            status="Paid"
                            holdStatus="Hold"
                            paymentType="Visa"
                            refAgency="Ref Agency"
                            passport="Passport"
                            amount={1000}
                            submissionDate={new Date()}
                            paymentDate={new Date()}
                            onView={() => { }}
                            onDownload={() => { }}
                            onSendMail={() => { }}
                        />
                    ))}


                </div>
            </div>

        </div>)
    );
}




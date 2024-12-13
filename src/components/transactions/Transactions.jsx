import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ActivityHistoryTab } from "./ActivityHistoryTab"
import { SentForCreditTab } from "./SentForCreditTab"
import { TransactionsTab } from "./TransactionsTab"

const tabs = [
    { label: 'Deposit', value: "deposit", component: <div /> },
    { label: 'Sent for Credit', value: "sentforcredit", component: <SentForCreditTab /> },
    { label: 'Activity', value: "activity", component: <ActivityHistoryTab /> },
    { label: 'Transactions', value: "transactions", component: <TransactionsTab /> },
    { label: 'History', value: "history", component: <div /> },
    { label: 'Rejected', value: "rejected", component: <div /> },
]

export default function Transactions() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className=" w-full max-w-[80vw] border p-10 rounded-lg">
                <Tabs defaultValue="sentforcredit" className="w-full">
                    <TabsList className="flex whitespace-nowrap mb-6">
                        {tabs.map(tab => (
                            <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
                        ))}
                    </TabsList>
                    {
                        tabs.map(tab => (
                            <TabsContent key={tab.value} value={tab.value}>
                                {tab.component}
                            </TabsContent>
                        ))
                    }
                </Tabs>

            </div>
        </div>
    )
}

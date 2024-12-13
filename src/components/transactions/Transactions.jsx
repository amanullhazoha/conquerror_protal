import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SentForCredit from "./SentForCredit"

const tabs = [
    { label: 'Deposit', value: "deposit", component: <div /> },
    { label: 'Sent for Credit', value: "sentforcredit", component: <SentForCredit /> },
    { label: 'Withdraw', value: "withdraw", component: <div /> },
    { label: 'Transfer', value: "transfer", component: <div /> },
    { label: 'History', value: "history", component: <div /> },
    { label: 'Rejected', value: "rejected", component: <div /> },
]

export default function Transactions() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="min-w-max w-full max-w-5xl border p-10 rounded-lg">
                <Tabs defaultValue="sentforcredit" className="w-full">
                    <TabsList className="flex whitespace-nowrap">
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

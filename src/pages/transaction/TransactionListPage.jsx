import PrivateLayout from "@/components/layouts/PrivateLayout";
import { TransactionsTab } from "@/components/transactions/TransactionsTab";
import { SentForCreditTab } from "@/components/transactions/SentForCreditTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityHistoryTab } from "@/components/transactions/ActivityHistoryTab";

const tabs = [
  { label: "Deposit", value: "deposit", component: <SentForCreditTab /> },
  {
    label: "Sent for Credit",
    value: "sentforcredit",
    component: <SentForCreditTab />,
  },
  { label: "Activity", value: "activity", component: <ActivityHistoryTab /> },
  {
    label: "Transactions",
    value: "transactions",
    component: <TransactionsTab />,
  },
  { label: "History", value: "history", component: <SentForCreditTab /> },
  { label: "Rejected", value: "rejected", component: <SentForCreditTab /> },
];

export default function Transactions() {
  return (
    <PrivateLayout>
      <h3 className="text-[#111928] text-[24px] leading-[28px] font-semibold mb-[28px]">
        Transaction
      </h3>

      <div className="min-h-[calc(100vh-10rem)] flex items-start justify-center">
        <div className=" w-full rounded-lg">
          <Tabs defaultValue="sentforcredit" className="w-full">
            <TabsList className="flex whitespace-nowrap mb-6">
              {tabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                {tab.component}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </PrivateLayout>
  );
}

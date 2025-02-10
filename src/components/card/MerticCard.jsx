import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import CardImage from "@/assets/images/card.png";
import graphImage from "@/assets/images/graph.png";

const MetricCard = () => {
  return (
    <Card className="p-4 rounded-2xl shadow-md border flex flex-col gap-3 w-full">
      <div className="flex items-center gap-2">
        <div className="bg-orange-100 p-2 rounded-xl">
          <img src={CardImage} alt="Icon" className="w-6 h-6" />
        </div>

        <h3 className="text-lg font-medium">New Entry Application</h3>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="text-4xl font-bold">573</div>

          <div className="flex items-center text-green-500 font-medium text-sm">
            <ArrowUpRight className="w-4 h-4" />
            <span className="ml-1">100%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>

        <img
          alt="Graph"
          src={graphImage}
          className="w-[128px] h-16 object-cover"
        />
      </div>
    </Card>
  );
};

export default MetricCard;

import { Card } from "@/components/ui/card";
import CardImage from "@/assets/images/card.png";
import { ArrowUp, ArrowDown } from "lucide-react";
import graphImage from "@/assets/images/graph.png";
import graphImageDown from "@/assets/images/grapImageDown.png";

const MetricCard = ({ title, graphType, value, cardImage, percent }) => {
  return (
    <Card className="p-4 rounded-2xl shadow-md border flex flex-col gap-3 w-full">
      <div className="flex items-center gap-2">
        <div className="rounded-xl">
          <img
            src={cardImage ? cardImage : CardImage}
            alt="Icon"
            className="w-12 h-12"
          />
        </div>

        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="text-4xl font-500 mb-2">{value}</div>

          <div
            className={`flex items-center font-medium text-sm ${
              graphType === "up" ? "text-green-500" : "text-red-500"
            }`}
          >
            {graphType === "up" ? (
              <ArrowUp className="w-4 h-4" />
            ) : (
              <ArrowDown className="w-4 h-4" />
            )}
            <span className="ml-1">{percent}%</span>
            <span className="text-gray-500 ml-1">vs last month</span>
          </div>
        </div>

        <img
          alt="Graph"
          className="w-[128px] h-16 object-cover"
          src={graphType === "up" ? graphImage : graphImageDown}
        />
      </div>
    </Card>
  );
};

export default MetricCard;

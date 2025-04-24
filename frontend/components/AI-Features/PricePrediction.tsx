import { Button } from "@/components/ui/button";
import { Brain, TrendingUp } from "lucide-react";

const ChartBar = ({ height, month }: { height: number; month: string }) => (
  <div className="w-1/12 mx-0.5">
    <div className={`bg-blue-500 h-${height} rounded-t-sm`}></div>
    <div className="text-xs text-center mt-1">{month}</div>
  </div>
);

const PricePredictionCard = ({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-6">
      <div className="p-3 rounded-full mr-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-700 mb-6">{description}</p>
    {children}
  </div>
);

export default function PricePrediction() {
  const chartData = [24, 28, 32, 30, 36, 40, 42, 44, 40, 38, 36, 34];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Rental Price Prediction</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PricePredictionCard
          title="Market Trend Analysis"
          description="Our AI analyzes historical rental data, seasonal trends, and market conditions to predict how prices will change in the coming months. This helps you make informed decisions about when to rent and what to expect for renewal."
          icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
        >
          <div className="relative h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
            <div className="w-full h-full">
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm font-medium text-gray-700">Rental Price Trends (1BR Apartment)</div>
                  <div className="text-xs text-gray-500">Last 12 months</div>
                </div>
                <div className="flex items-end h-44 w-full">
                  {months.map((month, index) => (
                    <ChartBar key={month} height={chartData[index]} month={month} />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <div>$1,500</div>
                  <div>$2,200</div>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
              Live Data
            </div>
          </div>
          <Button className="w-full">View Price Trends</Button>
        </PricePredictionCard>

        <PricePredictionCard
          title="Fair Price Estimator"
          description="Not sure if a property is priced fairly? Our AI compares similar properties in the area, taking into account amenities, size, condition, and location to determine if you're getting a good deal."
          icon={<Brain className="h-6 w-6 text-green-600" />}
        >
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
              <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter address" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                <select className="w-full p-2 border rounded-md">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                <select className="w-full p-2 border rounded-md">
                  <option>1</option>
                  <option>1.5</option>
                  <option>2</option>
                  <option>2.5+</option>
                </select>
              </div>
            </div>
          </div>
          <Button className="w-full">Estimate Fair Price</Button>
        </PricePredictionCard>
      </div>
    </div>
  );
}

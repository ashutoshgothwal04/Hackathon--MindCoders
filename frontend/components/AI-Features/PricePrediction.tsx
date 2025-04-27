"use client"; // Add this directive for client-side interactivity

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, TrendingUp, Loader2 } from "lucide-react";

const ChartBar = ({ height, month }: { height: number; month: string }) => (
  <div className="w-1/12 mx-0.5 flex flex-col items-center">
    {/* Note: Tailwind CSS needs full class names, dynamic class concatenation like `h-${height}` won't work reliably without configuration.
        Using inline style for dynamic height. Ensure your Tailwind config safelists dynamic height classes if you prefer that approach. */}
    <div
      className={`bg-blue-500 w-full rounded-t-sm`}
      style={{ height: `${height * 3}px` }} // Example scaling factor
    ></div>
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
  <div className="bg-white dark:bg-bg-color rounded-lg shadow-md p-6 flex flex-col">
    <div className="flex items-center mb-6">
      <div className="p-3 rounded-full mr-4 bg-gray-100 dark:bg-gray-700">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
    <p className="text-gray-700 dark:text-gray-400 mb-6 flex-grow">{description}</p>
    {children}
  </div>
);

export default function PricePrediction() {
  const chartData = [24, 28, 32, 30, 36, 40, 42, 44, 40, 38, 36, 34]; // Example data points
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // State for Fair Price Estimator
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("2");
  const [bathrooms, setBathrooms] = useState("1.5");
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEstimatePrice = async () => {
    setIsLoading(true);
    setError(null);
    setEstimatedPrice(null);

    // Basic validation
    if (!address.trim()) {
      setError("Please enter a property address.");
      setIsLoading(false);
      return;
    }

    // Simulate AI processing time
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // --- Mock AI Price Calculation ---
      // In a real app, this would be an API call to your backend AI model.
      // This is a very basic mock calculation for demonstration.
      const basePrice = 1500;
      const bedroomFactor = parseInt(bedrooms) * 300;
      const bathroomFactor = parseFloat(bathrooms) * 150;
      // Add some randomness based on address length (simple mock)
      const addressFactor = (address.length % 5) * 50;

      const calculatedPrice = basePrice + bedroomFactor + bathroomFactor + addressFactor;
      // --- End Mock Calculation ---

      setEstimatedPrice(calculatedPrice);
    } catch (err) {
      console.error("Estimation failed:", err);
      setError("Failed to estimate price. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">AI-Powered Price Insights</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Market Trend Analysis Card */}
        <PricePredictionCard
          title="Market Trend Analysis"
          description="Our AI analyzes historical rental data, seasonal trends, and market conditions to predict how prices might change. Make informed decisions about timing your rental or lease renewal."
          icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
        >
          <div className="relative h-64 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden p-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Rental Price Trends (Example)</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Last 12 months</div>
            </div>
            <div className="flex items-end h-44 w-full border-b border-gray-300 dark:border-gray-600 pb-1">
              {months.map((month, index) => (
                <ChartBar key={month} height={chartData[index]} month={month} />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
              {/* These values should ideally correspond to the chart's scale */}
              <div>Min Price</div>
              <div>Max Price</div>
            </div>
            <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded">
              Mock Data
            </div>
          </div>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Detailed Trends</Button>
        </PricePredictionCard>

        {/* Fair Price Estimator Card */}
        <PricePredictionCard
          title="Fair Price Estimator"
          description="Enter property details to get an AI-driven estimate of its fair market rental price based on comparable properties, features, and location factors."
          icon={<Brain className="h-6 w-6 text-green-600" />}
        >
          <div className="space-y-4 mb-6">
            <div>
              <label htmlFor="address" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                Property Address
              </label>
              <input
                id="address"
                type="text"
                className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="e.g., 123 Main St, Anytown"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                disabled={isLoading}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="bedrooms" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                  Bedrooms
                </label>
                <select
                  id="bedrooms"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>
              <div>
                <label htmlFor="bathrooms" className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-1">
                  Bathrooms
                </label>
                <select
                  id="bathrooms"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={bathrooms}
                  onChange={(e) => setBathrooms(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="1">1</option>
                  <option value="1.5">1.5</option>
                  <option value="2">2</option>
                  <option value="2.5">2.5</option>
                  <option value="3">3+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Estimation Result Area */}
          <div className="mt-4 mb-6 min-h-[60px] flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
            {isLoading ? (
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                <span>Estimating price...</span>
              </div>
            ) : error ? (
              <p className="text-red-600 text-sm text-center">{error}</p>
            ) : estimatedPrice !== null ? (
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Estimated Fair Monthly Rent:</p>
                <p className="text-2xl font-bold text-green-600">
                  ${estimatedPrice.toLocaleString()}
                </p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Enter details above to get a price estimate.
              </p>
            )}
          </div>

          <Button
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={handleEstimatePrice}
            disabled={isLoading}
          >
            {isLoading ? "Estimating..." : "Estimate Fair Price"}
          </Button>
        </PricePredictionCard>
      </div>
    </div>
  );
}

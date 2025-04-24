import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { features } from "./Data/Data";

export default function Overview() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Smart Features for Modern Renting
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className={`bg-${feature.iconColor}-600 h-2`}></div>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div
                    className={`bg-${feature.iconColor}-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4`}
                  >
                    <feature.icon
                      className={`h-8 w-8 text-${feature.iconColor}-600`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2 mb-4">
                    {feature.listItems.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Check, Play } from "lucide-react"
import Image from 'next/image'
import { tourTypesData } from "./Data/Data"



export default function TourType() {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Tour Types</h2>
      <Tabs defaultValue={tourTypesData[0].value} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {tourTypesData.map((tour) => (
            <TabsTrigger key={tour.value} value={tour.value}>
              {tour.triggerLabel}
            </TabsTrigger>
          ))}
        </TabsList>

        {tourTypesData.map((tour) => (
          <TabsContent key={tour.value} value={tour.value} className="bg-white dark:bg-bg-color rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-400">
                  {tour.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tour.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1 flex-shrink-0">
                        <Check className="h-4 w-4 text-blue-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-blue-600 dark:text-white hover:bg-blue-700">
                  {tour.buttonLabel}
                </Button>
              </div>
              <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
                <Image src={`/placeholder.svg?height=400&width=600`} alt={tour.imageAlt} fill className="object-cover" />
                {tour.showPlayButton && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 p-4 rounded-full">
                      <Play className="h-12 w-12 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

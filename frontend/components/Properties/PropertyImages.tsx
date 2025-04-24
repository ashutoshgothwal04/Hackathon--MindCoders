import Image from "next/image";
import { property } from "./data/data";
import { Button } from "../ui/button";

export default function PropertyImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
    <div className="md:col-span-8">
      <div className="relative h-[500px] w-full rounded-2xl overflow-hidden">
        <Image src={property.images[0] || "/placeholder.svg"} alt={property.title} fill className="object-cover" />
      </div>
    </div>
    <div className="md:col-span-4 grid grid-rows-2 gap-4">
      {property.images.slice(1, 3).map((image, index) => (
        <div key={index} className="relative h-[240px] rounded-2xl overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${property.title} - Image ${index + 2}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
    <div className="absolute bottom-6 right-6 z-10">
      <Button className="bg-white text-gray-800 hover:bg-gray-100 shadow-lg rounded-full px-6">
        View All Photos
      </Button>
    </div>
  </div>
  )
}

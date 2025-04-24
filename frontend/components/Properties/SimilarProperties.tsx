import { Bath, Bed, ChevronRight, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function SimilarProperties() {
  return (
    <div className="mt-16">
    <div className="flex justify-between items-end mb-8">
      <h2 className="text-3xl font-bold">Similar Properties</h2>
      <Link
        href="/properties"
        className="text-blue-600 font-medium flex items-center group"
      >
        View All
        <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow"
        >
          <div className="relative h-60">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Similar Property"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
              Similar Apartment {i}
            </h3>
            <p className="text-gray-500 mb-3 flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              Downtown, New York
            </p>
            <p className="font-bold text-xl text-blue-600 mb-4">
              $2,300/month
            </p>
            <div className="flex text-sm text-gray-600 mb-6">
              <span className="flex items-center mr-4">
                <Bed className="h-4 w-4 mr-1 text-blue-500" />2 beds
              </span>
              <span className="flex items-center mr-4">
                <Bath className="h-4 w-4 mr-1 text-blue-500" />2 baths
              </span>
              <span className="flex items-center">
                <Square className="h-4 w-4 mr-1 text-blue-500" />
                1,100 sq ft
              </span>
            </div>
            <Button className="w-full py-6 rounded-xl">View Details</Button>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

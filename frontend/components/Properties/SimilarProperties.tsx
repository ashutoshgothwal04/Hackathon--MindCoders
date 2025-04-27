import { Bath, Bed, ChevronRight, MapPin, Square } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { PropertyCard } from "../property-card";
import { properties } from "./data/data";

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
      {properties.slice(0, 3).map((property, i) => (
        <PropertyCard
          key={property.id}
          property={property}
        />
      ))}
    </div>
  </div>
  )
}

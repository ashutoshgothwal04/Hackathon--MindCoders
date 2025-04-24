"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, X, Bed, Bath, Square, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample property data
const comparisonProperties = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, New York",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/placeholder.svg?height=400&width=600",
    amenities: [
      "Air Conditioning",
      "Washer/Dryer",
      "Dishwasher",
      "Parking",
      "Gym",
      "Elevator",
      "Balcony",
      "Pet Friendly",
    ],
  },
  {
    id: "2",
    title: "Cozy Studio in Historic District",
    location: "Old Town, Chicago",
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    area: 750,
    image: "/placeholder.svg?height=400&width=600",
    amenities: ["Air Conditioning", "Washer/Dryer", "Dishwasher", "Parking", "Elevator"],
  },
  {
    id: "3",
    title: "Luxury Penthouse with Rooftop",
    location: "Marina District, San Francisco",
    price: 5500,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2200,
    image: "/placeholder.svg?height=400&width=600",
    amenities: [
      "Air Conditioning",
      "Washer/Dryer",
      "Dishwasher",
      "Parking",
      "Gym",
      "Elevator",
      "Balcony",
      "Pool",
      "Pet Friendly",
      "Furnished",
    ],
  },
]

// All possible amenities for comparison
const allAmenities = [
  "Air Conditioning",
  "Washer/Dryer",
  "Dishwasher",
  "Parking",
  "Gym",
  "Elevator",
  "Balcony",
  "Pool",
  "Pet Friendly",
  "Furnished",
]

export function PropertyComparison() {
  const [properties, setProperties] = useState(comparisonProperties)

  const removeProperty = (id: string) => {
    setProperties(properties.filter((property) => property.id !== id))
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-8">Property Comparison</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left p-4 font-medium text-gray-500">Property</th>
              {properties.map((property) => (
                <th key={property.id} className="p-4 min-w-[250px]">
                  <div className="relative">
                    <button
                      onClick={() => removeProperty(property.id)}
                      className="absolute -top-2 -right-2 z-10 bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                    <p className="text-gray-500 flex items-center mb-2">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      {property.location}
                    </p>
                    <p className="text-xl font-bold text-blue-600">${property.price}/mo</p>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium">Bedrooms</td>
              {properties.map((property) => (
                <td key={property.id} className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <Bed className="h-5 w-5 text-blue-500 mr-2" />
                    {property.bedrooms}
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium">Bathrooms</td>
              {properties.map((property) => (
                <td key={property.id} className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <Bath className="h-5 w-5 text-blue-500 mr-2" />
                    {property.bathrooms}
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium">Area</td>
              {properties.map((property) => (
                <td key={property.id} className="p-4 text-center">
                  <div className="flex items-center justify-center">
                    <Square className="h-5 w-5 text-blue-500 mr-2" />
                    {property.area} sq ft
                  </div>
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-4 font-medium">Price</td>
              {properties.map((property) => (
                <td key={property.id} className="p-4 text-center font-bold text-blue-600">
                  ${property.price}/mo
                </td>
              ))}
            </tr>

            {/* Amenities */}
            <tr className="bg-gray-50">
              <td colSpan={properties.length + 1} className="p-4 font-semibold text-lg">
                Amenities
              </td>
            </tr>

            {allAmenities.map((amenity) => (
              <tr key={amenity} className="border-b border-gray-100">
                <td className="p-4 font-medium">{amenity}</td>
                {properties.map((property) => (
                  <td key={property.id} className="p-4 text-center">
                    {property.amenities.includes(amenity) ? (
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-gray-300 mx-auto" />
                    )}
                  </td>
                ))}
              </tr>
            ))}

            {/* Actions */}
            <tr>
              <td className="p-4"></td>
              {properties.map((property) => (
                <td key={property.id} className="p-4">
                  <Link href={`/properties/${property.id}`}>
                    <Button className="w-full rounded-xl">View Details</Button>
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 mb-4">Want to compare with more properties?</p>
        <Button variant="outline" className="rounded-xl">
          <Link href="/properties">Browse More Properties</Link>
        </Button>
      </div>
    </div>
  )
}

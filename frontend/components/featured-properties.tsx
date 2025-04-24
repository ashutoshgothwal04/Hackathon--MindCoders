"use client"

import { PropertyCard } from "@/components/property-card"

// Sample property data
const properties = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, New York",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/placeholder.svg?height=600&width=800",
    isVerified: true,
    rating: 4.8,
    isAIMatch: true,
    matchPercentage: 95,
  },
  {
    id: "2",
    title: "Cozy Studio in Historic District",
    location: "Old Town, Chicago",
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    area: 750,
    image: "/placeholder.svg?height=600&width=800",
    isVerified: true,
    rating: 4.6,
    isAIMatch: true,
    matchPercentage: 88,
  },
  {
    id: "3",
    title: "Luxury Penthouse with Rooftop",
    location: "Marina District, San Francisco",
    price: 5500,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2200,
    image: "/placeholder.svg?height=600&width=800",
    isVerified: true,
    rating: 4.9,
  },
]

export function FeaturedProperties() {
  // Dummy function for onCompareToggle as this section likely doesn't use the main compare state
  const handleDummyCompare = () => {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {properties.map((property) => (
        <PropertyCard 
          key={property.id} 
          property={property} 
          onCompareToggle={handleDummyCompare} // Pass dummy function
          isComparing={false} // Pass false as default
        />
      ))}
    </div>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Bed, Bath, Square, Star, X, Check } from "lucide-react"

interface PropertyCardProps {
  property: {
    id: string
    title: string
    location: string
    price: number
    bedrooms: number
    bathrooms: number
    area: number
    image: string
    isVerified: boolean
    rating: number
    isAIMatch?: boolean
    matchPercentage?: number
  };
  onCompareToggle: (id: string, add: boolean) => void;
  isComparing: boolean;
}

export function PropertyCard({ property, onCompareToggle, isComparing }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-0 rounded-2xl group">
      <div className="relative">
        {/* Property Image */}
        <Link href={`/properties/${property.id}`}>
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10">
          <Heart className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors" />
        </button>

        {/* AI Match Badge */}
        {property.isAIMatch && (
          <div className="absolute bottom-4 left-4 z-10">
            <Badge className="bg-blue-600 hover:bg-blue-700 text-xs py-0.5 px-2 rounded-full">
              {property.matchPercentage}% Match
            </Badge>
          </div>
        )}

        {/* Verified Badge */}
        {property.isVerified && (
          <div className="absolute bottom-4 right-4 z-10">
            <Badge variant="outline" className="bg-white text-xs py-0.5 px-2 rounded-full">
              <Star className="h-3 w-3 text-yellow-500 mr-1" fill="currentColor" />
              Verified
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Price */}
        <div className="flex justify-between items-center mb-3">
          <p className="text-xl font-bold text-blue-600">${property.price.toLocaleString()}/mo</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/properties/${property.id}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors">{property.title}</h3>
        </Link>

        {/* Location */}
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <p className="text-sm">{property.location}</p>
        </div>

        {/* Features */}
        <div className="flex justify-between text-sm text-gray-600 mb-6">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1 text-blue-500" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1 text-blue-500" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1 text-blue-500" />
            <span>{property.area} sq ft</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl h-12">
            <Link href={`/properties/${property.id}`} className="w-full">
              View Details
            </Link>
          </Button>
          <Button 
            variant={isComparing ? "default" : "outline"} 
            className={`w-full rounded-xl h-12 ${isComparing ? 'bg-red-500 hover:bg-red-600' : ''}`}
            onClick={() => onCompareToggle(property.id, !isComparing)}
          >
            {isComparing ? "Remove" : "Compare"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

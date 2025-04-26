import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, MapPin, Bed, Bath, Square, Star, X, Check } from "lucide-react"
import { useState } from "react" // Import useState

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
    liked?: boolean // Optional liked state from context
  };
  onCompareToggle: (id: string, add: boolean) => void;
  isComparing: boolean;
  // Add props for like functionality if state is managed externally
  // isLiked: boolean;
  // onLikeToggle: (id: string, like: boolean) => void;
}

export function PropertyCard({ property, onCompareToggle, isComparing }: PropertyCardProps) {
  // Local state for liked status - ideally lift this up if needed globally
  const [isLiked, setIsLiked] = useState(property.liked ?? false);

  const handleLikeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent triggering link navigation if any parent is a link
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    // TODO: Call an actual API or state management function here
    // If state were managed externally, you'd call the prop:
    // onLikeToggle(property.id, newLikedState);
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md border-0 rounded-2xl group">
      <div className="relative">
        {/* Property Image */}
        <Link href={`/properties/${property.id}`} passHref>
          <div className="relative h-64 w-full overflow-hidden cursor-pointer">
            <Image
              src={property.image || "/placeholder.svg"}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Add sizes for optimization
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              priority // Consider adding priority for above-the-fold images
            />
          </div>
        </Link>

        {/* Wishlist Button */}
        <button
          onClick={handleLikeClick}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
          aria-label={isLiked ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isLiked ? "text-red-500 fill-red-500" : "text-gray-500 hover:text-red-500"
            }`}
          />
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
            <Badge variant="outline" className="bg-white text-xs py-0.5 px-2 rounded-full border border-gray-200">
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
        <Link href={`/properties/${property.id}`} passHref>
           <h3 className="text-xl font-semibold mb-2 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2" title={property.title}>
             {property.title}
           </h3>
        </Link>

        {/* Location */}
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
          <p className="text-sm truncate" title={property.location}>{property.location}</p>
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
           <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl h-12">
             <Link href={`/properties/${property.id}`} className="w-full">
               View Details
             </Link>
           </Button>
          <Button
            variant={isComparing ? "destructive" : "outline"} // Use destructive variant for remove
            className={`w-full rounded-xl h-12 transition-colors ${
              isComparing ? 'bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600' : 'border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => onCompareToggle(property.id, !isComparing)}
          >
            {isComparing ? "Remove" : "Compare"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

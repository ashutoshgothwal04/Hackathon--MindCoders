import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Suspense } from "react"
import { properties } from "./data/data"

interface PropertySectionProps {
  handleCompareToggle: (id: string, isComparing: boolean) => void;
  comparingProperties: string[];
}

function PropertyListSkeleton() {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 animate-pulse"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mb-4"></div>
              <div className="flex justify-between mb-4">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
              </div>
              <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

export default function PropertySection({handleCompareToggle, comparingProperties}: PropertySectionProps) {
  

  return (
    <div className="lg:w-3/4">
    {/* Results Header */}
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
      <div>
        <h2 className="text-xl font-semibold">{properties.length} Properties Found</h2>
        <p className="text-gray-500">Based on your search criteria</p>
      </div>
      <div className="flex items-center mt-4 sm:mt-0">
        <span className="text-sm text-gray-600 mr-2">Sort by:</span>
        <Select defaultValue="recommended">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="newest">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>

    {/* Property Grid */}
    <Suspense fallback={<PropertyListSkeleton />}>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
        {properties.map((property) => (
          <PropertyCard 
          key={property.id} 
          property={property}                
          onCompareToggle={handleCompareToggle}
          isComparing={comparingProperties.includes(property.id)} />
        ))}
      </div>
    </Suspense>

    {/* Pagination */}
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button>
        <span className="px-2">...</span>
        <Button variant="outline" size="sm">
          8
        </Button>
        <Button variant="outline" size="sm">
          Next
        </Button>
      </nav>
    </div>
  </div>
  )
}

"use client"

import { useState } from "react"
import { Search } from "@/components/search"
import FilterSection from "@/components/Properties/FilterSection"
import PropertySection from "@/components/Properties/PropertySection"
import { BarChart2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PropertiesPage() {
  const [comparingProperties, setComparingProperties] = useState<string[]>([])

  const handleCompareToggle = (id: string, isComparing: boolean) => {
    if (isComparing) {
      setComparingProperties((prev: string[]) => [...prev, id])
    } else {
      setComparingProperties((prev: string[]) => prev.filter((propId: string) => propId !== id))
    }
  }

  const clearComparison = () => {
    setComparingProperties([])
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {comparingProperties.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <BarChart2 className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-medium">
                {comparingProperties.length} {comparingProperties.length === 1 ? "property" : "properties"} selected
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" onClick={clearComparison} className="flex items-center">
                <X className="h-4 w-4 mr-1" />
                Clear
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Link href={`/compare?ids=${comparingProperties.join(",")}`}>Compare Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Home</h1>
      {/* Search Component */}
      <div className="mb-20">
        <Search />
      </div>
      {/* Results Section */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Filters Sidebar */}
        <FilterSection />
        {/* Property Listings */}
        <PropertySection 
          handleCompareToggle={handleCompareToggle} 
          comparingProperties={comparingProperties}
        />
      </div>
    </div>
  )
}

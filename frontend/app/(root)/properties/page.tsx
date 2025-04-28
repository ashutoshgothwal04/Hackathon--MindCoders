"use client"

import { useState } from "react"
import { Search } from "@/components/search"
import FilterSection from "@/components/Properties/FilterSection"
import PropertySection from "@/components/Properties/PropertySection"
import { BarChart2, X, Crown } from "lucide-react"
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
    <div className="container mx-auto px-12 py-8">
      {comparingProperties.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-bg-color shadow-lg z-50 p-4">
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
              <Button size="sm" className="bg-blue-600 dark:text-white hover:bg-blue-700">
                <Link href={`/compare?ids=${comparingProperties.join(",")}`}>Compare Properties</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Find Your Perfect Home</h1>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all duration-300">
          <Crown className="h-4 w-4 mr-2" />
          <Link href="/subscription" className="flex items-center">Upgrade to Premium</Link>
        </Button>
      </div>
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

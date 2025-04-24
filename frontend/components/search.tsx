"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon, MapPin, Filter } from "lucide-react"

export function Search() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [priceRange, setPriceRange] = useState([500, 5000])
  const [bedrooms, setBedrooms] = useState("")
  const [expanded, setExpanded] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would construct a query string and navigate to the search results
    router.push(
      `/properties?location=${location}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&bedrooms=${bedrooms}`,
    )
  }

  return (
    <div className="rounded-2xl bg-zinc-100/70 p-8">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-6">
          {/* Location */}
          <div className="flex-1">
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="location"
                placeholder="City, neighborhood, or address"
                className="pl-12 py-6 text-base rounded-xl"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Price Range */}
          <div className="flex-1">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
              Price Range: ${priceRange[0]} - ${priceRange[1]}
            </label>
            <div className="px-4 py-2">
              <Slider
                defaultValue={[500, 5000]}
                min={0}
                max={10000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>
          </div>

          {/* Bedrooms */}
          <div className="w-full md:w-48">
            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
              Bedrooms
            </label>
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger className="py-6 text-base rounded-xl">
                <SelectValue placeholder="Any" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any</SelectItem>
                <SelectItem value="1">1+</SelectItem>
                <SelectItem value="2">2+</SelectItem>
                <SelectItem value="3">3+</SelectItem>
                <SelectItem value="4">4+</SelectItem>
                <SelectItem value="5">5+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Search Button */}
          <Button
            type="submit"
            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 py-6 px-8 text-base rounded-xl"
          >
            <SearchIcon className="h-5 w-5 mr-2" />
            Search
          </Button>
        </div>

        {/* Advanced Filters - Toggle */}
        <div className="text-center">
          <button
            type="button"
            className="text-blue-600 text-sm font-medium flex items-center mx-auto"
            onClick={() => setExpanded(!expanded)}
          >
            <Filter className="h-4 w-4 mr-2" />
            {expanded ? "Hide Advanced Filters" : "Show Advanced Filters"}
          </button>
        </div>

        {/* Advanced Filters - Content */}
        {expanded && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
            <div>
              <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                Property Type
              </label>
              <Select>
                <SelectTrigger className="py-6 text-base rounded-xl">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                Bathrooms
              </label>
              <Select>
                <SelectTrigger className="py-6 text-base rounded-xl">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label htmlFor="amenities" className="block text-sm font-medium text-gray-700 mb-2">
                Amenities
              </label>
              <Select>
                <SelectTrigger className="py-6 text-base rounded-xl">
                  <SelectValue placeholder="Select amenities" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="parking">Parking</SelectItem>
                  <SelectItem value="pool">Pool</SelectItem>
                  <SelectItem value="gym">Gym</SelectItem>
                  <SelectItem value="pets">Pet Friendly</SelectItem>
                  <SelectItem value="furnished">Furnished</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

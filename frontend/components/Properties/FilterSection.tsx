import { Sliders, MapPin } from "lucide-react"
import { Button } from "../ui/button"

export default function FilterSection() {
  return (
    <div className="lg:w-[30%]">
    <div className="rounded-lg bg-zinc-100/70 p-6 sticky top-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Sliders className="h-5 w-5 text-gray-500" />
      </div>

      {/* Filter Groups */}
      <div className="space-y-6">
        {/* Location */}
        <div>
          <h3 className="font-medium mb-2">Location</h3>
          <div className="flex items-center bg-gray-50 rounded-md p-2">
            <MapPin className="h-5 w-5 text-gray-400 mr-2" />
            <span className="text-sm text-gray-600">New York, USA</span>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <h3 className="font-medium mb-2">Property Type</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input type="checkbox" id="apartment" className="mr-2" />
              <label htmlFor="apartment" className="text-sm">
                Apartment
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="house" className="mr-2" />
              <label htmlFor="house" className="text-sm">
                House
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="condo" className="mr-2" />
              <label htmlFor="condo" className="text-sm">
                Condo
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="townhouse" className="mr-2" />
              <label htmlFor="townhouse" className="text-sm">
                Townhouse
              </label>
            </div>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">$500</span>
            <span className="text-sm text-gray-600">$10,000+</span>
          </div>
          <div className="mt-2 h-2 bg-gray-200 rounded-full">
            <div className="h-full w-3/4 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Bedrooms */}
        <div>
          <h3 className="font-medium mb-2">Bedrooms</h3>
          <div className="grid grid-cols-5 gap-2">
            {["Any", "1+", "2+", "3+", "4+"].map((bed) => (
              <button
                key={bed}
                className="py-1 px-2 text-sm border rounded-md hover:bg-blue-50 hover:border-blue-300"
              >
                {bed}
              </button>
            ))}
          </div>
        </div>

        {/* Bathrooms */}
        <div>
          <h3 className="font-medium mb-2">Bathrooms</h3>
          <div className="grid grid-cols-5 gap-2">
            {["Any", "1+", "2+", "3+", "4+"].map((bath) => (
              <button
                key={bath}
                className="py-1 px-2 text-sm border rounded-md hover:bg-blue-50 hover:border-blue-300"
              >
                {bath}
              </button>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <h3 className="font-medium mb-2">Amenities</h3>
          <div className="space-y-2">
            {["Air Conditioning", "Parking", "Pool", "Gym", "Pet Friendly", "Furnished"].map((amenity) => (
              <div key={amenity} className="flex items-center">
                <input type="checkbox" id={amenity.toLowerCase().replace(" ", "-")} className="mr-2" />
                <label htmlFor={amenity.toLowerCase().replace(" ", "-")} className="text-sm">
                  {amenity}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
      </div>
    </div>
  </div>
  )
}

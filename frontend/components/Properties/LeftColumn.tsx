import { Star,Shield, MapPin, Check, Headset } from "lucide-react";
import { nearbyAmenities, property, propertyDetails, propertyStats, reviews, reviewMetrics, transportationOptions } from "./data/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

export default function LeftColumn() {
 

  return (
    <div className="lg:col-span-2">
    {/* AI Match Badge */}
    {property.matchPercentage && (
      <div className="mb-8 bg-blue-50 border border-blue-200 rounded-2xl p-6 flex items-center">
        <div className="bg-blue-100 p-3 rounded-full mr-6">
          <Star className="h-8 w-8 text-blue-600" fill="currentColor" />
        </div>
        <div>
          <h3 className="font-semibold text-xl text-blue-800 mb-1">
            {property.matchPercentage}% Match with Your Preferences
          </h3>
          <p className="text-blue-600">This property matches your search criteria and preferences</p>
        </div>
      </div>
    )}

    {/* Property Overview */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-600">${property.price.toLocaleString()}/month</h2>
        <div className="flex items-center">
          <Star className="h-5 w-5 text-yellow-500 mr-1" fill="currentColor" />
          <span className="font-medium text-lg">{property.rating}</span>
          <span className="text-gray-500 ml-1">({property.reviews} reviews)</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        {propertyStats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl">
            <stat.icon className="h-6 w-6 text-blue-600 mb-2" />
            <p className="font-semibold text-xl mb-1">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Verified Badge */}
      {property.isVerified && (
        <div className="flex items-center mb-8 p-4 bg-green-50 rounded-xl">
          <Shield className="h-6 w-6 text-green-600 mr-3" />
          <span className="text-green-700 font-medium">
            Verified Property - This listing has been verified by our team
          </span>
        </div>
      )}

      <h3 className="text-2xl font-semibold mb-4">Description</h3>
      <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>
    </div>

    {/* Property Tabs */}
    <Tabs defaultValue="details" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
      <TabsList className="grid grid-cols-4 mb-8">
        <TabsTrigger value="details" className="text-base py-3">
          Details
        </TabsTrigger>
        <TabsTrigger value="amenities" className="text-base py-3">
          Amenities
        </TabsTrigger>
        <TabsTrigger value="location" className="text-base py-3">
          Location
        </TabsTrigger>
        <TabsTrigger value="reviews" className="text-base py-3">
          Reviews
        </TabsTrigger>
      </TabsList>

      <TabsContent value="details" className="space-y-6">
        <h3 className="text-2xl font-semibold mb-4">Property Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {propertyDetails.map((detail, index) => (
            <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
              <div className="w-40 text-gray-500">{detail.label}</div>
              <div className="font-medium">{detail.value}</div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="amenities">
        <h3 className="text-2xl font-semibold mb-6">Amenities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {property.amenities.map((amenity, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
              <Check className="h-5 w-5 text-green-500 mr-3" />
              <span className="font-medium">{amenity}</span>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="location">
        <h3 className="text-2xl font-semibold mb-6">Location</h3>
        <div className="relative h-[400px] w-full rounded-xl mb-6 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1242673770366!2d72.87567487597555!3d19.07283055347406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87e3ed919c1%3A0xcf8e87b16258d5c!2sBandra-Worli%20Sea%20Link!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Property Location"
            className="absolute inset-0"
          ></iframe>
        </div>
        <h4 className="font-semibold text-xl mb-3">Neighborhood</h4>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Located in the heart of Mumbai, this neighborhood offers easy access to restaurants, shopping, and
          public transportation. The area is known for its vibrant nightlife and cultural attractions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-4">Nearby Amenities</h4>
            <ul className="space-y-3">
              {nearbyAmenities.map((amenity, index) => (
                <li key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-4">Transportation</h4>
            <ul className="space-y-3">
              {transportationOptions.map((option, index) => (
                <li key={index} className="flex items-center p-3 bg-gray-50 rounded-xl">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="reviews">
        <h3 className="text-2xl font-semibold mb-6">Reviews</h3>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-8 p-6 bg-gray-50 rounded-xl">
          <div className="bg-white p-6 rounded-xl shadow-sm flex items-center">
            <span className="text-4xl font-bold text-blue-600 mr-3">{property.rating}</span>
            <div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-500"
                    fill={i < Math.floor(property.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{property.reviews} reviews</span>
            </div>
          </div>
          <div className="flex-grow">
            {reviewMetrics.map((metric, index) => (
              <div key={index} className="flex items-center mb-2 last:mb-0">
                <span className="w-24 text-sm">{metric.category}</span>
                <div className="w-48 h-2 bg-gray-200 rounded-full">
                  <div className={`h-full w-${metric.percentage} bg-blue-600 rounded-full`}></div>
                </div>
                <span className="ml-3 text-sm font-medium">{metric.rating}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Reviews */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <div className="flex items-center mb-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 mr-4 overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=100&width=100&text=User${review.id}`}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>

        <Button className="mt-6 rounded-xl">View All Reviews</Button>
      </TabsContent>
    </Tabs>

    {/* Virtual Tour */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
      <h3 className="text-2xl font-semibold mb-6">Virtual Tour</h3>
      <div className="relative h-[400px] w-full bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <Headset className="h-20 w-20 text-blue-600 mx-auto mb-6" />
          <h4 className="text-xl font-semibold mb-3">Experience this property in VR</h4>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Take a virtual tour of this property from anywhere, anytime. Explore every room as if you were
            actually there.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-7 py-3 h-auto text-lg">
            Start Virtual Tour
          </Button>
        </div>
      </div>
    </div>

    {/* Property Comparison Tool */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h3 className="text-2xl font-semibold mb-6">Compare Properties</h3>
      <p className="text-gray-600 mb-6">
        Add this property to your comparison list to compare features, prices, and amenities with other
        properties.
      </p>
      <Button variant="outline" className="rounded-xl px-7 py-3 h-auto text-lg">
        Add to Compare
      </Button>
    </div>
  </div>
  )
}

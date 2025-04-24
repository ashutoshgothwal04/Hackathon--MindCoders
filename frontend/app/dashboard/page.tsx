import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Clock, MessageSquare, Bell, Home, Settings, FileCheck, CreditCard } from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, Alex</h1>
          <p className="text-gray-600">Manage your rental journey and preferences</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="outline" className="rounded-xl">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">AI Match Score</p>
                <p className="text-3xl font-bold text-blue-600">95%</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <Home className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Saved Properties</p>
                <p className="text-3xl font-bold">12</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Scheduled Tours</p>
                <p className="text-3xl font-bold">3</p>
              </div>
              <div className="bg-green-100 p-3 rounded-full">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 mb-1">Messages</p>
                <p className="text-3xl font-bold">5</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <MessageSquare className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommendations" className="mb-12">
        <TabsList className="mb-8">
          <TabsTrigger value="recommendations" className="text-base py-3">
            AI Recommendations
          </TabsTrigger>
          <TabsTrigger value="saved" className="text-base py-3">
            Saved Properties
          </TabsTrigger>
          <TabsTrigger value="tours" className="text-base py-3">
            Scheduled Tours
          </TabsTrigger>
          <TabsTrigger value="applications" className="text-base py-3">
            Applications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recommended for You</h2>
            <Button variant="outline" className="rounded-xl">
              Update Preferences
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full bg-white">
                      <Heart className="h-4 w-4 text-gray-500 group-hover:text-red-500" />
                    </Button>
                  </div>
                  <div className="absolute bottom-4 left-4 z-10">
                    <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {95 - i}% Match
                    </div>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Property${i}`}
                      alt={`Property ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    Modern Apartment {i}
                  </h3>
                  <p className="text-gray-500 mb-2 flex items-center">
                    <Home className="h-4 w-4 mr-1 flex-shrink-0" />
                    Downtown, New York
                  </p>
                  <p className="text-xl font-bold text-blue-600 mb-4">${2000 + i * 300}/mo</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-6">
                    <span>2 beds</span>
                    <span>2 baths</span>
                    <span>1,200 sq ft</span>
                  </div>
                  <Button className="w-full rounded-xl">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Saved Properties</h2>
            <Button variant="outline" className="rounded-xl">
              Compare Selected
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden group hover:shadow-md transition-shadow">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full bg-white">
                      <Heart className="h-4 w-4 text-red-500" fill="currentColor" />
                    </Button>
                  </div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=400&width=600&text=Saved${i}`}
                      alt={`Saved Property ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    Saved Property {i}
                  </h3>
                  <p className="text-gray-500 mb-2 flex items-center">
                    <Home className="h-4 w-4 mr-1 flex-shrink-0" />
                    {i % 2 === 0 ? "Downtown, Chicago" : "Brooklyn, New York"}
                  </p>
                  <p className="text-xl font-bold text-blue-600 mb-4">${1800 + i * 200}/mo</p>
                  <div className="flex justify-between text-sm text-gray-600 mb-6">
                    <span>{(i % 3) + 1} beds</span>
                    <span>{(i % 2) + 1} baths</span>
                    <span>{800 + i * 100} sq ft</span>
                  </div>
                  <Button className="w-full rounded-xl">View Details</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tours">
          <h2 className="text-2xl font-bold mb-6">Scheduled Tours</h2>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=400&width=300&text=Tour${i}`}
                        alt={`Tour Property ${i}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="font-semibold text-xl mb-2 md:mb-0">Scheduled Tour {i}</h3>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium">
                            {new Date(Date.now() + i * 86400000).toLocaleDateString()} at 10:00 AM
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-500 mb-4 flex items-center">
                        <Home className="h-4 w-4 mr-1 flex-shrink-0" />
                        {i % 2 === 0 ? "Downtown, Chicago" : "Brooklyn, New York"}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {(i % 3) + 1} beds
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {(i % 2) + 1} baths
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          ${1800 + i * 200}/mo
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="rounded-xl">
                          Reschedule
                        </Button>
                        <Button variant="outline" className="rounded-xl">
                          Cancel
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">View Property</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="applications">
          <h2 className="text-2xl font-bold mb-6">Rental Applications</h2>

          <div className="space-y-6">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={`/placeholder.svg?height=100&width=100&text=App${i}`}
                          alt={`Application ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">Application for Property {i}</h3>
                        <p className="text-gray-500 flex items-center">
                          <Home className="h-4 w-4 mr-1 flex-shrink-0" />
                          {i % 2 === 0 ? "Downtown, Chicago" : "Brooklyn, New York"}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          i === 1 ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"
                        }`}
                      >
                        {i === 1 ? "In Progress" : "Approved"}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Submitted On</p>
                      <p className="font-medium">{new Date(Date.now() - i * 5 * 86400000).toLocaleDateString()}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Monthly Rent</p>
                      <p className="font-medium">${1800 + i * 200}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Move-in Date</p>
                      <p className="font-medium">{new Date(Date.now() + i * 15 * 86400000).toLocaleDateString()}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center">
                      <FileCheck className="h-5 w-5 mr-2" />
                      View Application
                    </Button>
                    {i === 1 && (
                      <Button variant="outline" className="rounded-xl flex items-center">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Complete Payment
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6">Saved Searches</h2>

        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl p-4 hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Search {i}</h3>
                  <p className="text-gray-600 mb-3">
                    {i === 1
                      ? "2+ beds, Downtown New York, $2000-$3000/mo"
                      : i === 2
                        ? "1+ beds, Brooklyn, Pet Friendly, $1500-$2500/mo"
                        : "3+ beds, Chicago, Parking, $2500-$4000/mo"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {i === 1 ? "12 properties" : i === 2 ? "8 properties" : "15 properties"}
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      {i === 1 ? "3 new" : i === 2 ? "1 new" : "5 new"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-4 md:mt-0 space-x-3">
                  <Button variant="outline" size="sm" className="rounded-xl">
                    Edit
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                    View Results
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

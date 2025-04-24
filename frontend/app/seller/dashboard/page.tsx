import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Home,
  Plus,
  Users,
  MessageSquare,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Calendar,
  Eye,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SellerDashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Michael</h1>
              <p className="text-gray-600">Manage your properties and connect with potential tenants</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                <Link href="/seller/add-listing">Add New Property</Link>
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Active Listings</p>
                    <p className="text-3xl font-bold">5</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Total Inquiries</p>
                    <p className="text-3xl font-bold">24</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Unread Messages</p>
                    <p className="text-3xl font-bold">7</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 mb-1">Total Views</p>
                    <p className="text-3xl font-bold">1,245</p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-sm rounded-2xl h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold">Recent Activity</h2>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      View All
                    </Button>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded-full mr-4">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">New inquiry for Modern Apartment</p>
                          <span className="text-sm text-gray-500">2h ago</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Sarah Johnson is interested in scheduling a viewing this weekend.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded-full mr-4">
                        <Eye className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Increased views on Downtown Loft</p>
                          <span className="text-sm text-gray-500">5h ago</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Your property received 45 new views in the last 24 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded-full mr-4">
                        <Calendar className="h-5 w-5 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">Viewing scheduled for Luxury Penthouse</p>
                          <span className="text-sm text-gray-500">Yesterday</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Michael Thompson confirmed a viewing for tomorrow at 3:00 PM.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-orange-100 p-2 rounded-full mr-4">
                        <Star className="h-5 w-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium">New featured status for Beach House</p>
                          <span className="text-sm text-gray-500">2 days ago</span>
                        </div>
                        <p className="text-gray-600 text-sm">
                          Your property is now featured on the homepage for increased visibility.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-sm rounded-2xl h-full">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Performance Overview</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Listing Views</span>
                        <span className="font-medium">1,245</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="h-full bg-blue-600 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Inquiry Rate</span>
                        <span className="font-medium">3.8%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="h-full bg-green-600 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Response Time</span>
                        <span className="font-medium">2.5 hours</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="h-full bg-purple-600 rounded-full" style={{ width: "70%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-600">Viewing to Application</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full">
                        <div className="h-full bg-orange-600 rounded-full" style={{ width: "42%" }}></div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full rounded-xl">
                      View Detailed Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Property Listings */}
          <div className="mb-8">
            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Your Properties</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Sort
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                      <Link href="/seller/add-listing">Add New</Link>
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="active">
                  <TabsList className="mb-6">
                    <TabsTrigger value="active" className="text-base py-2">
                      Active (5)
                    </TabsTrigger>
                    <TabsTrigger value="pending" className="text-base py-2">
                      Pending (2)
                    </TabsTrigger>
                    <TabsTrigger value="rented" className="text-base py-2">
                      Rented (3)
                    </TabsTrigger>
                    <TabsTrigger value="draft" className="text-base py-2">
                      Drafts (1)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="active">
                    <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col md:flex-row"
                        >
                          <div className="relative h-48 md:h-auto md:w-48 md:min-w-[12rem] rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6">
                            <Image
                              src={`/placeholder.svg?height=400&width=300&text=Property${i}`}
                              alt={`Property ${i}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                              <h3 className="font-semibold text-lg mb-1 md:mb-0">
                                {i === 1
                                  ? "Modern Apartment with City View"
                                  : i === 2
                                  ? "Downtown Loft with Rooftop Access"
                                  : i === 3
                                  ? "Luxury Penthouse"
                                  : i === 4
                                  ? "Beach House with Ocean View"
                                  : "Cozy Studio in Historic District"}
                              </h3>
                              <div className="flex items-center">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    i % 2 === 0
                                      ? "bg-green-100 text-green-800"
                                      : "bg-blue-100 text-blue-800"
                                  }`}
                                >
                                  {i % 2 === 0 ? "Featured" : "Standard"}
                                </span>
                              </div>
                            </div>
                            <div className="text-gray-600 mb-2 text-sm">
                              {i === 1
                                ? "Downtown, New York"
                                : i === 2
                                ? "Arts District, Los Angeles"
                                : i === 3
                                ? "Marina District, San Francisco"
                                : i === 4
                                ? "Malibu, California"
                                : "Old Town, Chicago"}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {i % 3 + 1} beds
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {i % 2 + 1} baths
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {800 + i * 200} sq ft
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                ${(1800 + i * 500).toLocaleString()}/mo
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-auto">
                              <div className="flex items-center text-sm text-gray-600">
                                <Eye className="h-4 w-4 mr-1" />
                                <span>{120 + i * 45} views</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Users className="h-4 w-4 mr-1" />
                                <span>{3 + i} inquiries</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{i} scheduled viewings</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              <Button variant="outline" size="sm" className="rounded-xl">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-xl">
                                Manage Inquiries
                              </Button>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                                View Listing
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="pending">
                    <div className="space-y-4">
                      {[1, 2].map((i) => (
                        <div
                          key={i}
                          className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col md:flex-row"
                        >
                          <div className="relative h-48 md:h-auto md:w-48 md:min-w-[12rem] rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6">
                            <Image
                              src={`/placeholder.svg?height=400&width=300&text=Pending${i}`}
                              alt={`Pending Property ${i}`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Under Review
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                              <h3 className="font-semibold text-lg mb-1 md:mb-0">
                                {i === 1 ? "Renovated Townhouse" : "Garden Apartment"}
                              </h3>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                                <span className="text-sm text-yellow-600">Pending Approval</span>
                              </div>
                            </div>
                            <div className="text-gray-600 mb-2 text-sm">
                              {i === 1 ? "Brooklyn, New York" : "Lincoln Park, Chicago"}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {i + 1} beds
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {i + 1} baths
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {1000 + i * 200} sq ft
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                ${(2200 + i * 300).toLocaleString()}/mo
                              </span>
                            </div>
                            <div className="mt-auto text-sm text-gray-600">
                              <p>
                                Submitted on {i === 1 ? "October 15, 2023" : "October 17, 2023"} • Estimated approval
                                within 24 hours
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              <Button variant="outline" size="sm" className="rounded-xl">
                                Edit Submission
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-xl">
                                Check Status
                              </Button>
                              <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 rounded-xl">
                                Contact Support
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="rented">
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col md:flex-row"
                        >
                          <div className="relative h-48 md:h-auto md:w-48 md:min-w-[12rem] rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6">
                            <Image
                              src={`/placeholder.svg?height=400&width=300&text=Rented${i}`}
                              alt={`Rented Property ${i}`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                Rented
                              </span>
                            </div>
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex flex-col md:flex-row justify-between mb-2">
                              <h3 className="font-semibold text-lg mb-1 md:mb-0">
                                {i === 1
                                  ? "Spacious Family Home"
                                  : i === 2
                                  ? "Waterfront Condo"
                                  : "Mountain View Cabin"}
                              </h3>
                              <div className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                                <span className="text-sm text-green-600">Rented Until {2023 + i}</span>
                              </div>
                            </div>
                            <div className="text-gray-600 mb-2 text-sm">
                              {i === 1
                                ? "Sunset District, Seattle"
                                : i === 2
                                ? "Miami Beach, Florida"
                                : "Aspen, Colorado"}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {i + 2} beds
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {i + 1} baths
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                {1500 + i * 300} sq ft
                              </span>
                              <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                ${(2500 + i * 700).toLocaleString()}/mo
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-4 mt-auto">
                              <div className="flex items-center text-sm text-gray-600">
                                <Users className="h-4 w-4 mr-1" />
                                <span>Tenant: {i === 1 ? "Johnson Family" : i === 2 ? "David Wilson" : "Emma Thompson"}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>Lease ends: {`${i === 1 ? "June" : i === 2 ? "August" : "December"} ${2023 + i}`}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                              <Button variant="outline" size="sm" className="rounded-xl">
                                View Lease
                              </Button>
                              <Button variant="outline" size="sm" className="rounded-xl">
                                Maintenance Requests
                              </Button>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-xl">
                                Contact Tenant
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="draft">
                    <div className="space-y-4">
                      <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col md:flex-row">
                        <div className="relative h-48 md:h-auto md:w-48 md:min-w-[12rem] rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6 bg-gray-100 flex items-center justify-center">
                          <Home className="h-12 w-12 text-gray-400" />
                        </div>
                        <div className="flex-1 flex flex-col">
                          <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="font-semibold text-lg mb-1 md:mb-0">Hillside Retreat</h3>
                            <div className="flex items-center">
                              <AlertCircle className="h-4 w-4 text-gray-500 mr-1" />
                              <span className="text-sm text-gray-600">Draft - 30% Complete</span>
                            </div>
                          </div>
                          <div className="text-gray-600 mb-2 text-sm">Berkeley Hills, California</div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">3 beds</span>
                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">2 baths</span>
                          </div>
                          <div className="mt-auto text-sm text-gray-600">
                            <p>Last edited on October 10, 2023</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-4">
                            <Button variant="outline" size="sm" className="rounded-xl">
                              Delete Draft
                            </Button>
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                              Continue Editing
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Schedule */}
          <div>
            <Card className="border-0 shadow-sm rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">Upcoming Schedule</h2>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    View Calendar
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex">
                    <div className="bg-blue-100 p-3 rounded-xl mr-4 h-16 w-16 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-600">20</span>
                      <span className="text-xs text-blue-600">OCT</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-semibold">Property Viewing - Modern Apartment</h3>
                        <span className="text-sm text-blue-600">Today, 3:00 PM</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        Meeting with Sarah Johnson to view the Modern Apartment with City View
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                          <Users className="h-4 w-4 text-gray-500" />
                        </div>
                        <span className="text-sm">Sarah Johnson • 555-123-4567</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-4 flex">
                    <div className="bg-gray-100 p-3 rounded-xl mr-4 h-16 w-16 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="font-bold text-gray-600">22</span>
                      <span className="text-xs text-gray-600">OCT</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-semibold">Property Viewing - Downtown Loft</h3>
                        <span className="text-sm text-gray-600">Sunday, 11:00 AM</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        Meeting with Michael Thompson to view the Downtown Loft with Rooftop Access
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                          <Users className="h-4 w-4 text-gray-500" />
                        </div>
                        <span className="text-sm">Michael Thompson • 555-987-6543</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-100 rounded-xl p-4 flex">
                    <div className="bg-gray-100 p-3 rounded-xl mr-4 h-16 w-16 flex flex-col items-center justify-center flex-shrink-0">
                      <span className="font-bold text-gray-600">25</span>
                      <span className="text-xs text-gray-600">OCT</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h3 className="font-semibold">Lease Signing - Beach House</h3>
                        <span className="text-sm text-gray-600">Wednesday, 2:00 PM</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        Meeting with Emma Davis to sign the lease for the Beach House with Ocean View
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                          <Users className="h-4 w-4 text-gray-500" />
                        </div>
                        <span className="text-sm">Emma Davis • 555-789-0123</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

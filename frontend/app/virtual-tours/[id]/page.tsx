import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, MapPin, Bed, Bath, Maximize, Play, Info, ArrowLeft, Share2, Heart, Phone } from "lucide-react"

interface VirtualTourPageProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: VirtualTourPageProps): Metadata {
  return {
    title: `Virtual Tour #${params.id} | HomeMatch`,
    description: "Experience this property in immersive 3D virtual reality.",
  }
}

// Mock data - in a real app, this would come from an API or database
const getTourData = (id: string) => {
  return {
    id,
    title: `Modern ${id === "1" ? "Apartment" : id === "2" ? "Townhouse" : "Luxury Villa"}`,
    address: `${id === "1" ? "123 Downtown Ave" : id === "2" ? "456 Suburban St" : "789 Beachfront Blvd"}, New York`,
    price: id === "1" ? 2500 : id === "2" ? 3200 : 5500,
    beds: id === "1" ? 2 : id === "2" ? 3 : 5,
    baths: id === "1" ? 2 : id === "2" ? 2.5 : 4,
    sqft: id === "1" ? 1200 : id === "2" ? 1800 : 3500,
    description: `Experience this beautiful ${id === "1" ? "apartment" : id === "2" ? "townhouse" : "luxury villa"} through our immersive virtual tour. This property features ${id === "1" ? "modern finishes, an open floor plan, and stunning city views" : id === "2" ? "a spacious layout, private backyard, and updated kitchen" : "panoramic ocean views, a private pool, and luxury finishes throughout"}. Located in a prime area with easy access to transportation, shopping, and dining.`,
    features: [
      "Hardwood floors",
      "Stainless steel appliances",
      "Central air conditioning",
      "In-unit washer/dryer",
      id === "1" ? "Balcony" : id === "2" ? "Private backyard" : "Private pool",
      id === "1" ? "Fitness center" : id === "2" ? "Garage parking" : "Home theater",
      id === "1" ? "Doorman" : id === "2" ? "Finished basement" : "Wine cellar",
    ],
    tourTypes: ["VR", "3D Walkthrough", id === "3" ? "AR Experience" : null].filter(Boolean),
    availableDate: "2023-08-15",
    agent: {
      name: "Alex Johnson",
      phone: "(555) 123-4567",
      email: "alex@homematch.com",
      image: "/placeholder.svg?height=100&width=100",
    },
  }
}

export default function VirtualTourPage({ params }: VirtualTourPageProps) {
  const tour = getTourData(params.id)

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="mb-6">
        <Link href="/virtual-tours" className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to all virtual tours
        </Link>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{tour.title}</h1>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{tour.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Schedule Tour
            </Button>
          </div>
        </div>
      </div>

      {/* Virtual Tour Viewer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-black/50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Play className="h-12 w-12 text-white" />
              </div>
              <p className="text-gray-800 bg-white/80 px-4 py-2 rounded-md">Click to start virtual tour</p>
            </div>
          </div>
          <Image
            src={`/placeholder.svg?height=720&width=1280&text=Virtual+Tour+${tour.id}`}
            alt={tour.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {tour.tourTypes.map((type) => (
              <Badge key={type} className="bg-blue-600">
                {type}
              </Badge>
            ))}
          </div>
        </div>
        <div className="relative aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-black/50 p-4 rounded-full inline-flex items-center justify-center mb-4">
                <Play className="h-12 w-12 text-white" />
              </div>
              <p className="text-gray-800 bg-white/80 px-4 py-2 rounded-md">Click to start virtual tour</p>
            </div>
          </div>
          <Image
            src={`/placeholder.svg?height=720&width=1280&text=Virtual+Tour+Secondary+${tour.id}`}
            alt={tour.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {tour.tourTypes.map((type) => (
              <Badge key={type} className="bg-blue-600">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="md:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="tour-options">Tour Options</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bed className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-lg font-medium">{tour.beds}</span>
                    <span className="text-sm text-gray-500">Bedrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Bath className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-lg font-medium">{tour.baths}</span>
                    <span className="text-sm text-gray-500">Bathrooms</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
                    <Maximize className="h-6 w-6 text-blue-600 mb-2" />
                    <span className="text-lg font-medium">{tour.sqft}</span>
                    <span className="text-sm text-gray-500">Sq Ft</span>
                  </div>
                </div>
                <p className="text-gray-700">{tour.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <div className="w-full h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.91599097935!2d72.72323473306437!3d19.15977857284976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1688249452978!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features">
              <h2 className="text-2xl font-semibold mb-4">Property Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {tour.features.map((feature, index) => (
                  <div key={index} className="flex items-center py-2">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tour-options">
              <h2 className="text-2xl font-semibold mb-4">Available Tour Options</h2>
              <div className="space-y-6">
                {tour.tourTypes.includes("VR") && (
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-medium mb-2 flex items-center">
                      <Badge className="mr-2 bg-blue-600">VR</Badge>
                      Virtual Reality Tour
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Experience this property in full immersion with our VR tour. Compatible with Oculus, HTC Vive, and
                      other VR headsets.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">Start VR Tour</Button>
                  </div>
                )}

                {tour.tourTypes.includes("3D Walkthrough") && (
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-medium mb-2 flex items-center">
                      <Badge className="mr-2 bg-blue-600">3D</Badge>
                      3D Walkthrough
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Navigate through the property in 3D on any device. Explore each room and get a feel for the
                      layout.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">Start 3D Walkthrough</Button>
                  </div>
                )}

                {tour.tourTypes.includes("AR Experience") && (
                  <div className="bg-white p-6 rounded-lg border">
                    <h3 className="text-xl font-medium mb-2 flex items-center">
                      <Badge className="mr-2 bg-blue-600">AR</Badge>
                      Augmented Reality Experience
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Use your smartphone or tablet to visualize furniture and decor in the actual space.
                    </p>
                    <Button className="bg-blue-600 hover:bg-blue-700">Download AR App</Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-blue-600">${tour.price}/mo</div>
                <div className="flex items-center justify-center text-gray-600 mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Available {new Date(tour.availableDate).toLocaleDateString()}</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={tour.agent.image || "/placeholder.svg"}
                    alt={tour.agent.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{tour.agent.name}</h3>
                  <p className="text-sm text-gray-600">Property Agent</p>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule In-Person Tour</Button>
                <Button variant="outline" className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  {tour.agent.phone}
                </Button>
                <Button variant="outline" className="w-full">
                  Message Agent
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-600">
                <Info className="h-4 w-4 inline mr-1" />
                <span>Usually responds within 24 hours</span>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Not ready to tour yet?</h3>
            <p className="text-sm text-gray-700 mb-3">
              Save this property to your favorites or share it with friends and family.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1">
                <Heart className="h-4 w-4" />
                Save
              </Button>
              <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-1">
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Properties */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3]
            .filter((i) => i !== Number.parseInt(tour.id))
            .map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Property+${i}`}
                    alt={`Property ${i}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                    VR Ready
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">${1800 + i * 500}/mo</span>
                    <div className="flex text-sm text-gray-500">
                      <span className="mr-2">{i + 1} beds</span>
                      <span>{i + 1} baths</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">Modern Apartment {i}</h3>
                  <p className="text-gray-600 text-sm mb-4">Downtown, New York</p>
                  <Link href={`/virtual-tours/${i}`}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">View Virtual Tour</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  )
}

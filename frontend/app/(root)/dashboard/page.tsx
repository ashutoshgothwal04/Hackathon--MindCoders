"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Clock, MessageSquare, Bell, Home, Settings, FileCheck, CreditCard, LogOut, LucideIcon } from "lucide-react"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"
import React from "react";

// --- Data Definitions ---

interface SummaryCardData {
  id: string;
  title: string;
  value: string;
  Icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  cardBgColor?: string;
  cardBorderColor?: string;
  valueColor?: string;
}

interface PropertyCardData {
  id: number;
  match?: number;
  isSaved?: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  location: string;
  price: number;
  beds: number | string;
  baths: number | string;
  sqft: number | string;
}

interface TourCardData {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  dateTime: Date;
  location: string;
  beds: number | string;
  baths: number | string;
  price: number;
}

interface ApplicationCardData {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  location: string;
  status: 'In Progress' | 'Approved' | 'Rejected';
  submittedOn: Date;
  monthlyRent: number;
  moveInDate: Date;
}

interface SavedSearchData {
  id: number;
  title: string;
  description: string;
  propertyCount: number;
  newCount: number;
}

interface TabData {
  value: string;
  label: string;
}

// --- Component ---

export default function DashboardPage() {
  const { logout, user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // --- Mock Data ---

  const summaryCardsData: SummaryCardData[] = [
    { id: 'match', title: 'AI Match Score', value: '95%', Icon: Home, iconBgColor: 'bg-blue-100', iconColor: 'text-blue-600', cardBgColor: 'bg-blue-50', cardBorderColor: 'border-blue-100', valueColor: 'text-blue-600' },
    { id: 'saved', title: 'Saved Properties', value: '12', Icon: Heart, iconBgColor: 'bg-red-100', iconColor: 'text-red-500' },
    { id: 'tours', title: 'Scheduled Tours', value: '3', Icon: Clock, iconBgColor: 'bg-green-100', iconColor: 'text-green-600' },
    { id: 'messages', title: 'Messages', value: '5', Icon: MessageSquare, iconBgColor: 'bg-purple-100', iconColor: 'text-purple-600' },
  ];

  const tabsData: TabData[] = [
    { value: "recommendations", label: "AI Recommendations" },
    { value: "saved", label: "Saved Properties" },
    { value: "tours", label: "Scheduled Tours" },
    { value: "applications", label: "Applications" },
  ];

  const recommendationsData: PropertyCardData[] = [
    { id: 1, match: 94, imageSrc: '/placeholder.svg?height=400&width=600&text=Property1', imageAlt: 'Property 1', title: 'Modern Apartment 1', location: 'Downtown, New York', price: 2300, beds: 2, baths: 2, sqft: 1200 },
    { id: 2, match: 93, imageSrc: '/placeholder.svg?height=400&width=600&text=Property2', imageAlt: 'Property 2', title: 'Modern Apartment 2', location: 'Downtown, New York', price: 2600, beds: 2, baths: 2, sqft: 1200 },
    { id: 3, match: 92, imageSrc: '/placeholder.svg?height=400&width=600&text=Property3', imageAlt: 'Property 3', title: 'Modern Apartment 3', location: 'Downtown, New York', price: 2900, beds: 2, baths: 2, sqft: 1200 },
  ];

  const savedPropertiesData: PropertyCardData[] = [
    { id: 1, isSaved: true, imageSrc: '/placeholder.svg?height=400&width=600&text=Saved1', imageAlt: 'Saved Property 1', title: 'Saved Property 1', location: 'Brooklyn, New York', price: 2000, beds: 2, baths: 2, sqft: 900 },
    { id: 2, isSaved: true, imageSrc: '/placeholder.svg?height=400&width=600&text=Saved2', imageAlt: 'Saved Property 2', title: 'Saved Property 2', location: 'Downtown, Chicago', price: 2200, beds: 3, baths: 1, sqft: 1000 },
    { id: 3, isSaved: true, imageSrc: '/placeholder.svg?height=400&width=600&text=Saved3', imageAlt: 'Saved Property 3', title: 'Saved Property 3', location: 'Brooklyn, New York', price: 2400, beds: 1, baths: 2, sqft: 1100 },
    { id: 4, isSaved: true, imageSrc: '/placeholder.svg?height=400&width=600&text=Saved4', imageAlt: 'Saved Property 4', title: 'Saved Property 4', location: 'Downtown, Chicago', price: 2600, beds: 2, baths: 1, sqft: 1200 },
    { id: 5, isSaved: true, imageSrc: '/placeholder.svg?height=400&width=600&text=Saved5', imageAlt: 'Saved Property 5', title: 'Saved Property 5', location: 'Brooklyn, New York', price: 2800, beds: 3, baths: 2, sqft: 1300 },
    { id: 6, isSaved: true, imageSrc: '/placeholder.svg?height=400&width=600&text=Saved6', imageAlt: 'Saved Property 6', title: 'Saved Property 6', location: 'Downtown, Chicago', price: 3000, beds: 1, baths: 1, sqft: 1400 },
  ];

  const scheduledToursData: TourCardData[] = [
    { id: 1, imageSrc: '/placeholder.svg?height=400&width=300&text=Tour1', imageAlt: 'Tour Property 1', title: 'Scheduled Tour 1', dateTime: new Date(Date.now() + 1 * 86400000), location: 'Brooklyn, New York', beds: 2, baths: 2, price: 2000 },
    { id: 2, imageSrc: '/placeholder.svg?height=400&width=300&text=Tour2', imageAlt: 'Tour Property 2', title: 'Scheduled Tour 2', dateTime: new Date(Date.now() + 2 * 86400000), location: 'Downtown, Chicago', beds: 3, baths: 1, price: 2200 },
    { id: 3, imageSrc: '/placeholder.svg?height=400&width=300&text=Tour3', imageAlt: 'Tour Property 3', title: 'Scheduled Tour 3', dateTime: new Date(Date.now() + 3 * 86400000), location: 'Brooklyn, New York', beds: 1, baths: 2, price: 2400 },
  ];

  const applicationsData: ApplicationCardData[] = [
    { id: 1, imageSrc: '/placeholder.svg?height=100&width=100&text=App1', imageAlt: 'Application 1', title: 'Application for Property 1', location: 'Brooklyn, New York', status: 'In Progress', submittedOn: new Date(Date.now() - 1 * 5 * 86400000), monthlyRent: 2000, moveInDate: new Date(Date.now() + 1 * 15 * 86400000) },
    { id: 2, imageSrc: '/placeholder.svg?height=100&width=100&text=App2', imageAlt: 'Application 2', title: 'Application for Property 2', location: 'Downtown, Chicago', status: 'Approved', submittedOn: new Date(Date.now() - 2 * 5 * 86400000), monthlyRent: 2200, moveInDate: new Date(Date.now() + 2 * 15 * 86400000) },
  ];

  const savedSearchesData: SavedSearchData[] = [
    { id: 1, title: 'Search 1', description: '2+ beds, Downtown New York, $2000-$3000/mo', propertyCount: 12, newCount: 3 },
    { id: 2, title: 'Search 2', description: '1+ beds, Brooklyn, Pet Friendly, $1500-$2500/mo', propertyCount: 8, newCount: 1 },
    { id: 3, title: 'Search 3', description: '3+ beds, Chicago, Parking, $2500-$4000/mo', propertyCount: 15, newCount: 5 },
  ];

  // --- Helper Components ---

  const PropertyCard = ({ property, isSavedTab = false }: { property: PropertyCardData, isSavedTab?: boolean }) => (
    <Card key={property.id} className="overflow-hidden group hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="absolute top-4 right-4 z-10">
          <Button size="sm" variant="outline" className="h-8 w-8 p-0 rounded-full bg-white">
            <Heart className={`h-4 w-4 ${isSavedTab || property.isSaved ? 'text-red-500' : 'text-gray-500 group-hover:text-red-500'}`} fill={isSavedTab || property.isSaved ? "currentColor" : "none"} />
          </Button>
        </div>
        {property.match && (
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
              {property.match}% Match
            </div>
          </div>
        )}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={property.imageSrc}
            alt={property.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 transition-colors">
          {property.title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-2 flex items-center">
          <Home className="h-4 w-4 mr-1 flex-shrink-0" />
          {property.location}
        </p>
        <p className="text-xl font-bold text-blue-600 mb-4">${property.price}/mo</p>
        <div className="flex justify-between text-sm dark:text-gray-400 text-gray-600 mb-6">
          <span>{property.beds} beds</span>
          <span>{property.baths} baths</span>
          <span>{property.sqft} sq ft</span>
        </div>
        <Button className="w-full rounded-xl">View Details</Button>
      </CardContent>
    </Card>
  );

  // --- Render ---

  return (
    <div className="container mx-auto px-12 py-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {user?.fullName}</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your rental journey and preferences</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="outline" className="rounded-xl">
            <Bell className="h-5 w-5 mr-2" />
            Notifications
          </Button>
          <Button className="bg-blue-600 dark:text-white hover:bg-blue-700 rounded-xl">
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </Button>
          <Button
            variant="outline"
            className="rounded-xl text-red-600 border-red-600 hover:bg-red-50"
            onClick={handleLogout}
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {summaryCardsData.map(({ id, title, value, Icon, iconBgColor, iconColor, cardBgColor, cardBorderColor, valueColor }) => (
          <Card key={id} className={`${cardBgColor || ''} ${cardBorderColor || ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">{title}</p>
                  <p className={`text-3xl font-bold ${valueColor || ''}`}>{value}</p>
                </div>
                <div className={`${iconBgColor} p-3 rounded-full`}>
                  <Icon className={`h-6 w-6 ${iconColor}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="recommendations" className="mb-12">
        <TabsList className="mb-8">
          {tabsData.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value} className="text-base py-3">
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Recommended for You</h2>
            <Button variant="outline" className="rounded-xl">
              Update Preferences
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendationsData.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        {/* Saved Properties Tab */}
        <TabsContent value="saved">
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Saved Properties</h2>
            <Button variant="outline" className="rounded-xl">
              Compare Selected
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {savedPropertiesData.map((property) => (
              <PropertyCard key={property.id} property={property} isSavedTab={true} />
            ))}
          </div>
        </TabsContent>

        {/* Scheduled Tours Tab */}
        <TabsContent value="tours">
          <h2 className="text-2xl font-bold mb-6">Scheduled Tours</h2>
          <div className="space-y-6">
            {scheduledToursData.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative h-48 md:h-auto md:w-64 flex-shrink-0">
                      <Image
                        src={tour.imageSrc}
                        alt={tour.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="font-semibold text-xl mb-2 md:mb-0">{tour.title}</h3>
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium">
                            {tour.dateTime.toLocaleDateString()} at {tour.dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center">
                        <Home className="h-4 w-4 mr-1 flex-shrink-0" />
                        {tour.location}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {tour.beds} beds
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          {tour.baths} baths
                        </span>
                        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
                          ${tour.price}/mo
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" className="rounded-xl">Reschedule</Button>
                        <Button variant="outline" className="rounded-xl">Cancel</Button>
                        <Button className="bg-blue-600 dark:text-white hover:bg-blue-700 rounded-xl">View Property</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="applications">
          <h2 className="text-2xl font-bold mb-6">Rental Applications</h2>
          <div className="space-y-6">
            {applicationsData.map((app) => (
              <Card key={app.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="flex items-start">
                      <div className="relative h-16 w-16 rounded-lg overflow-hidden mr-4 flex-shrink-0">
                        <Image
                          src={app.imageSrc}
                          alt={app.imageAlt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1">{app.title}</h3>
                        <p className="text-gray-500 flex items-center">
                          <Home className="h-4 w-4 mr-1 flex-shrink-0" />
                          {app.location}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          app.status === 'In Progress' ? "bg-yellow-100 text-yellow-800"
                          : app.status === 'Approved' ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800" // Example for Rejected
                        }`}
                      >
                        {app.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="bg-gray-50 dark:bg-bg-color p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Submitted On</p>
                      <p className="font-medium">{app.submittedOn.toLocaleDateString()}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-bg-color p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Monthly Rent</p>
                      <p className="font-medium">${app.monthlyRent}</p>
                    </div>
                    <div className="bg-gray-50 dark:bg-bg-color p-4 rounded-xl">
                      <p className="text-gray-500 text-sm mb-1">Move-in Date</p>
                      <p className="font-medium">{app.moveInDate.toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-blue-600 dark:text-white hover:bg-blue-700 rounded-xl flex items-center">
                      <FileCheck className="h-5 w-5 mr-2" />
                      View Application
                    </Button>
                    {app.status === 'In Progress' && (
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

      {/* Saved Searches Section */}
      <div className="bg-white rounded-2xl dark:bg-bg-color dark:border-bg-color shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold mb-6">Saved Searches</h2>
        <div className="space-y-4">
          {savedSearchesData.map((search) => (
            <div
              key={search.id}
              className="border border-gray-100 rounded-xl p-4 dark:border-bg-prime dark:bg-bg-prime hover:border-blue-200 hover:bg-blue-50/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{search.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{search.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                      {search.propertyCount} properties
                    </span>
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                      {search.newCount} new
                    </span>
                  </div>
                </div>
                <div className="flex items-center mt-4 md:mt-0 space-x-3">
                  <Button variant="outline" size="sm" className="rounded-xl">Edit</Button>
                  <Button size="sm" className="bg-blue-600 dark:text-white hover:bg-blue-700 rounded-xl">View Results</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

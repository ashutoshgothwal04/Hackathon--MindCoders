"use client"

import React from "react"
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
  LogOut,
  LucideIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/context/AuthContext"
import { useRouter } from "next/navigation"

// --- Data Definitions ---

interface StatCardData {
  id: number;
  title: string;
  value: string;
  Icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
}

interface ActivityItemData {
  id: number;
  Icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  title: string;
  time: string;
  description: string;
}

interface PerformanceItemData {
  id: number;
  label: string;
  value: string;
  progress: string;
  color: string;
}

interface PropertyTabData {
  value: string;
  label: string;
  count: number;
}

interface PropertyListingData {
  id: number;
  status: 'active' | 'pending' | 'rented' | 'draft';
  imageUrl: string;
  imageAlt: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  price: number;
  featured?: boolean; // For active
  views?: number; // For active
  inquiries?: number; // For active
  scheduledViewings?: number; // For active
  submittedOn?: string; // For pending
  estimatedApproval?: string; // For pending
  rentedUntil?: number; // For rented
  tenantName?: string; // For rented
  leaseEndDate?: string; // For rented
  draftProgress?: number; // For draft
  lastEdited?: string; // For draft
}

interface ScheduleItemData {
  id: number;
  day: string;
  month: string;
  title: string;
  time: string;
  description: string;
  attendeeName: string;
  attendeePhone: string;
  isToday?: boolean;
}

// --- Mock Data ---

const statsCardsData: StatCardData[] = [
  { id: 1, title: "Active Listings", value: "5", Icon: Home, iconBgColor: "bg-blue-100", iconColor: "text-blue-600" },
  { id: 2, title: "Total Inquiries", value: "24", Icon: Users, iconBgColor: "bg-green-100", iconColor: "text-green-600" },
  { id: 3, title: "Unread Messages", value: "7", Icon: MessageSquare, iconBgColor: "bg-purple-100", iconColor: "text-purple-600" },
  { id: 4, title: "Total Views", value: "1,245", Icon: TrendingUp, iconBgColor: "bg-orange-100", iconColor: "text-orange-600" },
];

const recentActivityData: ActivityItemData[] = [
  { id: 1, Icon: MessageSquare, iconBgColor: "bg-blue-100", iconColor: "text-blue-600", title: "New inquiry for Modern Apartment", time: "2h ago", description: "Sarah Johnson is interested in scheduling a viewing this weekend." },
  { id: 2, Icon: Eye, iconBgColor: "bg-green-100", iconColor: "text-green-600", title: "Increased views on Downtown Loft", time: "5h ago", description: "Your property received 45 new views in the last 24 hours." },
  { id: 3, Icon: Calendar, iconBgColor: "bg-purple-100", iconColor: "text-purple-600", title: "Viewing scheduled for Luxury Penthouse", time: "Yesterday", description: "Michael Thompson confirmed a viewing for tomorrow at 3:00 PM." },
  { id: 4, Icon: Star, iconBgColor: "bg-orange-100", iconColor: "text-orange-600", title: "New featured status for Beach House", time: "2 days ago", description: "Your property is now featured on the homepage for increased visibility." },
];

const performanceData: PerformanceItemData[] = [
  { id: 1, label: "Listing Views", value: "1,245", progress: "85%", color: "bg-blue-600" },
  { id: 2, label: "Inquiry Rate", value: "3.8%", progress: "65%", color: "bg-green-600" },
  { id: 3, label: "Response Time", value: "2.5 hours", progress: "70%", color: "bg-purple-600" },
  { id: 4, label: "Viewing to Application", value: "42%", progress: "42%", color: "bg-orange-600" },
];

const propertyTabsData: PropertyTabData[] = [
  { value: "active", label: "Active", count: 5 },
  { value: "pending", label: "Pending", count: 2 },
  { value: "rented", label: "Rented", count: 3 },
  { value: "draft", label: "Drafts", count: 1 },
];

const propertyListingsData: PropertyListingData[] = [
  // Active
  { id: 1, status: 'active', imageUrl: "/placeholder.svg?height=400&width=300&text=Property1", imageAlt: "Property 1", title: "Modern Apartment with City View", location: "Downtown, New York", beds: 2, baths: 2, sqft: 1000, price: 2300, featured: false, views: 165, inquiries: 4, scheduledViewings: 1 },
  { id: 2, status: 'active', imageUrl: "/placeholder.svg?height=400&width=300&text=Property2", imageAlt: "Property 2", title: "Downtown Loft with Rooftop Access", location: "Arts District, Los Angeles", beds: 3, baths: 1, sqft: 1200, price: 2800, featured: true, views: 210, inquiries: 5, scheduledViewings: 2 },
  { id: 3, status: 'active', imageUrl: "/placeholder.svg?height=400&width=300&text=Property3", imageAlt: "Property 3", title: "Luxury Penthouse", location: "Marina District, San Francisco", beds: 1, baths: 2, sqft: 1400, price: 3300, featured: false, views: 255, inquiries: 6, scheduledViewings: 3 },
  { id: 4, status: 'active', imageUrl: "/placeholder.svg?height=400&width=300&text=Property4", imageAlt: "Property 4", title: "Beach House with Ocean View", location: "Malibu, California", beds: 2, baths: 1, sqft: 1600, price: 3800, featured: true, views: 300, inquiries: 7, scheduledViewings: 4 },
  { id: 5, status: 'active', imageUrl: "/placeholder.svg?height=400&width=300&text=Property5", imageAlt: "Property 5", title: "Cozy Studio in Historic District", location: "Old Town, Chicago", beds: 3, baths: 2, sqft: 1800, price: 4300, featured: false, views: 345, inquiries: 8, scheduledViewings: 5 },
  // Pending
  { id: 6, status: 'pending', imageUrl: "/placeholder.svg?height=400&width=300&text=Pending1", imageAlt: "Pending Property 1", title: "Renovated Townhouse", location: "Brooklyn, New York", beds: 2, baths: 2, sqft: 1200, price: 2500, submittedOn: "October 15, 2023", estimatedApproval: "within 24 hours" },
  { id: 7, status: 'pending', imageUrl: "/placeholder.svg?height=400&width=300&text=Pending2", imageAlt: "Pending Property 2", title: "Garden Apartment", location: "Lincoln Park, Chicago", beds: 3, baths: 3, sqft: 1400, price: 2800, submittedOn: "October 17, 2023", estimatedApproval: "within 24 hours" },
  // Rented
  { id: 8, status: 'rented', imageUrl: "/placeholder.svg?height=400&width=300&text=Rented1", imageAlt: "Rented Property 1", title: "Spacious Family Home", location: "Sunset District, Seattle", beds: 3, baths: 2, sqft: 1800, price: 3200, rentedUntil: 2024, tenantName: "Johnson Family", leaseEndDate: "June 2024" },
  { id: 9, status: 'rented', imageUrl: "/placeholder.svg?height=400&width=300&text=Rented2", imageAlt: "Rented Property 2", title: "Waterfront Condo", location: "Miami Beach, Florida", beds: 4, baths: 3, sqft: 2100, price: 3900, rentedUntil: 2025, tenantName: "David Wilson", leaseEndDate: "August 2025" },
  { id: 10, status: 'rented', imageUrl: "/placeholder.svg?height=400&width=300&text=Rented3", imageAlt: "Rented Property 3", title: "Mountain View Cabin", location: "Aspen, Colorado", beds: 5, baths: 4, sqft: 2400, price: 4600, rentedUntil: 2026, tenantName: "Emma Thompson", leaseEndDate: "December 2026" },
  // Draft
  { id: 11, status: 'draft', imageUrl: "", imageAlt: "Draft Property", title: "Hillside Retreat", location: "Berkeley Hills, California", beds: 3, baths: 2, sqft: 0, price: 0, draftProgress: 30, lastEdited: "October 10, 2023" },
];

const upcomingScheduleData: ScheduleItemData[] = [
  { id: 1, day: "20", month: "OCT", title: "Property Viewing - Modern Apartment", time: "Today, 3:00 PM", description: "Meeting with Sarah Johnson to view the Modern Apartment with City View", attendeeName: "Sarah Johnson", attendeePhone: "555-123-4567", isToday: true },
  { id: 2, day: "22", month: "OCT", title: "Property Viewing - Downtown Loft", time: "Sunday, 11:00 AM", description: "Meeting with Michael Thompson to view the Downtown Loft with Rooftop Access", attendeeName: "Michael Thompson", attendeePhone: "555-987-6543" },
  { id: 3, day: "25", month: "OCT", title: "Lease Signing - Beach House", time: "Wednesday, 2:00 PM", description: "Meeting with Emma Davis to sign the lease for the Beach House with Ocean View", attendeeName: "Emma Davis", attendeePhone: "555-789-0123" },
];

// --- Components ---

const StatCard: React.FC<StatCardData> = ({ title, value, Icon, iconBgColor, iconColor }) => (
  <Card className="border-0 shadow-sm rounded-2xl">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div className={`${iconBgColor} p-3 rounded-full`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
    </CardContent>
  </Card>
);

const ActivityItem: React.FC<ActivityItemData> = ({ Icon, iconBgColor, iconColor, title, time, description }) => (
  <div className="flex items-start">
    <div className={`${iconBgColor} p-2 rounded-full mr-4`}>
      <Icon className={`h-5 w-5 ${iconColor}`} />
    </div>
    <div className="flex-1">
      <div className="flex justify-between">
        <p className="font-medium">{title}</p>
        <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);

const PerformanceItem: React.FC<PerformanceItemData> = ({ label, value, progress, color }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="text-gray-600 dark:text-gray-400">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
    <div className="w-full h-2 bg-gray-100 rounded-full">
      <div className={`h-full ${color} rounded-full`} style={{ width: progress }}></div>
    </div>
  </div>
);

const PropertyListingCard: React.FC<{ property: PropertyListingData }> = ({ property }) => {
  const renderStatusSpecificContent = () => {
    switch (property.status) {
      case 'active':
        return (
          <>
            <div className="flex flex-wrap gap-4 mt-auto">
              <div className="flex items-center text-sm text-gray-600">
                <Eye className="h-4 w-4 mr-1" />
                <span>{property.views} views</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-1" />
                <span>{property.inquiries} inquiries</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{property.scheduledViewings} scheduled viewings</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="rounded-xl">Edit</Button>
              <Button variant="outline" size="sm" className="rounded-xl">Manage Inquiries</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">View Listing</Button>
            </div>
          </>
        );
      case 'pending':
        return (
          <>
            <div className="mt-auto text-sm text-gray-600">
              <p>Submitted on {property.submittedOn} • Estimated approval {property.estimatedApproval}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="rounded-xl">Edit Submission</Button>
              <Button variant="outline" size="sm" className="rounded-xl">Check Status</Button>
              <Button size="sm" className="bg-yellow-600 hover:bg-yellow-700 rounded-xl">Contact Support</Button>
            </div>
          </>
        );
      case 'rented':
        return (
          <>
            <div className="flex flex-wrap gap-4 mt-auto">
              <div className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-1" />
                <span>Tenant: {property.tenantName}</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Lease ends: {property.leaseEndDate}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="rounded-xl">View Lease</Button>
              <Button variant="outline" size="sm" className="rounded-xl">Maintenance Requests</Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 rounded-xl">Contact Tenant</Button>
            </div>
          </>
        );
      case 'draft':
        return (
          <>
            <div className="mt-auto text-sm text-gray-600">
              <p>Last edited on {property.lastEdited}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button variant="outline" size="sm" className="rounded-xl">Delete Draft</Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">Continue Editing</Button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  const renderStatusBadge = () => {
    switch (property.status) {
      case 'active':
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${property.featured ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}`}>
            {property.featured ? "Featured" : "Standard"}
          </span>
        );
      case 'pending':
        return (
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-yellow-500 mr-1" />
            <span className="text-sm text-yellow-600">Pending Approval</span>
          </div>
        );
      case 'rented':
        return (
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600">Rented Until {property.rentedUntil}</span>
          </div>
        );
      case 'draft':
        return (
          <div className="flex items-center">
            <AlertCircle className="h-4 w-4 text-gray-500 mr-1" />
            <span className="text-sm text-gray-600">Draft - {property.draftProgress}% Complete</span>
          </div>
        );
      default: return null;
    }
  };

  const renderImageOverlay = () => {
    switch (property.status) {
      case 'pending':
        return (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">Under Review</span>
          </div>
        );
      case 'rented':
        return (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Rented</span>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col md:flex-row">
      <div className={`relative h-48 md:h-auto md:w-48 md:min-w-[12rem] rounded-lg overflow-hidden mb-4 md:mb-0 md:mr-6 ${property.status === 'draft' ? 'bg-gray-100 flex items-center justify-center' : ''}`}>
        {property.status === 'draft' ? (
          <Home className="h-12 w-12 text-gray-400" />
        ) : (
          <Image src={property.imageUrl} alt={property.imageAlt} fill className="object-cover" />
        )}
        {renderImageOverlay()}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row justify-between mb-2">
          <h3 className="font-semibold text-lg mb-1 md:mb-0">{property.title}</h3>
          {renderStatusBadge()}
        </div>
        <div className="text-gray-600 mb-2 text-sm">{property.location}</div>
        {property.status !== 'draft' && (
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{property.beds} beds</span>
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{property.baths} baths</span>
            {property.sqft > 0 && <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{property.sqft} sq ft</span>}
            {property.price > 0 && <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">${property.price.toLocaleString()}/mo</span>}
          </div>
        )}
        {property.status === 'draft' && (
           <div className="flex flex-wrap gap-2 mb-3">
             <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{property.beds} beds</span>
             <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">{property.baths} baths</span>
           </div>
        )}
        {renderStatusSpecificContent()}
      </div>
    </div>
  );
};

const ScheduleItem: React.FC<ScheduleItemData> = ({ day, month, title, time, description, attendeeName, attendeePhone, isToday }) => (
  <div className={`${isToday ? 'bg-blue-50 border border-blue-100' : 'bg-white border border-gray-100'} rounded-xl p-4 flex`}>
    <div className={`${isToday ? 'bg-blue-100' : 'bg-gray-100'} p-3 rounded-xl mr-4 h-16 w-16 flex flex-col items-center justify-center flex-shrink-0`}>
      <span className={`font-bold ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>{day}</span>
      <span className={`text-xs ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>{month}</span>
    </div>
    <div className="flex-1">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <h3 className="font-semibold">{title}</h3>
        <span className={`text-sm ${isToday ? 'text-blue-600' : 'text-gray-600'}`}>{time}</span>
      </div>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
          <Users className="h-4 w-4 text-gray-500" />
        </div>
        <span className="text-sm">{attendeeName} • {attendeePhone}</span>
      </div>
    </div>
  </div>
);

// --- Main Component ---

export default function SellerDashboardPage() {
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

  return (
    <div className="flex min-h-screen dark:bg-bg-prime bg-gray-50">
      {/* Sidebar */}
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome</h1>
              <p className="text-gray-600 dark:text-gray-400">Manage your properties and connect with potential tenants</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Button className="bg-blue-600 hover:bg-blue-700 dark:text-white rounded-xl flex items-center">
                <Plus className="h-5 w-5 mr-2" />
                <Link href="/seller/dashboard/add-listing">Add New Property</Link>
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

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statsCardsData.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
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
                    {recentActivityData.map((activity) => (
                      <ActivityItem key={activity.id} {...activity} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-sm rounded-2xl h-full">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-6">Performance Overview</h2>
                  <div className="space-y-6">
                    {performanceData.map((item) => (
                      <PerformanceItem key={item.id} {...item} />
                    ))}
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
                    <Button variant="outline" size="sm" className="rounded-xl">Filter</Button>
                    <Button variant="outline" size="sm" className="rounded-xl">Sort</Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                      <Link href="/seller/dashboard/add-listing">Add New</Link>
                    </Button>
                  </div>
                </div>

                <Tabs defaultValue="active">
                  <TabsList className="mb-6">
                    {propertyTabsData.map((tab) => (
                      <TabsTrigger key={tab.value} value={tab.value} className="text-base py-2">
                        {tab.label} ({tab.count})
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {propertyTabsData.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                      <div className="space-y-4">
                        {propertyListingsData
                          .filter((property) => property.status === tab.value)
                          .map((property) => (
                            <PropertyListingCard key={property.id} property={property} />
                          ))}
                      </div>
                    </TabsContent>
                  ))}
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
                  {upcomingScheduleData.map((item) => (
                    <ScheduleItem key={item.id} {...item} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

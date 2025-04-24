import {
  Bath,
  Bed,
  Calendar,
  FileCheck,
  MessageSquare,
  Square,
} from "lucide-react";

export const properties = [
  {
    id: "1",
    title: "Modern Apartment with City View",
    location: "Downtown, New York",
    price: 2500,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.8,
    isAIMatch: true,
    matchPercentage: 95,
  },
  {
    id: "2",
    title: "Cozy Studio in Historic District",
    location: "Old Town, Chicago",
    price: 1800,
    bedrooms: 1,
    bathrooms: 1,
    area: 750,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.6,
    isAIMatch: true,
    matchPercentage: 88,
  },
  {
    id: "3",
    title: "Luxury Penthouse with Rooftop",
    location: "Marina District, San Francisco",
    price: 5500,
    bedrooms: 3,
    bathrooms: 3.5,
    area: 2200,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.9,
  },
  {
    id: "4",
    title: "Charming Cottage with Garden",
    location: "Noe Valley, San Francisco",
    price: 3200,
    bedrooms: 2,
    bathrooms: 1,
    area: 1100,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: false,
    rating: 4.5,
  },
  {
    id: "5",
    title: "Modern Loft in Arts District",
    location: "Arts District, Los Angeles",
    price: 2800,
    bedrooms: 1,
    bathrooms: 2,
    area: 1300,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.7,
    isAIMatch: true,
    matchPercentage: 92,
  },
  {
    id: "6",
    title: "Spacious Family Home",
    location: "Sunset District, Seattle",
    price: 3800,
    bedrooms: 4,
    bathrooms: 2.5,
    area: 2400,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.8,
  },
  {
    id: "7",
    title: "Downtown Studio with Balcony",
    location: "Financial District, Boston",
    price: 2100,
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.5,
  },
  {
    id: "8",
    title: "Renovated Brownstone Apartment",
    location: "Brooklyn, New York",
    price: 3400,
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.7,
    isAIMatch: true,
    matchPercentage: 87,
  },
  {
    id: "9",
    title: "Waterfront Condo with Pool",
    location: "Miami Beach, Florida",
    price: 4200,
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    image: "/placeholder.svg?height=400&width=600",
    isVerified: true,
    rating: 4.9,
  },
];

export const property = {
  id: "1",
  title: "Modern Apartment with City View",
  description:
    "This beautiful modern apartment offers stunning city views and is located in the heart of downtown. Recently renovated with high-end finishes, this unit features an open floor plan, gourmet kitchen with stainless steel appliances, and a spacious living area perfect for entertaining. The large windows provide abundant natural light and showcase the impressive city skyline. Building amenities include a fitness center, rooftop terrace, and 24-hour concierge service.",
  location: "Downtown, New York",
  price: 2500,
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  images: [
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
  ],
  isVerified: true,
  rating: 4.8,
  reviews: 24,
  amenities: [
    "Air Conditioning",
    "Heating",
    "Washer/Dryer",
    "Dishwasher",
    "Parking",
    "Gym",
    "Elevator",
    "Balcony",
    "Pet Friendly",
    "Furnished",
  ],
  landlord: {
    name: "John Smith",
    image: "/placeholder.svg?height=200&width=200",
    responseRate: 98,
    responseTime: "2 hours",
    properties: 12,
  },
  availability: {
    available: true,
    moveInDate: "2023-12-01",
  },
  matchPercentage: 95,
};

// Property details data
export const propertyDetails = [
  { label: "Property Type", value: "Apartment" },
  { label: "Year Built", value: "2018" },
  { label: "Heating", value: "Central" },
  { label: "Cooling", value: "Central A/C" },
  { label: "Parking", value: "1 Garage Space" },
  { label: "Pets", value: "Allowed" },
  { label: "Laundry", value: "In Unit" },
  { label: "Deposit", value: "$2,500" },
];

// Property stats data
export const propertyStats = [
  { icon: Bed, value: property.bedrooms, label: "Bedrooms" },
  { icon: Bath, value: property.bathrooms, label: "Bathrooms" },
  { icon: Square, value: property.area, label: "Sq Ft" },
  {
    icon: Calendar,
    value: property.availability.moveInDate,
    label: "Available From",
  },
];

// Nearby amenities data
export const nearbyAmenities = [
  "Central Park (0.5 miles)",
  "Metro Station (0.2 miles)",
  "Grocery Store (0.3 miles)",
  "Restaurants (0.1 miles)",
];

// Transportation options data
export const transportationOptions = [
  "Bus Stop (0.1 miles)",
  "Train Station (0.5 miles)",
  "Airport (10 miles)",
];

// Review metrics data
export const reviewMetrics = [
  { category: "Location", rating: 4.9, percentage: "11/12" },
  { category: "Cleanliness", rating: 4.8, percentage: "10/12" },
  { category: "Accuracy", rating: 4.7, percentage: "9/12" },
  { category: "Value", rating: 4.6, percentage: "9/12" },
];

// Sample reviews data
export const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "October 2023",
    rating: 5,
    comment:
      "Great apartment in an amazing location! The views are stunning and the amenities are exactly as described. The host was very responsive and helpful throughout the entire process. Would definitely recommend!",
  },
  {
    id: 2,
    name: "Michael Chen",
    date: "September 2023",
    rating: 5,
    comment:
      "Fantastic property with modern amenities. The location is perfect for both work and leisure. Everything was clean and well-maintained. Communication with the property manager was excellent.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    date: "August 2023",
    rating: 5,
    comment:
      "I absolutely loved staying here! The neighborhood is quiet yet close to everything you need. The apartment itself is spacious and gets great natural light. Would definitely stay here again!",
  },
];

// Time slots data for the booking form
export const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

// Action buttons data for the interested section
export const actionButtons = [
  { icon: MessageSquare, text: "Chat", variant: "default" },
  { icon: FileCheck, text: "Apply", variant: "outline" },
];

// Landlord info data
export const landlordStats = [
  { label: "Response Rate:", value: `${property.landlord.responseRate}%` },
  { label: "Response Time:", value: property.landlord.responseTime },
];

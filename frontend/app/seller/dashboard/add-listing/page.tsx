"use client"; // Required for useState

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Home,
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Square,
  Tag,
  ImageIcon,
  FileText,
  Check,
  Info,
  Upload,
  Plus,
  Trash2,
} from "lucide-react";

// --- Reusable Components for Optimization ---

// Component for rendering feature checkboxes
interface FeatureCheckboxGroupProps {
  title: string;
  features: string[];
}

const FeatureCheckboxGroup: React.FC<FeatureCheckboxGroupProps> = ({ title, features }) => (
  <div>
    <h3 className="font-medium mb-3">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {features.map((feature) => {
        const id = feature.toLowerCase().replace(/\s+/g, "-");
        return (
          <div key={id} className="flex items-center">
            <Checkbox id={id} className="mr-2" />
            <label htmlFor={id} className="text-sm">
              {feature}
            </label>
          </div>
        );
      })}
    </div>
  </div>
);

// Component for rendering fee inputs
interface FeeInputProps {
  id: string;
  label: string;
}

const FeeInput: React.FC<FeeInputProps> = ({ id, label }) => (
  <div className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
    <div className="flex items-center">
      <Checkbox id={id} className="mr-2" />
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
    </div>
    <div className="flex items-center w-32">
      <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
      <Input type="number" min="0" placeholder="0" className="p-2 rounded-lg h-9" /> {/* Adjusted height */}
    </div>
  </div>
);

// Component for Navigation Buttons
interface NavigationFooterProps {
    onBack?: () => void;
    onNext?: () => void;
    backLabel?: string;
    nextLabel?: string;
    isFinalStep?: boolean;
    finalStepLabel?: string;
    onFinalSubmit?: () => void; // Add a handler for the final step
  }

  const NavigationFooter: React.FC<NavigationFooterProps> = ({
    onBack,
    onNext,
    backLabel,
    nextLabel,
    isFinalStep = false,
    finalStepLabel = "Publish Listing",
    onFinalSubmit,
  }) => (
    <div className={`flex ${onBack ? 'justify-between' : 'justify-end'} mt-8`}>
      {onBack && backLabel && (
        <Button variant="outline" className="rounded-xl" onClick={onBack} type="button">
          {backLabel}
        </Button>
      )}
      {isFinalStep ? (
        <Button className="bg-green-600 hover:bg-green-700 rounded-xl" onClick={onFinalSubmit} type="submit"> {/* Changed to type="submit" potentially */}
          {finalStepLabel}
        </Button>
      ) : (
        onNext && nextLabel && (
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl" onClick={onNext} type="button">
            {nextLabel}
          </Button>
        )
      )}
    </div>
  );


// --- Data Definitions ---

const indoorFeatures = [
  "Air Conditioning", "Heating", "Washer/Dryer", "Dishwasher", "Furnished",
  "Hardwood Floors", "Stainless Steel Appliances", "Fireplace", "Walk-in Closet",
  "High Ceilings", "Elevator", "Wheelchair Accessible",
];

const outdoorFeatures = [
  "Balcony", "Patio", "Garden", "Pool", "Hot Tub", "BBQ Area", "Garage",
  "Parking", "EV Charging", "Storage", "Security System", "Doorman",
];

const buildingAmenities = [
  "Gym", "Swimming Pool", "Sauna", "Rooftop Deck", "Concierge", "Business Center",
  "Pet Friendly", "Bike Storage", "Package Service", "Laundry Facilities",
  "Common Area", "Conference Room",
];

const utilitiesPolicies = [
  "Water Included", "Electricity Included", "Gas Included", "Internet Included",
  "Cable TV Included", "Trash Included", "No Smoking", "Pets Allowed", "No Pets",
  "Background Check Required", "Income Verification", "Renter's Insurance Required",
];

const additionalFees = [
    { id: "application-fee", label: "Application Fee" },
    { id: "pet-fee", label: "Pet Fee" },
    { id: "parking-fee", label: "Parking Fee" },
    { id: "other-fee", label: "Other Fee" },
];

const TABS = ["details", "location", "features", "photos", "pricing"];
type TabValue = typeof TABS[number];


export default function AddListingPage() {
  const [activeTab, setActiveTab] = useState<TabValue>(TABS[0]);

  const handleNextTab = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex < TABS.length - 1) {
      setActiveTab(TABS[currentIndex + 1]);
      window.scrollTo(0, 0); // Scroll to top on tab change
    }
  };

  const handlePreviousTab = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(TABS[currentIndex - 1]);
      window.scrollTo(0, 0); // Scroll to top on tab change
    }
  };

  const handlePublish = () => {
    // TODO: Implement form submission logic
    console.log("Publishing Listing...");
    // e.g., gather form data, validate, send to API
  }

  return (
    // Wrap with a form if you intend to submit all data at once
    // <form onSubmit={handlePublish}>
      <div className="flex min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Add New Property</h1>
              <p className="text-gray-600">Fill in the details below to list your property for rent</p>
            </div>

            {/* Form */}
            <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as TabValue)} className="mb-12">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="details" className="text-base py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                  <Home className="h-5 w-5 mr-2" />
                  Details
                </TabsTrigger>
                <TabsTrigger value="location" className="text-base py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                  <MapPin className="h-5 w-5 mr-2" />
                  Location
                </TabsTrigger>
                <TabsTrigger value="features" className="text-base py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                  <Check className="h-5 w-5 mr-2" />
                  Features
                </TabsTrigger>
                <TabsTrigger value="photos" className="text-base py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                  <ImageIcon className="h-5 w-5 mr-2" />
                  Photos
                </TabsTrigger>
                <TabsTrigger value="pricing" className="text-base py-3 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Pricing
                </TabsTrigger>
              </TabsList>

              <Card className="border-0 shadow-sm rounded-2xl">
                <CardContent className="p-8">
                  <TabsContent value="details">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                          <Home className="h-6 w-6 mr-2 text-blue-600" />
                          Property Details
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Property Title */}
                          <div className="md:col-span-2">
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                              Property Title*
                            </label>
                            <Input
                              id="title"
                              name="title" // Add name attribute for form submission
                              placeholder="e.g. Modern Apartment with City View"
                              className="w-full p-3 rounded-xl"
                              required
                            />
                          </div>
                          {/* Description */}
                          <div className="md:col-span-2">
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                              Description*
                            </label>
                            <Textarea
                              id="description"
                              name="description"
                              placeholder="Describe your property in detail..."
                              className="w-full p-3 rounded-xl min-h-[150px]"
                              required
                            />
                          </div>
                          {/* Property Type */}
                          <div>
                            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                              Property Type*
                            </label>
                            <select
                              id="propertyType"
                              name="propertyType"
                              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white" // Added bg-white for consistency
                              required
                            >
                              <option value="">Select property type</option>
                              <option value="apartment">Apartment</option>
                              <option value="house">House</option>
                              <option value="condo">Condo</option>
                              <option value="townhouse">Townhouse</option>
                              <option value="studio">Studio</option>
                              <option value="villa">Villa</option>
                            </select>
                          </div>
                          {/* Rental Type */}
                          <div>
                            <label htmlFor="rentalType" className="block text-sm font-medium text-gray-700 mb-2">
                              Rental Type*
                            </label>
                            <select
                              id="rentalType"
                              name="rentalType"
                              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                              required
                            >
                              <option value="">Select rental type</option>
                              <option value="longTerm">Long Term (6+ months)</option>
                              <option value="shortTerm">Short Term (1-6 months)</option>
                              <option value="vacation">Vacation Rental</option>
                            </select>
                          </div>
                          {/* Bedrooms */}
                          <div>
                            <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-2">
                              Bedrooms*
                            </label>
                            <div className="flex items-center">
                              <Bed className="h-5 w-5 text-gray-400 mr-2" />
                              <Input
                                id="bedrooms"
                                name="bedrooms"
                                type="number"
                                min="0"
                                placeholder="Number of bedrooms"
                                className="w-full p-3 rounded-xl"
                                required
                              />
                            </div>
                          </div>
                          {/* Bathrooms */}
                          <div>
                            <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-2">
                              Bathrooms*
                            </label>
                            <div className="flex items-center">
                              <Bath className="h-5 w-5 text-gray-400 mr-2" />
                              <Input
                                id="bathrooms"
                                name="bathrooms"
                                type="number"
                                min="0"
                                step="0.5"
                                placeholder="Number of bathrooms"
                                className="w-full p-3 rounded-xl"
                                required
                              />
                            </div>
                          </div>
                          {/* Area */}
                          <div>
                            <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-2">
                              Area (sq ft)*
                            </label>
                            <div className="flex items-center">
                              <Square className="h-5 w-5 text-gray-400 mr-2" />
                              <Input
                                id="area"
                                name="area"
                                type="number"
                                min="0"
                                placeholder="Property area in sq ft"
                                className="w-full p-3 rounded-xl"
                                required
                              />
                            </div>
                          </div>
                          {/* Year Built */}
                          <div>
                            <label htmlFor="yearBuilt" className="block text-sm font-medium text-gray-700 mb-2">
                              Year Built
                            </label>
                            <Input
                              id="yearBuilt"
                              name="yearBuilt"
                              type="number"
                              min="1900"
                              max={new Date().getFullYear()}
                              placeholder="e.g. 2010"
                              className="w-full p-3 rounded-xl"
                            />
                          </div>
                        </div>
                      </div>

                      <NavigationFooter
                        onNext={handleNextTab}
                        nextLabel="Next: Location"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="location">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                          <MapPin className="h-6 w-6 mr-2 text-blue-600" />
                          Location Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Street Address */}
                          <div className="md:col-span-2">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                              Street Address*
                            </label>
                            <Input
                              id="address"
                              name="address"
                              placeholder="e.g. 123 Main Street"
                              className="w-full p-3 rounded-xl"
                              required
                            />
                          </div>
                          {/* City */}
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                              City*
                            </label>
                            <Input id="city" name="city" placeholder="e.g. New York" className="w-full p-3 rounded-xl" required />
                          </div>
                          {/* State */}
                          <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                              State/Province*
                            </label>
                            <Input id="state" name="state" placeholder="e.g. NY" className="w-full p-3 rounded-xl" required />
                          </div>
                          {/* Zip Code */}
                          <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                              ZIP/Postal Code*
                            </label>
                            <Input id="zipCode" name="zipCode" placeholder="e.g. 10001" className="w-full p-3 rounded-xl" required />
                          </div>
                          {/* Country */}
                          <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                              Country*
                            </label>
                            <select
                              id="country"
                              name="country"
                              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                              required
                            >
                              <option value="">Select country</option>
                              <option value="US">United States</option>
                              <option value="CA">Canada</option>
                              <option value="UK">United Kingdom</option>
                              <option value="AU">Australia</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          {/* Neighborhood */}
                          <div className="md:col-span-2">
                            <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-2">
                              Neighborhood
                            </label>
                            <Input id="neighborhood" name="neighborhood" placeholder="e.g. Downtown" className="w-full p-3 rounded-xl" />
                          </div>
                          {/* Map Placeholder */}
                          <div className="md:col-span-2">
                            <div className="bg-gray-100 rounded-xl p-4 h-[300px] flex items-center justify-center">
                              <div className="text-center">
                                <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-600 mb-4">Pin your property location on the map</p>
                                <Button variant="outline" className="rounded-xl" type="button">
                                  Set Location (Not Implemented)
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <NavigationFooter
                        onBack={handlePreviousTab}
                        backLabel="Back: Details"
                        onNext={handleNextTab}
                        nextLabel="Next: Features"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="features">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                          <Check className="h-6 w-6 mr-2 text-blue-600" />
                          Property Features & Amenities
                        </h2>

                        <div className="space-y-6">
                          <FeatureCheckboxGroup title="Indoor Features" features={indoorFeatures} />
                          <FeatureCheckboxGroup title="Outdoor Features" features={outdoorFeatures} />
                          <FeatureCheckboxGroup title="Building Amenities" features={buildingAmenities} />
                          <FeatureCheckboxGroup title="Utilities & Policies" features={utilitiesPolicies} />

                          <div>
                            <label htmlFor="additionalFeatures" className="block text-sm font-medium text-gray-700 mb-2">
                              Additional Features
                            </label>
                            <Textarea
                              id="additionalFeatures"
                              name="additionalFeatures"
                              placeholder="Describe any additional features or amenities..."
                              className="w-full p-3 rounded-xl"
                            />
                          </div>
                        </div>
                      </div>

                      <NavigationFooter
                        onBack={handlePreviousTab}
                        backLabel="Back: Location"
                        onNext={handleNextTab}
                        nextLabel="Next: Photos"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="photos">
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                          <ImageIcon className="h-6 w-6 mr-2 text-blue-600" />
                          Property Photos & Media
                        </h2>

                        <div className="space-y-6">
                          {/* Tips Section */}
                          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                            <div className="flex items-start">
                              <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="text-blue-800 font-medium mb-1">Tips for great property photos:</p>
                                <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                                  <li>Use natural lighting when possible</li>
                                  <li>Take photos during daytime</li>
                                  <li>Include photos of all rooms and key features</li>
                                  <li>Make sure the space is clean and tidy</li>
                                  <li>Add a floor plan if available</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Main Photo Upload */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Main Property Photo*</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 mb-2">Drag and drop your main property photo here</p>
                              <p className="text-gray-500 text-sm mb-4">
                                This will be the featured image in search results
                              </p>
                              <Button variant="outline" className="rounded-xl" type="button">
                                Browse Files (Not Implemented)
                              </Button>
                              {/* TODO: Add file input and state management */}
                            </div>
                          </div>

                          {/* Additional Photos Upload */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Additional Photos (up to 20)
                            </label>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                              <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 mb-2">Drag and drop additional property photos here</p>
                              <p className="text-gray-500 text-sm mb-4">
                                You can upload up to 20 additional photos (max 10MB each)
                              </p>
                              <Button variant="outline" className="rounded-xl" type="button">
                                Browse Files (Not Implemented)
                              </Button>
                               {/* TODO: Add file input and state management */}
                            </div>
                          </div>

                          {/* Uploaded Photos Preview */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Uploaded Photos (Placeholder)</label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="relative group">
                                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                      <ImageIcon className="h-8 w-8" />
                                    </div>
                                  </div>
                                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-white hover:bg-white/20 rounded-full p-2"
                                      type="button"
                                      onClick={() => console.log("Delete photo", i)} // Placeholder action
                                    >
                                      <Trash2 className="h-5 w-5" />
                                    </Button>
                                  </div>
                                </div>
                              ))}
                              <div className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                                <Plus className="h-8 w-8 text-gray-400" />
                                {/* TODO: Add click handler to trigger file input */}
                              </div>
                            </div>
                          </div>

                          {/* Virtual Tour */}
                          <div>
                            <label htmlFor="virtualTour" className="block text-sm font-medium text-gray-700 mb-2">
                              Virtual Tour / 3D Tour (optional)
                            </label>
                            <Input
                              id="virtualTour"
                              name="virtualTour"
                              placeholder="Paste your virtual tour link here (e.g., Matterport, YouTube)"
                              className="w-full p-3 rounded-xl"
                            />
                          </div>

                          {/* Floor Plan Upload */}
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Floor Plan (optional)</label>
                            <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
                              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 mb-2">Upload a floor plan image</p>
                              <Button variant="outline" className="rounded-xl" type="button">
                                Browse Files (Not Implemented)
                              </Button>
                               {/* TODO: Add file input and state management */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <NavigationFooter
                        onBack={handlePreviousTab}
                        backLabel="Back: Features"
                        onNext={handleNextTab}
                        nextLabel="Next: Pricing"
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="pricing">
                    <div className="space-y-8">
                      {/* Pricing & Availability Section */}
                      <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                          <DollarSign className="h-6 w-6 mr-2 text-blue-600" />
                          Pricing & Availability
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Monthly Rent */}
                          <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                              Monthly Rent*
                            </label>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                              <Input
                                id="price"
                                name="price"
                                type="number"
                                min="0"
                                placeholder="e.g. 2500"
                                className="w-full p-3 rounded-xl"
                                required
                              />
                            </div>
                          </div>
                          {/* Security Deposit */}
                          <div>
                            <label htmlFor="securityDeposit" className="block text-sm font-medium text-gray-700 mb-2">
                              Security Deposit
                            </label>
                            <div className="flex items-center">
                              <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                              <Input
                                id="securityDeposit"
                                name="securityDeposit"
                                type="number"
                                min="0"
                                placeholder="e.g. 2500"
                                className="w-full p-3 rounded-xl"
                              />
                            </div>
                          </div>
                          {/* Available From */}
                          <div>
                            <label htmlFor="availableFrom" className="block text-sm font-medium text-gray-700 mb-2">
                              Available From*
                            </label>
                            <Input id="availableFrom" name="availableFrom" type="date" className="w-full p-3 rounded-xl" required />
                          </div>
                          {/* Minimum Lease Term */}
                          <div>
                            <label htmlFor="minLeaseTerm" className="block text-sm font-medium text-gray-700 mb-2">
                              Minimum Lease Term*
                            </label>
                            <select
                              id="minLeaseTerm"
                              name="minLeaseTerm"
                              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                              required
                            >
                              <option value="">Select minimum lease term</option>
                              <option value="month-to-month">Month-to-Month</option>
                              <option value="3-months">3 Months</option>
                              <option value="6-months">6 Months</option>
                              <option value="1-year">1 Year</option>
                              <option value="2-years">2 Years</option>
                            </select>
                          </div>
                          {/* Additional Fees */}
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Additional Fees (if applicable)
                            </label>
                            <div className="space-y-4">
                              {additionalFees.map(fee => (
                                <FeeInput key={fee.id} id={fee.id} label={fee.label} />
                              ))}
                            </div>
                          </div>
                          {/* Pricing Notes */}
                          <div className="md:col-span-2">
                            <label htmlFor="pricingNotes" className="block text-sm font-medium text-gray-700 mb-2">
                              Pricing Notes (optional)
                            </label>
                            <Textarea
                              id="pricingNotes"
                              name="pricingNotes"
                              placeholder="Add any additional notes about pricing, fees, or special offers..."
                              className="w-full p-3 rounded-xl"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Listing Options Section */}
                      <div>
                        <h2 className="text-2xl font-semibold mb-6 flex items-center">
                          <Tag className="h-6 w-6 mr-2 text-blue-600" />
                          Listing Options
                        </h2>

                        <div className="space-y-6">
                          {/* Featured Listing */}
                          <div className="flex items-start">
                            <Checkbox id="featured-listing" name="featuredListing" className="mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <label htmlFor="featured-listing" className="font-medium">
                                Featured Listing ($19.99)
                              </label>
                              <p className="text-sm text-gray-600">
                                Get more visibility with a featured listing that appears at the top of search results
                              </p>
                            </div>
                          </div>
                          {/* Premium Listing */}
                          <div className="flex items-start">
                            <Checkbox id="premium-listing" name="premiumListing" className="mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <label htmlFor="premium-listing" className="font-medium">
                                Premium Listing ($29.99)
                              </label>
                              <p className="text-sm text-gray-600">
                                Includes featured placement, highlighted border, and "Premium" badge
                              </p>
                            </div>
                          </div>
                          {/* Instant Booking */}
                          <div className="flex items-start">
                            <Checkbox id="instant-booking" name="instantBooking" className="mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <label htmlFor="instant-booking" className="font-medium">
                                Enable Instant Booking
                              </label>
                              <p className="text-sm text-gray-600">
                                Allow qualified tenants to schedule viewings without prior approval
                              </p>
                            </div>
                          </div>
                          {/* Hide Address */}
                          <div className="flex items-start">
                            <Checkbox id="hide-address" name="hideAddress" className="mr-2 mt-1 flex-shrink-0" />
                            <div>
                              <label htmlFor="hide-address" className="font-medium">
                                Hide Exact Address
                              </label>
                              <p className="text-sm text-gray-600">
                                Only show the neighborhood and general location on the map
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <NavigationFooter
                        onBack={handlePreviousTab}
                        backLabel="Back: Photos"
                        isFinalStep={true}
                        finalStepLabel="Publish Listing"
                        onFinalSubmit={handlePublish}
                      />
                    </div>
                  </TabsContent>
                </CardContent>
              </Card>
            </Tabs>
          </div>
        </div>
      </div>
    // </form> // Closing tag if using a form element
  )
}

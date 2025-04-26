"use client"

import React from 'react';
import { Button } from '../ui/button';
import { CreditCard, Lock } from 'lucide-react';
import { actionButtons, landlordStats, property, timeSlots } from './data/data';

// Assume a hook exists to get user data, including login status, role, and premium status
// Replace this with your actual authentication/user hook
const useUser = () => {
  // Example implementation - replace with your actual logic
  // In a real app, this would likely fetch data or use context
  const [user, setUser] = React.useState({
    isLoggedIn: true, // Example: User is logged in
    role: 'rental',   // Example: User has 'rental' role
    isPremium: false, // Example: User does NOT have premium
  });
  const [isLoading, setIsLoading] = React.useState(false); // Set to true if fetching data async

  // Simulate fetching user data
  // React.useEffect(() => {
  //   setIsLoading(true);
  //   fetchUserData().then(data => {
  //     setUser(data);
  //     setIsLoading(false);
  //   });
  // }, []);

  return { user, isLoading };
};

// Component for the premium overlay
const PremiumOverlay = () => (
  <div className="absolute inset-0 bg-white/50 backdrop-blur-md flex flex-col items-center justify-center z-10 rounded-2xl p-8 text-center">
    <Lock className="h-12 w-12 text-yellow-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">Unlock Premium Features</h3>
    <p className="text-gray-600 mb-6">
      Upgrade to Premium to book viewings, contact landlords, and reserve properties.
    </p>
    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl py-3 px-6 text-lg">
      Upgrade to Premium
    </Button>
    {/* Add link/action to upgrade page */}
  </div>
);

export default function RightColumn() {
  const { user, isLoading } = useUser();

  // Determine if the content should be shown or overlaid
  const showContent = user?.isLoggedIn && user?.role === 'rental' && user?.isPremium;

  // Optional: Show loading state
  if (isLoading) {
    return (
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 h-96 flex items-center justify-center">
          <p>Loading...</p> {/* Or a spinner component */}
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-64 flex items-center justify-center">
          <p>Loading...</p> {/* Or a spinner component */}
        </div>
      </div>
    );
  }

  // Determine if the user meets the basic criteria (logged in as rental)
  // If not logged in or not a rental user, maybe show a different message or hide completely
  const isRentalUser = user?.isLoggedIn && user?.role === 'rental';


  return (
    <div className="lg:col-span-1 space-y-8">
      {/* Booking Card */}
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Conditionally render overlay if user is rental but not premium */}
        {!showContent && isRentalUser && <PremiumOverlay />}
        {/* Conditionally disable content if overlay is shown */}
        <div className={!showContent && isRentalUser ? 'opacity-50 pointer-events-none' : ''}>
          <h3 className="text-2xl font-semibold mb-6">Book a Viewing</h3>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={new Date().toISOString().split("T")[0]}
              disabled={!showContent && isRentalUser} // Disable if overlay is shown
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <select
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!showContent && isRentalUser} // Disable if overlay is shown
            >
              {timeSlots.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 mb-4 rounded-xl py-4 h-auto text-lg"
            disabled={!showContent && isRentalUser} // Disable if overlay is shown
          >
            Schedule Viewing
          </Button>
          <Button
            variant="outline"
            className="w-full mb-8 rounded-xl py-4 h-auto text-lg"
            disabled={!showContent && isRentalUser} // Disable if overlay is shown
          >
            Request Virtual Tour
          </Button>

          <div className="border-t border-gray-100 pt-8">
            <h4 className="font-semibold text-xl mb-6">
              Interested in this property?
            </h4>
            <div className="flex space-x-4 mb-6">
              {actionButtons.map((button, index) => (
                <Button
                  key={index}
                  className="flex-1 flex items-center justify-center rounded-xl py-4 h-auto"
                  variant={button.variant as any}
                  disabled={!showContent && isRentalUser} // Disable if overlay is shown
                >
                  <button.icon className="h-5 w-5 mr-2" />
                  {button.text}
                </Button>
              ))}
            </div>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center rounded-xl py-4 h-auto text-lg"
              disabled={!showContent && isRentalUser} // Disable if overlay is shown
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Reserve Now
            </Button>
          </div>
        </div>
      </div>

      {/* Landlord Card */}
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
         {/* Conditionally render overlay if user is rental but not premium */}
         {!showContent && isRentalUser && <PremiumOverlay />}
         {/* Conditionally disable content if overlay is shown */}
         <div className={!showContent && isRentalUser ? 'opacity-50 pointer-events-none' : ''}>
          <h3 className="text-2xl font-semibold mb-6">About the Landlord</h3>
          <div className="flex items-center mb-6">
            {/* Consider hiding landlord details if not premium */}
            <div>
              <h4 className="font-semibold text-lg">
                {property.landlord.name}
              </h4>
              <p className="text-gray-500">
                {property.landlord.properties} properties
              </p>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            {landlordStats.map((stat, index) => (
              <div key={index} className="flex justify-between p-3 bg-gray-50 rounded-xl">
                <span className="text-gray-600">{stat.label}</span>
                <span className="font-medium">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
          <Button
            className="w-full rounded-xl py-4 h-auto text-lg"
            disabled={!showContent && isRentalUser} // Disable if overlay is shown
          >
            Contact Landlord
          </Button>
        </div>
      </div>

      {/* Optional: Add a message/login prompt if user is not logged in or not a rental user */}
      {!isRentalUser && (
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
            <h3 className="text-xl font-semibold mb-4">Access Property Actions</h3>
            <p className="text-gray-600 mb-6">
              Please log in or sign up as a renter to book viewings and contact landlords.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 px-6">
              Log In / Sign Up
            </Button>
             {/* Add link/action to login/signup page */}
         </div>
      )}
    </div>
  );
}

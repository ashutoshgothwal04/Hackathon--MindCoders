"use client"

import React from 'react';
import { Button } from '../ui/button';
import { CreditCard, Lock, User, Settings, Key, Image } from 'lucide-react';
import { actionButtons, landlordStats, property, timeSlots } from './data/data';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu';

interface UserData {
  isLoggedIn: boolean;
  role: string;
  isPremium: boolean;
  fullName: string;
  email: string;
  avatar: string | null;
}

// Assume a hook exists to get user data, including login status, role, and premium status
// Replace this with your actual authentication/user hook
const useUser = () => {
  // Example implementation - replace with your actual logic
  // In a real app, this would likely fetch data or use context
  const [user, setUser] = React.useState<UserData>({
    isLoggedIn: true, // Example: User is logged in
    role: 'rental',   // Example: User has 'rental' role
    isPremium: false, // Example: User does NOT have premium
    fullName: 'John Doe',
    email: 'john@example.com',
    avatar: null,
  });
  const [isLoading, setIsLoading] = React.useState(false);

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
  </div>
);

// User Profile Dropdown Component
const UserProfileDropdown = ({ user }: { user: UserData }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.fullName}
              className="h-10 w-10 rounded-full object-cover"
            />
          ) : (
            <User className="h-6 w-6" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            <p className="font-medium">{user.fullName}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {/* Handle update profile picture */}}>
          <Image className="mr-2 h-4 w-4" />
          <span>Update Profile Picture</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {/* Handle update account details */}}>
          <Settings className="mr-2 h-4 w-4" />
          <span>Update Account Details</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => {/* Handle change password */}}>
          <Key className="mr-2 h-4 w-4" />
          <span>Change Password</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default function RightColumn() {
  const { user, isLoading } = useUser();

  // Determine if the content should be shown or overlaid
  const showContent = user?.isLoggedIn;

  // Optional: Show loading state
  if (isLoading) {
    return (
      <div className="lg:col-span-1">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 h-96 flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 h-64 flex items-center justify-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-1 space-y-8">
      {/* User Profile Button */}
      {user?.isLoggedIn && (
        <div className="flex justify-end">
          <UserProfileDropdown user={user} />
        </div>
      )}

      {/* Booking Card */}
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Conditionally render overlay if user is not logged in */}
        {!showContent && <PremiumOverlay />}
        {/* Conditionally disable content if overlay is shown */}
        <div className={!showContent ? 'opacity-50 pointer-events-none' : ''}>
          <h3 className="text-2xl font-semibold mb-6">Book a Viewing</h3>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date
            </label>
            <input
              type="date"
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              min={new Date().toISOString().split("T")[0]}
              disabled={!showContent}
            />
          </div>
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Time
            </label>
            <select
              className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={!showContent}
            >
              {timeSlots.map((time, index) => (
                <option key={index}>{time}</option>
              ))}
            </select>
          </div>
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 mb-4 rounded-xl py-4 h-auto text-lg"
            disabled={!showContent}
          >
            Schedule Viewing
          </Button>
          <Button
            variant="outline"
            className="w-full mb-8 rounded-xl py-4 h-auto text-lg"
            disabled={!showContent}
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
                  disabled={!showContent}
                >
                  <button.icon className="h-5 w-5 mr-2" />
                  {button.text}
                </Button>
              ))}
            </div>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center rounded-xl py-4 h-auto text-lg"
              disabled={!showContent}
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Reserve Now
            </Button>
          </div>
        </div>
      </div>

      {/* Landlord Card */}
      <div className="relative bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        {/* Conditionally render overlay if user is not logged in */}
        {!showContent && <PremiumOverlay />}
        {/* Conditionally disable content if overlay is shown */}
        <div className={!showContent ? 'opacity-50 pointer-events-none' : ''}>
          <h3 className="text-2xl font-semibold mb-6">About the Landlord</h3>
          <div className="flex items-center mb-6">
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
            disabled={!showContent}
          >
            Contact Landlord
          </Button>
        </div>
      </div>

      {/* Optional: Add a message/login prompt if user is not logged in */}
      {!user?.isLoggedIn && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Access Property Actions</h3>
          <p className="text-gray-600 mb-6">
            Please log in to book viewings and contact landlords.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 px-6">
            Log In
          </Button>
        </div>
      )}
    </div>
  );
}

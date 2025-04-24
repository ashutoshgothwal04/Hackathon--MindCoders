import React from 'react'
import { Button } from '../ui/button'
import { CreditCard } from 'lucide-react'
import { actionButtons, landlordStats, property, timeSlots } from './data/data'

export default function RightColumn() {


  return (
    <div className="lg:col-span-1">
    {/* Booking Card */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
      <h3 className="text-2xl font-semibold mb-6">Book a Viewing</h3>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Date
        </label>
        <input
          type="date"
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={new Date().toISOString().split("T")[0]}
        />
      </div>
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Time
        </label>
        <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
          {timeSlots.map((time, index) => (
            <option key={index}>{time}</option>
          ))}
        </select>
      </div>
      <Button className="w-full bg-blue-600 hover:bg-blue-700 mb-4 rounded-xl py-4 h-auto text-lg">
        Schedule Viewing
      </Button>
      <Button
        variant="outline"
        className="w-full mb-8 rounded-xl py-4 h-auto text-lg"
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
            >
              <button.icon className="h-5 w-5 mr-2" />
              {button.text}
            </Button>
          ))}
        </div>
        <Button className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center rounded-xl py-4 h-auto text-lg">
          <CreditCard className="h-5 w-5 mr-2" />
          Reserve Now
        </Button>
      </div>
    </div>

    {/* Landlord Card */}
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
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
      <Button className="w-full rounded-xl py-4 h-auto text-lg">
        Contact Landlord
      </Button>
    </div>
  </div>
  )
}

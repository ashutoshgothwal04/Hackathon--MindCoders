import { ArrowLeft, ChevronRight, Heart, MapPin, Share2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { property } from './data/data'
import { Button } from '../ui/button'

export default function PropertyHeader() {
  return (
    <>
              <div className="text-sm text-gray-500 mb-6 flex items-center">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link href="/properties" className="hover:text-blue-600 transition-colors">
          Properties
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-700 font-medium">{property.title}</span>
      </div>

      {/* Back Button */}
      <Link href="/properties" className="inline-flex items-center text-blue-600 font-medium mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Properties
      </Link>

      {/* Property Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">{property.title}</h1>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span className="text-lg">{property.location}</span>
          </div>
        </div>
        <div className="flex items-center mt-4 md:mt-0 space-x-4">
          <Button variant="outline" className="flex items-center rounded-full px-6">
            <Heart className="h-5 w-5 mr-2" />
            Save
          </Button>
          <Button variant="outline" className="flex items-center rounded-full px-6">
            <Share2 className="h-5 w-5 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Button } from '../ui/button'
import { Headset, Monitor, CuboidIcon as Cube } from 'lucide-react'

export default function Hero() {
  return (
    <div>
              <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Virtual Property Tours</h1>
        <p className="text-xl text-gray-600 mb-6">
          Experience properties from anywhere with our immersive 3D virtual tours
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">Browse VR Properties</Button>
          <Button variant="outline">How It Works</Button>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">How Virtual Tours Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Headset className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">VR Headset</h3>
            <p className="text-gray-600">Use any VR headset for the most immersive experience</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Desktop View</h3>
            <p className="text-gray-600">Explore properties in 3D on any computer or laptop</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Cube className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Mobile AR</h3>
            <p className="text-gray-600">Use your smartphone for augmented reality tours</p>
          </div>
        </div>
      </div>
    </div>
  )
}

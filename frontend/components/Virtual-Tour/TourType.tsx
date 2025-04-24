import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Check, Play } from "lucide-react"
import Image from 'next/image'

export default function TourType() {
  return (
    <div className="mb-12">
    <h2 className="text-2xl font-bold mb-6">Tour Types</h2>
    <Tabs defaultValue="vr" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="vr">VR Tours</TabsTrigger>
        <TabsTrigger value="3d">3D Walkthroughs</TabsTrigger>
        <TabsTrigger value="ar">AR Experience</TabsTrigger>
      </TabsList>
      <TabsContent value="vr" className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Virtual Reality Tours</h3>
            <p className="text-gray-700 mb-4">
              Our VR tours provide the most immersive experience possible. Put on a VR headset and walk through
              properties as if you were actually there. Look around in 360 degrees, move from room to room, and get
              a true sense of the space.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Compatible with Oculus, HTC Vive, and other VR headsets</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Realistic lighting and textures</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Interactive elements to open doors, turn on lights, etc.</span>
              </li>
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700">Try VR Tour Demo</Button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="VR Tour" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 p-4 rounded-full">
                <Play className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="3d" className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">3D Walkthroughs</h3>
            <p className="text-gray-700 mb-4">
              Our 3D walkthroughs allow you to explore properties on any device without a VR headset. Navigate
              through the space using your mouse or touchscreen, getting a complete view of the property from any
              angle.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Works on any device with a web browser</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Dollhouse view to see the entire floor plan</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Measurement tools to check dimensions</span>
              </li>
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700">Try 3D Walkthrough Demo</Button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="3D Walkthrough" fill className="object-cover" />
          </div>
        </div>
      </TabsContent>
      <TabsContent value="ar" className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Augmented Reality Experience</h3>
            <p className="text-gray-700 mb-4">
              Our AR experience lets you visualize furniture and decor in the actual space using your smartphone or
              tablet. See how different items would look and fit in the property before you move in.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Compatible with iOS and Android devices</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Virtual furniture catalog with hundreds of items</span>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-100 p-1 rounded-full mr-2 mt-1">
                  <Check className="h-4 w-4 text-blue-600" />
                </div>
                <span>Save and share your designs</span>
              </li>
            </ul>
            <Button className="bg-blue-600 hover:bg-blue-700">Download AR App</Button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image src="/placeholder.svg?height=400&width=600" alt="AR Experience" fill className="object-cover" />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  </div>
  )
}

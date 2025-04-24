import { Info } from 'lucide-react'

export default function FAQ() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-12">
    <div className="flex items-center mb-6">
      <Info className="h-6 w-6 text-blue-600 mr-2" />
      <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
    </div>
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-2">Do I need special equipment for virtual tours?</h3>
        <p className="text-gray-700">
          No special equipment is required for basic 3D walkthroughs, which work on any device with a web browser.
          For the full VR experience, a VR headset is recommended. Our AR features require a smartphone or tablet
          with AR capabilities.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">How accurate are the virtual tours?</h3>
        <p className="text-gray-700">
          Our virtual tours are created using high-precision 3D scanning technology, providing measurements accurate
          to within 1% of the actual dimensions. The visual representation, including colors and lighting, is
          optimized to match the real-world appearance as closely as possible.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Can I schedule a guided virtual tour with an agent?</h3>
        <p className="text-gray-700">
          Yes, we offer guided virtual tours where a real estate agent can walk you through the property in
          real-time, answering questions and providing additional information. These can be scheduled through our
          platform at a time convenient for you.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2">Are all properties available for virtual tours?</h3>
        <p className="text-gray-700">
          We're continuously expanding our virtual tour offerings. Currently, approximately 70% of our listings
          include some form of virtual tour. Properties with virtual tours are marked with a VR badge in the search
          results.
        </p>
      </div>
    </div>
  </div>
  )
}

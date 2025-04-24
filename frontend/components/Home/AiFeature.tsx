import { AIFeatures } from "../ai-features";

export default function AiFeature() {
  return (
    <section className="py-24 bg-white">
    <div className="container mx-auto px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-blue-600 font-medium mb-2">SMART FEATURES</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Rental Experience</h2>
        <p className="text-xl text-gray-600">
          Our cutting-edge technology makes finding and renting your perfect home easier than ever before
        </p>
      </div>
      <AIFeatures />
    </div>
  </section>
  )
}

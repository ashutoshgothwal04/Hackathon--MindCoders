import { HowItWorks } from "../how-it-works";

export default function Works() {
  return (
    <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-blue-600 font-medium mb-2">SIMPLE PROCESS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
        <p className="text-xl text-gray-600">Find and rent your dream home in just a few simple steps</p>
      </div>
      <HowItWorks />
    </div>
  </section>
  )
}

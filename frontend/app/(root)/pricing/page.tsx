import { faqs, pricingPlans } from "@/components/Pricing/Data"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 mb-8">
          Choose the plan that's right for you and find your perfect home with our AI-powered platform
        </p>
        <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
          <button className="rounded-full px-6 py-2 bg-blue-600 text-white font-medium">Monthly</button>
          <button className="rounded-full px-6 py-2 text-gray-700 font-medium">Annual (Save 20%)</button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow ${
              plan.mostPopular ? "border-blue-100 relative transform scale-105 shadow-md" : ""
            }`}
          >
            {plan.mostPopular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600">{plan.description}</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-500">/month</span>
            </div>
            <Button className={`w-full mb-8 rounded-xl py-6 h-auto ${plan.mostPopular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>{plan.buttonText}</Button>
            <ul className="space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-blue-50 rounded-2xl p-12 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to find your perfect home?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of happy renters who found their perfect match with our AI-powered platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 py-6 h-auto text-lg">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl px-8 py-6 h-auto text-lg"
          >
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

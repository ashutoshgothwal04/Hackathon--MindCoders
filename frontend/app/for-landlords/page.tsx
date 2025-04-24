import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, TrendingUp, Shield, FileCheck, MessageSquare, CreditCard, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForLandlordsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-700/90 to-blue-600/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Maximize Your Rental Property Potential
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Our AI-powered platform helps landlords find qualified tenants faster, reduce vacancies, and streamline
              property management
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <Link href="/signup">List Your Property</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-600/20 text-lg px-8 py-6 h-auto"
              >
                <Link href="#benefits">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">94%</p>
              <p className="text-gray-600">Occupancy Rate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">21 Days</p>
              <p className="text-gray-600">Average Time to Rent</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">10,000+</p>
              <p className="text-gray-600">Landlords</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-600">Tenant Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Landlords</h2>
            <p className="text-xl text-gray-600">
              Discover why thousands of property owners choose HomeMatch to manage their rentals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality Tenant Matching</h3>
                <p className="text-gray-600 mb-6">
                  Our AI algorithm matches your property with qualified tenants who meet your specific requirements.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Pre-screened tenant profiles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Verified income and employment</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Background and credit checks</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reduced Vacancy Rates</h3>
                <p className="text-gray-600 mb-6">
                  Fill vacancies faster with our targeted marketing and efficient screening process.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Premium listing visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Virtual tours to attract more applicants</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Automated showing scheduling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Reduced Risk</h3>
                <p className="text-gray-600 mb-6">
                  Our comprehensive screening process helps minimize risks associated with property rentals.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Thorough tenant screening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Digital lease agreements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Landlord Tools</h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your rental properties efficiently in one place
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Streamlined Listing Management</h3>
              <p className="text-lg text-gray-600 mb-8">
                Create professional property listings with our easy-to-use tools and reach thousands of potential
                tenants.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Professional listing templates</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>AI-powered description generator</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Virtual tour creation tools</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Automatic syndication to partner sites</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">Learn More</Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden order-1 md:order-2">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Listing Management Dashboard"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Tenant Screening Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Comprehensive Tenant Screening</h3>
              <p className="text-lg text-gray-600 mb-8">
                Make informed decisions with our thorough tenant screening process and detailed reports.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Credit and background checks</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Income and employment verification</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Rental history analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>AI-powered risk assessment</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">Learn More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* More Features */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-600">
              Our comprehensive platform provides all the tools landlords need to manage properties efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="bg-blue-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Digital Leasing</h3>
                <p className="text-gray-600">
                  Create, send, and sign legally binding lease agreements digitally with our secure platform.
                </p>
                <Link href="#" className="text-blue-600 font-medium flex items-center mt-4 hover:underline group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="bg-green-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Online Rent Collection</h3>
                <p className="text-gray-600">
                  Collect rent payments securely online with automatic reminders and payment tracking.
                </p>
                <Link href="#" className="text-blue-600 font-medium flex items-center mt-4 hover:underline group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="bg-purple-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Tenant Communication</h3>
                <p className="text-gray-600">
                  Streamline communication with tenants through our secure messaging platform and maintenance requests.
                </p>
                <Link href="#" className="text-blue-600 font-medium flex items-center mt-4 hover:underline group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <div className="bg-orange-100 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3">Performance Analytics</h3>
                <p className="text-gray-600">
                  Track property performance, occupancy rates, and financial metrics with detailed analytics.
                </p>
                <Link href="#" className="text-blue-600 font-medium flex items-center mt-4 hover:underline group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for your property management needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Basic</h3>
                  <p className="text-gray-600">For individual landlords</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <Button className="w-full mb-8 rounded-xl py-6 h-auto">Get Started</Button>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Up to 5 property listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Basic tenant screening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Digital lease agreements</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Online rent collection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-0 shadow-md border-blue-100 rounded-2xl relative transform scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Professional</h3>
                  <p className="text-gray-600">For growing property managers</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <Button className="w-full mb-8 bg-blue-600 hover:bg-blue-700 rounded-xl py-6 h-auto">
                  Get Started
                </Button>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Up to 20 property listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Advanced tenant screening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Virtual tours</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Maintenance request management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <p className="text-gray-600">For property management companies</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <Button className="w-full mb-8 rounded-xl py-6 h-auto">Contact Sales</Button>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Unlimited property listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Premium tenant screening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Custom lease templates</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Team management tools</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>API access</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Landlords Say</h2>
            <p className="text-xl text-gray-600">
              Thousands of property owners trust HomeMatch to manage their rental properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-full bg-blue-100 mr-4 overflow-hidden">
                      <img
                        src={`/placeholder.svg?height=100&width=100&text=Owner${i}`}
                        alt="Property Owner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Michael Thompson</h4>
                      <p className="text-gray-500">Property Owner, Chicago</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, index) => (
                      <svg key={index} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "HomeMatch has transformed how I manage my rental properties. I've reduced vacancy periods by 60%
                    and found higher quality tenants. The digital leasing and rent collection features save me hours
                    every month."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to Maximize Your Rental Income?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of successful landlords who trust HomeMatch to manage their rental properties
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <Link href="/signup">List Your Property</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-600/20 text-lg px-8 py-6 h-auto"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

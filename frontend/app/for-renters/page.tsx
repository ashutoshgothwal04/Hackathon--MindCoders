import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Search, Home, FileCheck, Key, Star, Shield, MessageSquare } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ForRentersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">Find Your Dream Home</h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
              Our AI-powered platform makes finding and renting your perfect home easier than ever
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-600/20 text-lg px-8 py-6 h-auto"
              >
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works for Renters</h2>
            <p className="text-xl text-gray-600">
              Our streamlined process makes finding and securing your next home simple and stress-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
            <div className="text-center relative">
              <div className="bg-blue-100 text-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10" />
              </div>
              {/* Connecting line */}
              <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200"></div>
              <h3 className="text-2xl font-semibold mb-4">Search & Match</h3>
              <p className="text-gray-600 leading-relaxed">
                Enter your preferences and let our AI find your perfect match from thousands of verified properties.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Home className="h-10 w-10" />
              </div>
              <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200"></div>
              <h3 className="text-2xl font-semibold mb-4">Virtual Tour</h3>
              <p className="text-gray-600 leading-relaxed">
                Experience properties through immersive 3D virtual tours without leaving your home.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-purple-100 text-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-10 w-10" />
              </div>
              <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200"></div>
              <h3 className="text-2xl font-semibold mb-4">Apply Online</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete paperwork digitally with secure blockchain-backed smart contracts and digital signatures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 text-orange-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Key className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Move In</h3>
              <p className="text-gray-600 leading-relaxed">
                Make secure payments and move into your new home with ongoing support for maintenance and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits for Renters</h2>
            <p className="text-xl text-gray-600">
              Discover why thousands of renters choose HomeMatch for their housing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI-Powered Matching</h3>
                <p className="text-gray-600 mb-6">
                  Our advanced algorithm analyzes your preferences to find properties that perfectly match your needs
                  and lifestyle.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Personalized property recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Match percentage based on your criteria</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Continuous learning from your feedback</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Verified Properties</h3>
                <p className="text-gray-600 mb-6">
                  Every listing on our platform is verified to ensure you're seeing accurate, high-quality rental
                  options.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Scam-free listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Accurate property details and photos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Landlord background verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <MessageSquare className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Seamless Communication</h3>
                <p className="text-gray-600 mb-6">
                  Connect directly with landlords and property managers through our secure messaging platform.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>In-app messaging system</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Schedule viewings with one click</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Negotiation assistance</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Virtual Tours & AR Experience</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience properties remotely with our cutting-edge virtual tour technology and augmented reality
                features.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>360° virtual property tours from anywhere</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>AR furniture placement to visualize your space</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Measurement tools to check dimensions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>VR headset compatibility for immersive experience</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl">
                <Link href="/virtual-tours">Explore Virtual Tours</Link>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Virtual Tour Demo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600/90 rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Renters Say</h2>
            <p className="text-xl text-gray-600">
              Thousands of renters have found their perfect home with our platform
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
                        src={`/placeholder.svg?height=100&width=100&text=User${i}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                      <p className="text-gray-500">New York, NY</p>
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
                    "The AI matching feature helped me find the perfect apartment in just a few days. The virtual tour
                    saved me so much time and the entire process was seamless!"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find answers to common questions about renting through our platform</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How does the AI matching system work?</h3>
                <p className="text-gray-600">
                  Our AI analyzes your preferences, search history, and feedback to recommend properties that match your
                  unique needs. The more you use the platform, the smarter it gets at finding your perfect home.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Are there any fees for renters?</h3>
                <p className="text-gray-600">
                  Basic property search and browsing is completely free. We offer premium plans with advanced features
                  like priority access to new listings, unlimited saved properties, and enhanced AI recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How do I schedule a property viewing?</h3>
                <p className="text-gray-600">
                  You can schedule in-person or virtual viewings directly through our platform. Simply click the
                  "Schedule Viewing" button on any property listing and select your preferred date and time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">How secure is the application process?</h3>
                <p className="text-gray-600">
                  We use bank-level encryption and secure blockchain technology to protect your personal and financial
                  information during the application process. All documents are stored securely and shared only with
                  verified landlords.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">What happens after my application is approved?</h3>
                <p className="text-gray-600">
                  Once approved, you'll receive a digital lease agreement to sign. After signing, you can make your
                  security deposit and first month's rent through our secure payment system, and then coordinate with
                  the landlord for key pickup or delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Ready to Find Your Dream Home?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of happy renters who found their perfect match with our AI-powered platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 h-auto">
                <Link href="/properties">Browse Properties</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-blue-600/20 text-lg px-8 py-6 h-auto"
              >
                <Link href="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

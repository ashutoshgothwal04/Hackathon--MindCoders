import { Search, Home, FileCheck, Key } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Search & Match",
    description: "Enter your preferences and let our AI find your perfect match from thousands of verified properties.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Home,
    title: "Virtual Tour",
    description: "Experience properties through immersive 3D virtual tours without leaving your home.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FileCheck,
    title: "Secure Agreement",
    description: "Complete paperwork digitally with secure blockchain-backed smart contracts and digital signatures.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Key,
    title: "Move In",
    description: "Make secure payments and move into your new home with ongoing support for maintenance and services.",
    color: "bg-orange-100 text-orange-600",
  },
]

export function HowItWorks() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="text-center relative">
            <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
              <step.icon className="h-10 w-10" />
            </div>

            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gray-200"></div>
            )}

            <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
            <p className="text-gray-600 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

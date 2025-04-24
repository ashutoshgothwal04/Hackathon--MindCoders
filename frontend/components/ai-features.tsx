import { Brain, Shield, FileCheck, Headset, MapPin, MessageSquare, CreditCard, Wrench } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Matchmaking",
    description:
      "Our algorithm suggests the best rental options based on your preferences like budget, location, amenities, and commute distance.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Shield,
    title: "Fraud Prevention",
    description:
      "AI scans for fake listings and flags suspicious activity. Landlords can verify properties with video walkthroughs or government-approved documents.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: FileCheck,
    title: "Secure Rental Agreements",
    description:
      "Blockchain-backed smart contracts for secure rental agreements with digital signatures for hassle-free tenant onboarding.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Headset,
    title: "AR/VR Virtual Tours",
    description:
      "Experience immersive 3D walkthroughs of rental properties without physically visiting them, saving you time and effort.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: MapPin,
    title: "Community Insights",
    description:
      "Crowdsourced reviews of neighborhood safety, accessibility, and commute quality, plus integration with local crime rate data.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: MessageSquare,
    title: "AI-Assisted Negotiation",
    description:
      "AI helps tenants negotiate rental prices based on market conditions with direct chat to landlords for quick inquiries.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Secure rent payment gateways via UPI, Stripe, or PayPal with automatic reminders and payment tracking.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Wrench,
    title: "Maintenance Tracking",
    description:
      "Tenants can request maintenance through the app, and landlords get notified instantly with status updates.",
    color: "bg-amber-100 text-amber-600",
  },
]

export function AIFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:translate-y-[-5px] duration-300"
        >
          <div className={`${feature.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
            <feature.icon className="h-8 w-8" />
          </div>
          <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}

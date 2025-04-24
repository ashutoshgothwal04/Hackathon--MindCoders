import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Lock,
  AlertTriangle,
  Check,
  Info,
  FileCheck,
  Users,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface FeatureCardProps {
  bgColor: string
  iconBgColor: string
  iconColor: string
  Icon: any
  title: string
  description: string
  listItems: string[]
}

interface SafetyTipCardProps {
  title: string
  tips: string[]
}

interface FraudPreventionItemProps {
  title: string;
  description: string;
}

interface LegalProtectionItemProps {
  title: string;
  description: string;
}

const mainFeatures = [
  {
    bgColor: "blue",
    iconBgColor: "blue",
    iconColor: "blue",
    Icon: Shield,
    title: "Verified Properties",
    description:
      "Every property on our platform undergoes a thorough verification process to ensure authenticity and accuracy.",
    listItems: [
      "Property ownership verification",
      "Address and location confirmation",
      "Photo verification",
      "Listing accuracy checks",
    ],
  },
  {
    bgColor: "green",
    iconBgColor: "green",
    iconColor: "green",
    Icon: Users,
    title: "Identity Verification",
    description:
      "We verify the identity of both landlords and tenants to create a trusted community of users.",
    listItems: [
      "Government ID verification",
      "Phone number verification",
      "Email verification",
      "Profile review process",
    ],
  },
  {
    bgColor: "purple",
    iconBgColor: "purple",
    iconColor: "purple",
    Icon: Lock,
    title: "Secure Transactions",
    description:
      "All financial transactions on our platform are protected with bank-level security measures.",
    listItems: [
      "Encrypted payment processing",
      "Secure deposit handling",
      "Fraud detection systems",
      "Payment confirmation receipts",
    ],
  },
]

const safetyTips = [
  {
    title: "Before Viewing a Property",
    tips: [
      "Verify the landlord's identity through our platform",
      "Research the neighborhood and property online",
      "Schedule viewings during daylight hours",
      "Bring a friend or family member when possible",
      "Share your viewing schedule with someone you trust",
    ],
  },
  {
    title: "When Making Payments",
    tips: [
      "Always use our secure payment system",
      "Never wire money or pay in cash",
      "Be wary of requests for security deposits before viewing",
      "Verify lease terms before making any payments",
      "Keep receipts and documentation of all transactions",
    ],
  },
  {
    title: "Signing the Lease",
    tips: [
      "Read the entire lease agreement carefully",
      "Use our secure digital signing platform",
      "Document the property condition before moving in",
      "Verify all terms match what was discussed",
      "Keep a copy of the signed lease agreement",
    ],
  },
  {
    title: "Red Flags to Watch For",
    tips: [
      "Prices significantly below market value",
      "Requests to wire money or pay via gift cards",
      "Landlords who can't show the property in person",
      "Pressure to sign or pay immediately",
      "Vague or inconsistent property details",
    ],
  },
]

const fraudPreventionItems: FraudPreventionItemProps[] = [
  {
    title: "Red Flag Detection",
    description:
      "Our system automatically flags suspicious behavior patterns and listings that don't meet our safety standards.",
  },
  {
    title: "Price Analysis",
    description:
      "We analyze rental prices against market data to identify listings with suspiciously low prices that could indicate scams.",
  },
  {
    title: "Image Verification",
    description:
      "Our technology checks images to detect stock photos or pictures used across multiple listings.",
  },
]

const legalProtectionsItems: LegalProtectionItemProps[] = [
  {
    title: "Fair Housing Compliance",
    description:
      "All listings on our platform must comply with fair housing laws, prohibiting discrimination based on race, color, religion, sex, disability, familial status, or national origin.",
  },
  {
    title: "Standardized Lease Agreements",
    description:
      "Our platform offers legally-reviewed lease templates that comply with local regulations and protect both parties.",
  },
  {
    title: "Dispute Resolution",
    description:
      "We provide a structured process for resolving disputes between landlords and tenants, with access to mediation services when needed.",
  },
]

const MainFeatureCard = ({
  bgColor,
  iconBgColor,
  iconColor,
  Icon,
  title,
  description,
  listItems,
}: FeatureCardProps) => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
      <div className={`bg-${bgColor}-600 h-2`} />
      <CardContent className="p-8">
        <div
          className={`bg-${iconBgColor}-100 p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}
        >
          <Icon className={`h-8 w-8 text-${iconColor}-600`} />
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {listItems.map((item, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const SafetyTipCard = ({ title, tips }: SafetyTipCardProps) => {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="bg-blue-100 p-2 rounded-full mr-3">
            <Info className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const FraudPreventionItem = ({ title, description }: FraudPreventionItemProps) => (
  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

const LegalProtectionItem = ({ title, description }: LegalProtectionItemProps) => (
  <div className="bg-gray-50 p-4 rounded-xl">
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
)

export default function SafetyPage() {
  return (
    <div className="container mx-auto px-8 py-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Safety & Security
        </h1>
        <p className="text-xl text-gray-600">
          Your safety is our top priority. Learn about the measures we take to
          create a secure rental experience.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
        {mainFeatures.map((feature, index) => (
          <MainFeatureCard key={index} {...feature} />
        ))}
      </div>

      {/* Fraud Prevention */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-red-100 p-3 rounded-full mr-4">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Fraud Prevention
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              Our AI-powered fraud detection system continuously monitors the
              platform to identify and remove suspicious listings and users.
            </p>
            <div className="space-y-6">
              {fraudPreventionItems.map((item, index) => (
                <FraudPreventionItem key={index} {...item} />
              ))}
            </div>
          </div>
          <div className="md:w-1/2 relative min-h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Fraud Prevention"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Safety Tips */}
      <div className="mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Safety Tips for Renters</h2>
          <p className="text-lg text-gray-600">
            Follow these guidelines to ensure a safe and secure rental
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyTips.map((tip, index) => (
            <SafetyTipCard key={index} {...tip} />
          ))}
        </div>
      </div>

      {/* Legal Protections */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12 mb-20">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 relative min-h-[300px] rounded-xl overflow-hidden order-2 md:order-1">
            <Image
              src="/placeholder.svg?height=600&width=800"
              alt="Legal Protections"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <FileCheck className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Legal Protections
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              We provide resources and tools to help you understand your rights
              and responsibilities as a renter or landlord.
            </p>
            <div className="space-y-6">
              {legalProtectionsItems.map((item, index) => (
                <LegalProtectionItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Report a Concern */}
      <div className="bg-red-50 rounded-2xl p-8 md:p-12 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-red-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Report a Concern</h2>
          <p className="text-lg text-gray-700 mb-8">
            If you encounter a suspicious listing, user, or activity on our
            platform, please report it immediately. Your vigilance helps keep
            our community safe.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 rounded-xl px-8 py-6 h-auto text-lg">
            <Link href="/report-concern">Report a Concern</Link>
          </Button>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gray-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Info className="h-8 w-8 text-gray-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
          <p className="text-lg text-gray-700 mb-8">
            If you have any questions or need further assistance, please don't
            hesitate to contact our support team.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-8 py-6 h-auto text-lg">
            <Link href="/contact-support">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

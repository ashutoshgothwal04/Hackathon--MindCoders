import { PropertyComparison } from "@/components/property-comparison"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/properties" className="inline-flex items-center text-blue-600 font-medium mb-8 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Properties
      </Link>

      <PropertyComparison />
    </div>
  )
}

import { ArrowRight, Link } from "lucide-react";
import { FeaturedProperties } from "../featured-properties";

export default function Featured() {
  return (
    <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-blue-600 font-medium mb-2">FEATURED LISTINGS</p>
          <h2 className="text-3xl md:text-4xl font-bold">Discover Perfect Homes</h2>
        </div>
        <Link href="/properties" className="text-blue-600 font-medium flex items-center group">
          View All Properties
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
      <FeaturedProperties />
    </div>
  </section>
  )
}

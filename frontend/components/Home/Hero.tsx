import { Search } from "@/components/search"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-700/90 z-0"></div>
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-5xl font-bold text-white mb-8 leading-tight">Find Your Dream Home</h1>
        <p className="text-xl md:text-xl text-blue-100 mb-10 leading-relaxed">
          AI-powered rental matching to find your ideal living space with personalized recommendations
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-7 py-3.5 h-auto">
            <Link href="/properties">Browse Properties</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white bg-white/10 hover:text-blue-700 text-lg px-7 py-3.5 h-auto"
          >
            <Link href="/how-it-works">Learn More</Link>
          </Button>
        </div>
      </div>

      {/* Search Component */}
      <div className="max-w-5xl mx-auto">
        <Search />
      </div>
    </div>
  </section>

  )
}

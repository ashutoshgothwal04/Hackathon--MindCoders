import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl mb-10 text-blue-100">
              Join thousands of happy renters who found their perfect match with
              our AI-powered platform
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-4 h-auto"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
  )
}

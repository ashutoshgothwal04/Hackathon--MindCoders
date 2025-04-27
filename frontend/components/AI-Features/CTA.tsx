import { Button } from "../ui/button";

export default function CTA() {
  return (
    <div className="bg-blue-600 dark:bg-bg-color rounded-lg shadow-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Experience the Future of Renting?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join thousands of happy renters who found their perfect home with our AI-powered platform
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="text-white bg-white/10 dark:hover:text-black hover:bg-blue-50">
            Watch Demo
          </Button>
        </div>
      </div>
  )
}

import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-8 mb-12 text-white">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">AI-Powered Rental Experience</h1>
      <p className="text-xl mb-8">
        Discover how artificial intelligence is revolutionizing the way you find and rent your perfect home
      </p>
      <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
        Try AI Matching
      </Button>
    </div>
  </div>
  )
}

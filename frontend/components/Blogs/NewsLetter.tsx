import { Button } from "../ui/button";

export default function NewsLetter() {
  return (
    <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
      Get the latest rental tips, market insights, and home decoration ideas delivered straight to your inbox
    </p>
    <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-grow px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl px-6">Subscribe</Button>
    </div>
  </div>
  )
}

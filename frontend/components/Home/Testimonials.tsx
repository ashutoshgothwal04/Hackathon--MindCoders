
export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
    <div className="container mx-auto px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-blue-600 font-medium mb-2">TESTIMONIALS</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-600">
          Thousands of renters have found their perfect home with our
          platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 mr-4 overflow-hidden">
                <img
                  src={`/placeholder.svg?height=100&width=100&text=User${i}`}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                <p className="text-gray-500">New York, NY</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              "The AI matching feature helped me find the perfect apartment
              in just a few days. The virtual tour saved me so much time and
              the entire process was seamless!"
            </p>
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5 text-yellow-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

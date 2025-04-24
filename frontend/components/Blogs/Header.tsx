import { Search } from 'lucide-react'
import React from 'react'
import { categories } from './Data/Data'

export default function Header() {
  return (
    <div>
              {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">HomeMatch Blog</h1>
        <p className="text-xl text-gray-600">
          Insights, tips, and trends to help you navigate the rental market and make your house feel like home
        </p>
      </div>

      {/* Search and Categories */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                index === 0 ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

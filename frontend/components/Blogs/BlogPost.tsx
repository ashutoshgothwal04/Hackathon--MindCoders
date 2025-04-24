import React from 'react'
import { blogPosts } from './Data/Data'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { ArrowRight, Calendar, User } from 'lucide-react'
import Link from 'next/link'

export default function BlogPost() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
    {blogPosts.map((post) => (
      <Card
        key={post.id}
        className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
      >
        <div className="relative h-48">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
        <CardContent className="p-6">
          <div className="flex items-center mb-3">
            <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-500 text-sm flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {post.date}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center">
                <User className="h-4 w-4 text-gray-500" />
              </div>
              <span className="text-sm font-medium">{post.author}</span>
            </div>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 font-medium text-sm flex items-center hover:underline"
            >
              Read More
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
  )
}

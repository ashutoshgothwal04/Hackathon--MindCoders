import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { featuredPost } from "./Data/Data";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function Featured() {
  return (
    <div className="mb-16">
    <Card className="overflow-hidden border-0 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 lg:h-auto">
          <Image
            src={featuredPost.image || "/placeholder.svg"}
            alt={featuredPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
              {featuredPost.category}
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-500 text-sm flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {featuredPost.date}
            </span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
          <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3 flex items-center justify-center">
                <User className="h-5 w-5 text-gray-500" />
              </div>
              <span className="font-medium">{featuredPost.author}</span>
            </div>
            <Link
              href={`/blog/${featuredPost.id}`}
              className="text-blue-600 font-medium flex items-center hover:underline"
            >
              Read More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </CardContent>
      </div>
    </Card>
  </div>
  )
}

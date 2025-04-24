import BlogPost from "@/components/Blogs/BlogPost"
import Featured from "@/components/Blogs/Featured"
import Header from "@/components/Blogs/Header"
import NewsLetter from "@/components/Blogs/NewsLetter"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <Header/>
      {/* Featured Post */}
      <Featured/>
      {/* Blog Posts Grid */}
      <BlogPost/>
      {/* Newsletter Subscription */}
      <NewsLetter/>
    </div>
  )
}

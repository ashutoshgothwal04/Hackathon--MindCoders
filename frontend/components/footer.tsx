import Link from "next/link"
import { Home, Mail, Phone, Instagram, Twitter, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Home className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-2xl">HomeMatch</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              AI-powered rental platform helping you find your perfect home with smart matching and secure transactions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Browse Properties
                </Link>
              </li>
              <li>
                <Link href="/ai-features" className="text-gray-400 hover:text-white transition-colors">
                  AI Features
                </Link>
              </li>
              <li>
                <Link href="/virtual-tours" className="text-gray-400 hover:text-white transition-colors">
                  Virtual Tours
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* For Renters & Landlords */}
          <div>
            <h3 className="text-lg font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/for-renters" className="text-gray-400 hover:text-white transition-colors">
                  For Renters
                </Link>
              </li>
              <li>
                <Link href="/for-landlords" className="text-gray-400 hover:text-white transition-colors">
                  For Landlords
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-gray-400 hover:text-white transition-colors">
                  Safety & Security
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-gray-400 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <a href="mailto:info@homematch.com" className="text-gray-400 hover:text-white transition-colors">
                  info@homematch.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HomeMatch. All rights reserved.</p>
          <div className="mt-3 space-x-4">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

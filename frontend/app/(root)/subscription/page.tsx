"use client"

import { useAuth } from "@/context/AuthContext"
import { useSubscription } from "@/context/SubscriptionContext"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, Crown, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function SubscriptionPage() {
  const { isAuthenticated } = useAuth()
  const { currentTier, features, plans, upgradeSubscription } = useSubscription()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null
  }

  const currentPlan = plans.find(plan => plan.tier === currentTier)!

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Subscription Management
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your subscription and access premium features
          </p>
        </div>

        {/* Current Plan */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Crown className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl font-bold">Current Plan</h2>
              </div>
              <p className="text-gray-600 mt-2">You are currently on the {currentPlan.name} plan</p>
            </div>
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg transition-all duration-300"
              onClick={() => router.push('/pricing')}
            >
              Change Plan
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-blue-600" />
                Plan Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>Up to {features.maxProperties} properties</span>
                </li>
                {features.aiFeatures && (
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>AI-powered features</span>
                  </li>
                )}
                {features.virtualTours && (
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Virtual tours</span>
                  </li>
                )}
                {features.prioritySupport && (
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Priority support</span>
                  </li>
                )}
                {features.advancedAnalytics && (
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                )}
                {features.customBranding && (
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3" />
                    <span>Custom branding</span>
                  </li>
                )}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Billing Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Current Plan</p>
                  <p className="font-medium">{currentPlan.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-medium">${currentPlan.price}/month</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Next Billing Date</p>
                  <p className="font-medium">Next month</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8 transform hover:scale-[1.01] transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="h-6 w-6 text-yellow-500" />
            Usage Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-sm text-gray-500 mb-2">Properties Listed</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm text-gray-500 mt-2">
                {features.maxProperties - 0} properties remaining
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-sm text-gray-500 mb-2">AI Features Used</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm text-gray-500 mt-2">
                {features.aiFeatures ? 'Unlimited' : 'Not available in your plan'}
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300">
              <p className="text-sm text-gray-500 mb-2">Virtual Tours</p>
              <p className="text-3xl font-bold">0</p>
              <p className="text-sm text-gray-500 mt-2">
                {features.virtualTours ? 'Unlimited' : 'Not available in your plan'}
              </p>
            </div>
          </div>
        </div>

        {/* Upgrade CTA */}
        {currentTier !== 'platinum' && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to upgrade?</h2>
                <p className="opacity-90">
                  Unlock more features and grow your property portfolio
                </p>
              </div>
              <Button
                className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg transition-all duration-300"
                onClick={() => router.push('/pricing')}
              >
                View Upgrade Options
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 
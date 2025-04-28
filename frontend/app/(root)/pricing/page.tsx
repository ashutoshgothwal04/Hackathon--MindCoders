"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/context/AuthContext"
import { useSubscription } from "@/context/SubscriptionContext"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function PricingPage() {
  const { isAuthenticated } = useAuth()
  const { plans, currentTier, upgradeSubscription } = useSubscription()
  const [isAnnual, setIsAnnual] = useState(false)

  const handleUpgrade = async (tier: string) => {
    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      window.location.href = '/login'
      return
    }
    try {
      await upgradeSubscription(tier as any)
      // Redirect to dashboard or show success message
      window.location.href = '/dashboard'
    } catch (error) {
      console.error('Failed to upgrade subscription:', error)
    }
  }

  return (
    <div className="container mx-auto px-4 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Choose Your Perfect Plan
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Unlock premium features and grow your property portfolio with our flexible subscription plans
        </p>
        <div className="inline-flex items-center rounded-full bg-gray-100 p-1">
          <button 
            onClick={() => setIsAnnual(false)}
            className={cn(
              "rounded-full px-6 py-2 font-medium transition-all",
              !isAnnual ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
            )}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={cn(
              "rounded-full px-6 py-2 font-medium transition-all",
              isAnnual ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"
            )}
          >
            Annual (Save 20%)
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => {
          const isCurrentPlan = plan.tier === currentTier
          const price = isAnnual ? plan.price * 0.8 * 12 : plan.price
          const displayPrice = isAnnual ? `$${price}/year` : `$${price}/month`

          return (
            <div
              key={plan.tier}
              className={cn(
                "bg-white rounded-2xl shadow-sm border p-8 hover:shadow-md transition-all",
                plan.tier === 'gold' ? "border-blue-100 relative transform scale-105 shadow-md" : "border-gray-100",
                isCurrentPlan ? "ring-2 ring-blue-500" : ""
              )}
            >
              {plan.tier === 'gold' && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </div>
              )}
              {isCurrentPlan && (
                <div className="absolute top-0 right-4 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  Current Plan
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">{displayPrice}</span>
                {isAnnual && (
                  <span className="text-sm text-gray-500 ml-2">(Save 20%)</span>
                )}
              </div>
              <Button 
                className={cn(
                  "w-full mb-8 rounded-xl py-6 h-auto",
                  plan.tier === 'gold' ? "bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700" : 
                  isCurrentPlan ? "bg-gray-100 text-gray-700 hover:bg-gray-200" : "bg-blue-600 hover:bg-blue-700"
                )}
                onClick={() => handleUpgrade(plan.tier)}
                disabled={isCurrentPlan}
              >
                {isCurrentPlan ? 'Current Plan' : 'Get Started'}
              </Button>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>Up to {plan.features.maxProperties} properties</span>
                </li>
                {plan.features.aiFeatures && (
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>AI-powered features</span>
                  </li>
                )}
                {plan.features.virtualTours && (
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Virtual tours</span>
                  </li>
                )}
                {plan.features.prioritySupport && (
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                )}
                {plan.features.advancedAnalytics && (
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Advanced analytics</span>
                  </li>
                )}
                {plan.features.customBranding && (
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span>Custom branding</span>
                  </li>
                )}
              </ul>
            </div>
          )
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Can I change my plan later?</h3>
            <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">What happens if I exceed my property limit?</h3>
            <p className="text-gray-600">You'll be notified when you're approaching your limit. You can either upgrade your plan or archive some properties to stay within your limit.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold mb-3">Is there a contract or commitment?</h3>
            <p className="text-gray-600">No, all plans are month-to-month with no long-term commitment. You can cancel anytime.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center max-w-5xl mx-auto text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to grow your property portfolio?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join thousands of property owners who are already using our platform to manage their properties efficiently
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 rounded-xl px-8 py-6 h-auto text-lg"
            onClick={() => handleUpgrade('gold')}
          >
            Start Free Trial
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 rounded-xl px-8 py-6 h-auto text-lg"
          >
            <Link href="/properties">Browse Properties</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

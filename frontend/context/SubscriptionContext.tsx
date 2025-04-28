"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from './AuthContext'

export type SubscriptionTier = 'free' | 'silver' | 'gold' | 'platinum'

interface SubscriptionFeatures {
  maxProperties: number
  aiFeatures: boolean
  prioritySupport: boolean
  virtualTours: boolean
  advancedAnalytics: boolean
  customBranding: boolean
}

interface SubscriptionPlan {
  tier: SubscriptionTier
  name: string
  price: number
  features: SubscriptionFeatures
  description: string
}

interface SubscriptionContextType {
  currentTier: SubscriptionTier
  features: SubscriptionFeatures
  plans: SubscriptionPlan[]
  upgradeSubscription: (tier: SubscriptionTier) => Promise<void>
  isLoading: boolean
}

const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined)

const subscriptionPlans: SubscriptionPlan[] = [
  {
    tier: 'free',
    name: 'Free',
    price: 0,
    description: 'Basic features for getting started',
    features: {
      maxProperties: 3,
      aiFeatures: false,
      prioritySupport: false,
      virtualTours: false,
      advancedAnalytics: false,
      customBranding: false,
    },
  },
  {
    tier: 'silver',
    name: 'Silver',
    price: 9.99,
    description: 'Perfect for small property owners',
    features: {
      maxProperties: 10,
      aiFeatures: true,
      prioritySupport: false,
      virtualTours: true,
      advancedAnalytics: false,
      customBranding: false,
    },
  },
  {
    tier: 'gold',
    name: 'Gold',
    price: 19.99,
    description: 'Ideal for growing property portfolios',
    features: {
      maxProperties: 50,
      aiFeatures: true,
      prioritySupport: true,
      virtualTours: true,
      advancedAnalytics: true,
      customBranding: false,
    },
  },
  {
    tier: 'platinum',
    name: 'Platinum',
    price: 49.99,
    description: 'For professional property managers',
    features: {
      maxProperties: 200,
      aiFeatures: true,
      prioritySupport: true,
      virtualTours: true,
      advancedAnalytics: true,
      customBranding: true,
    },
  },
]

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useAuth()
  const [currentTier, setCurrentTier] = useState<SubscriptionTier>('free')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchSubscription = async () => {
      if (isAuthenticated && user) {
        try {
          // TODO: Replace with actual API call to fetch user's subscription
          const response = await fetch('/api/subscription')
          const data = await response.json()
          setCurrentTier(data.tier || 'free')
        } catch (error) {
          console.error('Error fetching subscription:', error)
          setCurrentTier('free')
        }
      }
      setIsLoading(false)
    }

    fetchSubscription()
  }, [isAuthenticated, user])

  const upgradeSubscription = async (tier: SubscriptionTier) => {
    if (!isAuthenticated) {
      throw new Error('User must be authenticated to upgrade subscription')
    }

    try {
      // TODO: Replace with actual API call to upgrade subscription
      const response = await fetch('/api/subscription/upgrade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ tier }),
      })

      if (!response.ok) {
        throw new Error('Failed to upgrade subscription')
      }

      setCurrentTier(tier)
    } catch (error) {
      console.error('Error upgrading subscription:', error)
      throw error
    }
  }

  const currentFeatures = subscriptionPlans.find(plan => plan.tier === currentTier)?.features || subscriptionPlans[0].features

  return (
    <SubscriptionContext.Provider
      value={{
        currentTier,
        features: currentFeatures,
        plans: subscriptionPlans,
        upgradeSubscription,
        isLoading,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider')
  }
  return context
} 
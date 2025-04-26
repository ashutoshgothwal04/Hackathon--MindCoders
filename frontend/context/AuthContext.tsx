"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { login, register, logout, refreshToken } from '@/lib/auth'
import { properties as propertiesData } from "../components/Properties/data/data"

interface User {
  _id: string
  fullName: string
  email: string
  username: string
  avatar?: string
}

// Define a Property type based on the shape of propertiesData[0]
type Property = typeof propertiesData[number] & { liked: boolean }

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: { email?: string; username?: string; password: string }) => Promise<void>
  register: (credentials: { fullName: string; email: string; username: string; password: string; phone: string }) => Promise<void>
  logout: () => Promise<void>
  properties: Property[]
  togglePropertyLiked: (id: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  // Initialize likedPropertyIds as an empty array, removing localStorage logic
  const [likedPropertyIds, setLikedPropertyIds] = useState<string[]>([]);
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await refreshToken()
        if (response.success && response.user) {
          setUser(response.user)
        }
      } catch (error) {
        setUser(null)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  // Removed useEffect hook that saved likedPropertyIds to localStorage

  const handleLogin = async (credentials: { email?: string; username?: string; password: string }) => {
    try {
      const response = await login(credentials)
      if (response.success && response.user) {
        setUser(response.user)
        // Potentially clear liked properties on login if they should be user-specific and fetched from backend
        // setLikedPropertyIds([]); // Example: Reset likes on login
        router.push('/dashboard')
      }
    } catch (error) {
      throw error
    }
  }

  const handleRegister = async (credentials: { fullName: string; email: string; username: string; password: string; phone: string }) => {
    try {
      const response = await register(credentials)
      if (response.success && response.user) {
        setUser(response.user)
        // Potentially clear liked properties on register
        // setLikedPropertyIds([]); // Example: Reset likes on register
        router.push('/dashboard')
      }
    } catch (error) {
      throw error
    }
  }

  const handleLogout = async () => {
    try {
      await logout()
      setUser(null)
      // Clear liked properties on logout as they are no longer persisted
      setLikedPropertyIds([]);
      router.push('/login')
    } catch (error) {
      throw error
    }
  }

  const togglePropertyLiked = (id: string) => {
    setLikedPropertyIds(prev =>
      prev.includes(id)
        ? prev.filter(pid => pid !== id)
        : [...prev, id]
    );
  }

  // Compute properties with liked property based on in-memory state
  const computedProperties: Property[] = propertiesData.map(p => ({
    ...p,
    liked: likedPropertyIds.includes(p.id),
  }));

  return (
    <AuthContext.Provider
      value={{
        user,
        properties: computedProperties,
        isAuthenticated: !!user,
        isLoading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
        togglePropertyLiked,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
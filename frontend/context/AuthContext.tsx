"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { login, register, logout, refreshToken } from '@/lib/auth'

interface User {
  _id: string
  fullName: string
  email: string
  username: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (credentials: { email?: string; username?: string; password: string }) => Promise<void>
  register: (credentials: { fullName: string; email: string; username: string; password: string; phone: string }) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
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

  const handleLogin = async (credentials: { email?: string; username?: string; password: string }) => {
    try {
      const response = await login(credentials)
      if (response.success && response.user) {
        setUser(response.user)
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
      router.push('/login')
    } catch (error) {
      throw error
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
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
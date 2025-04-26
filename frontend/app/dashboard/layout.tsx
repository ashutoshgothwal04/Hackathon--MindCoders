"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Clock, MessageSquare, Bell, Home, Settings, FileCheck, CreditCard, LogOut, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-background border-r p-4 flex flex-col">
        <div className="mb-8">
          <h2 className="text-xl font-bold">MindCoders</h2>
          <p className="text-sm text-muted-foreground">Real Estate Platform</p>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col space-y-2 flex-grow">
          <Button 
            variant={pathname === "/dashboard" ? "default" : "ghost"} 
            className="justify-start" 
            asChild
          >
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          <Button 
            variant={pathname === "/dashboard/profile" ? "default" : "ghost"} 
            className="justify-start" 
            asChild
          >
            <Link href="/dashboard/profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Button>
          <Button variant="ghost" className="justify-start">
            <Heart className="mr-2 h-4 w-4" />
            Saved Properties
          </Button>
          <Button variant="ghost" className="justify-start">
            <Clock className="mr-2 h-4 w-4" />
            Recent Activity
          </Button>
          <Button variant="ghost" className="justify-start">
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button variant="ghost" className="justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
          <Button variant="ghost" className="justify-start">
            <FileCheck className="mr-2 h-4 w-4" />
            Applications
          </Button>
          <Button variant="ghost" className="justify-start">
            <CreditCard className="mr-2 h-4 w-4" />
            Payments
          </Button>
          <Button variant="ghost" className="justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>

        {/* Logout Button */}
        <Button variant="ghost" className="justify-start mt-auto" onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
} 
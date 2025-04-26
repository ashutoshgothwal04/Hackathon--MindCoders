"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Sun, Moon, LogOut, User, LayoutDashboard } from "lucide-react"; // Added LayoutDashboard
import { useTheme } from "next-themes";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Keep Avatar imports

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  // Assuming useAuth provides user object with username and email
  const { isAuthenticated, logout, user } = useAuth();
  const router = useRouter();
  const popoverCloseButtonRef = useRef<HTMLButtonElement>(null);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = async () => {
    try {
      // Close popover if open
      // Check if the ref is attached before clicking
      if (popoverCloseButtonRef.current && typeof popoverCloseButtonRef.current.click === 'function') {
        // Find the button that triggers the popover and simulate a click to close it
        // This is a workaround as Popover doesn't expose a direct close method easily accessible here
        // A better approach might involve managing Popover open state externally if needed
      }
      // Close mobile menu if open
      closeMenu();
      await logout();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Function to get initials from username
  const getInitials = (username?: string) => {
    if (!username) return <User className="h-4 w-4" />; // Use User icon as fallback
    return username
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-200 ${isScrolled ? 'shadow-md' : 'shadow-sm'} bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Adjusted padding */}
        <div className="flex items-center justify-between h-16 md:h-20"> {/* Adjusted height */}
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <Home className="h-7 w-7 md:h-8 md:w-8 text-blue-600 mr-2" />
            <span className="font-bold text-xl md:text-2xl text-blue-600 dark:text-blue-400">NestQuest</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <Link href="/properties" className="text-sm lg:text-base text-foreground/70 hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground transition-colors">Properties</Link>
            <Link href="/ai-features" className="text-sm lg:text-base text-foreground/70 hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground transition-colors">AI Features</Link>
            <Link href="/virtual-tours" className="text-sm lg:text-base text-foreground/70 hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground transition-colors">Virtual Tours</Link>
            <Link href="/blog" className="text-sm lg:text-base text-foreground/70 hover:text-foreground dark:text-foreground/80 dark:hover:text-foreground transition-colors">Blog</Link>
          </nav>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {isAuthenticated ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      {/* <AvatarImage src={user?.avatar} alt={user?.username || "User"} /> */}
                      <AvatarFallback>
                        <User className="h-5 w-5" /> {/* Use User icon */}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-64 p-4" align="end">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar className="h-10 w-10">
                       {/* <AvatarImage src={user?.avatar} alt={user?.username || "User"} /> */}
                       <AvatarFallback>
                         <User className="h-6 w-6" /> {/* Use User icon */}
                       </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{user?.username || "User"}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                  {/* Dashboard Links */}
                  <div className="space-y-1 mb-4"> {/* Container for links */}
                    <Link href="/dashboard" passHref>
                      <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm">
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/seller/dashboard" passHref>
                      <Button variant="ghost" className="w-full justify-start px-2 py-1.5 text-sm">
                        <Home className="h-4 w-4 mr-2" /> {/* Using Home icon for seller dashboard */}
                        Seller Dashboard
                      </Button>
                    </Link>
                  </div>
                  {/* Logout Button */}
                  <Button
                    variant="outline"
                    onClick={handleLogout}
                    className="w-full"
                    ref={popoverCloseButtonRef} // Ref for programmatic closing if needed elsewhere
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </PopoverContent>
              </Popover>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-900/20"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
             <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t dark:border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 py-6 space-y-4">
            <Link href="/properties" className="block text-foreground/80 hover:text-foreground py-2" onClick={toggleMenu}>Properties</Link>
            <Link href="/ai-features" className="block text-foreground/80 hover:text-foreground py-2" onClick={toggleMenu}>AI Features</Link>
            <Link href="/virtual-tours" className="block text-foreground/80 hover:text-foreground py-2" onClick={toggleMenu}>Virtual Tours</Link>
            <Link href="/blog" className="block text-foreground/80 hover:text-foreground py-2" onClick={toggleMenu}>Blog</Link>

            <div className="border-t dark:border-gray-700 pt-4 flex flex-col space-y-4">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center space-x-3 px-1 py-2">
                     <Avatar className="h-10 w-10">
                       {/* <AvatarImage src={user?.avatar} alt={user?.username || "User"} /> */}
                       <AvatarFallback>
                         <User className="h-6 w-6" /> {/* Use User icon */}
                       </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{user?.username || "User"}</p>
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </div>
                   {/* Mobile Dashboard Links */}
                   <Link href="/dashboard" passHref>
                      <Button variant="ghost" className="w-full justify-start" onClick={toggleMenu}>
                        <LayoutDashboard className="h-4 w-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/seller/dashboard" passHref>
                      <Button variant="ghost" className="w-full justify-start" onClick={toggleMenu}>
                        <Home className="h-4 w-4 mr-2" />
                        Seller Dashboard
                      </Button>
                    </Link>
                  <Button
                    onClick={handleLogout} // handleLogout already closes the menu
                    variant="outline"
                    className="w-full"
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      onClick={toggleMenu}
                      variant="outline"
                      className="w-full text-blue-600 border-blue-600 dark:text-blue-400 dark:border-blue-400"
                    >
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button
                      onClick={toggleMenu}
                      className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

// path of this file NestQuest/app/layout.tsx

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NestQuest - AI-Powered House Rental Platform",
  description:
    "Find your perfect rental home with AI-powered matching, virtual tours, and secure payments",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <SubscriptionProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <div className="flex flex-col min-h-screen">
                <main className="flex-grow">{children}</main>
              </div>
            </ThemeProvider>
            <Toaster position="top-right" />
          </SubscriptionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

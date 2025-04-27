import { stats } from "@/components/Home/data/data";
import Featured from "@/components/Home/Featured";
import AiFeature from "@/components/Home/AiFeature";
import Works from "@/components/Home/Works";
import Testimonials from "@/components/Home/Testimonials";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import Stats from "@/components/Home/Stats";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* Stats Section */}
      <Stats stats={stats} />
      {/* Featured Properties */}
      <Featured />
      {/* AI Features */}
      <AiFeature />
      {/* How It Works */}
      <Works />
      {/* Testimonials */}
      <Testimonials />
      {/* CTA */}
      <CTA />
    </div>
  );
}

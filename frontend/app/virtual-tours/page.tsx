import Hero from "@/components/Virtual-Tour/Hero";
import Featured from "@/components/Virtual-Tour/Featured";
import TourType from "@/components/Virtual-Tour/TourType";
import FAQ from "@/components/Virtual-Tour/FAQ";

export default function VirtualToursPage() {
  return (
    <div className="container mx-auto px-8 py-8">
      <Hero />
      {/* Featured Virtual Tours */}
      <Featured />
      {/* Tour Types */}
      <TourType />
      {/* FAQ */}
      <FAQ />
    </div>
  );
}

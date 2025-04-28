import CTA from "@/components/AI-Features/CTA"
import Features from "@/components/AI-Features/Features"
import Hero from "@/components/AI-Features/Hero"
import Matchmaking from "@/components/AI-Features/Matchmaking"
import Overview from "@/components/AI-Features/Overview"
import PricePrediction from "@/components/AI-Features/PricePrediction"


export default function AIFeaturesPage() {
  return (
    <div className="container mx-auto px-12 py-8">
      {/* Hero Section */}
      <Hero/> 
      {/* AI Features Overview */}
      <Overview/>
      {/* AI Matchmaking Showcase */}
      <Matchmaking/>
      {/* Price Prediction */}
      <PricePrediction/>
      {/* Security Features */}
      <Features/>
      {/* CTA */}
      <CTA/>
    </div>
  )
}

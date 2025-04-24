import { Brain, FileCheck, Headset, MapPin, MessageSquare, Shield, Users, Lock } from "lucide-react";

export const features = [
    {
      title: "AI-Powered Matchmaking",
      description:
        "Our algorithm suggests the best rental options based on your preferences like budget, location, amenities, and commute distance.",
      icon: Brain,
      iconColor: "blue",
      listItems: [
        "Personalized property recommendations",
        "Learning from your feedback and preferences",
        "Price prediction based on market trends",
      ],
    },
    {
      title: "Fraud Prevention & Verification",
      description:
        "AI scans for fake listings and flags suspicious activity. Landlords can verify properties with video walkthroughs or government-approved documents.",
      icon: Shield,
      iconColor: "green",
      listItems: [
        "Automated scam detection",
        "Verified property badges",
        "Secure identity verification",
      ],
    },
    {
      title: "Smart Contracts & Agreements",
      description:
        "Blockchain-backed smart contracts for secure rental agreements with digital signatures for hassle-free tenant onboarding.",
      icon: FileCheck,
      iconColor: "purple",
      listItems: [
        "Tamper-proof rental agreements",
        "Digital signature capabilities",
        "Automated payment schedules",
      ],
    },
    {
      title: "AR/VR Virtual Tours",
      description:
        "Experience immersive 3D walkthroughs of rental properties without physically visiting them, saving you time and effort.",
      icon: Headset,
      iconColor: "orange",
      listItems: [
        "360° property visualization",
        "Virtual furniture placement",
        "Mobile AR compatibility",
      ],
    },
    {
      title: "Community Insights",
      description:
        "Crowdsourced reviews of neighborhood safety, accessibility, and commute quality, plus integration with local crime rate data.",
      icon: MapPin,
      iconColor: "teal",
      listItems: [
        "Neighborhood safety scores",
        "Commute time analysis",
        "Local amenities mapping",
      ],
    },
    {
      title: "AI-Assisted Negotiation",
      description:
        "AI helps tenants negotiate rental prices based on market conditions with direct chat to landlords for quick inquiries.",
      icon: MessageSquare,
      iconColor: "red",
      listItems: [
        "Market-based price suggestions",
        "Negotiation templates and scripts",
        "Real-time landlord messaging",
      ],
    },
  ]

export  const steps = [
    { number: '1', title: 'Input Your Preferences', description: 'Tell us about your budget, desired location, must-have amenities, and lifestyle needs.' },
    { number: '2', title: 'AI Analysis', description: 'Our algorithm analyzes thousands of properties and market data points to find matches.' },
    { number: '3', title: 'Personalized Recommendations', description: 'Receive a curated list of properties with match percentages based on your criteria.' },
    { number: '4', title: 'Continuous Learning', description: 'The AI learns from your feedback and refines future recommendations.' },
  ];
  
export  const matchScores = [
    { label: 'Location Match', percentage: '92%', description: 'This property is in your preferred neighborhood and close to your workplace.' },
    { label: 'Budget Match', percentage: '85%', description: 'The rent is within your budget range, including estimated utilities.' },
    { label: 'Amenities Match', percentage: '95%', description: 'This property has 9/10 amenities you marked as important.' },
    { label: 'Lifestyle Match', percentage: '88%', description: 'The neighborhood aligns with your lifestyle preferences and activities.' },
  ];

export  const featuresData = [
    {
      title: "Fraud Detection",
      description: "Our AI constantly scans listings for suspicious patterns and red flags that might indicate scams or fraudulent activity.",
      icon: Shield,
      iconColor: "red",
    },
    {
      title: "Secure Transactions",
      description: "All payments and financial transactions are protected with bank-level encryption and secure payment processing.",
      icon: Lock,
      iconColor: "green",
    },
    {
      title: "Identity Verification",
      description: "We verify the identity of both landlords and tenants to ensure everyone on our platform is who they claim to be.",
      icon: Users,
      iconColor: "blue",
    },
  ];
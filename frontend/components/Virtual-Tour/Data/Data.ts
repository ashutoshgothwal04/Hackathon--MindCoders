import { CuboidIcon, Headset, Monitor } from "lucide-react";

export const faqData = [
    {
      question: 'Do I need special equipment for virtual tours?',
      answer:
        'No special equipment is required for basic 3D walkthroughs, which work on any device with a web browser. For the full VR experience, a VR headset is recommended. Our AR features require a smartphone or tablet with AR capabilities.',
    },
    {
      question: 'How accurate are the virtual tours?',
      answer:
        'Our virtual tours are created using high-precision 3D scanning technology, providing measurements accurate to within 1% of the actual dimensions. The visual representation, including colors and lighting, is optimized to match the real-world appearance as closely as possible.',
    },
    {
      question: 'Can I schedule a guided virtual tour with an agent?',
      answer:
        'Yes, we offer guided virtual tours where a real estate agent can walk you through the property in real-time, answering questions and providing additional information. These can be scheduled through our platform at a time convenient for you.',
    },
    {
      question: 'Are all properties available for virtual tours?',
      answer:
        "We're continuously expanding our virtual tour offerings. Currently, approximately 70% of our listings include some form of virtual tour. Properties with virtual tours are marked with a VR badge in the search results.",
    },
  ];

  export const howItWorksData = [
    {
      icon: Headset,
      title: 'VR Headset',
      description: 'Use any VR headset for the most immersive experience',
    },
    {
      icon: Monitor,
      title: 'Desktop View',
      description: 'Explore properties in 3D on any computer or laptop',
    },
    {
      icon: CuboidIcon,
      title: 'Mobile AR',
      description: 'Use your smartphone for augmented reality tours',
    },
  ];

  export const tourTypesData = [
    {
      value: "vr",
      triggerLabel: "VR Tours",
      title: "Virtual Reality Tours",
      description: "Our VR tours provide the most immersive experience possible. Put on a VR headset and walk through properties as if you were actually there. Look around in 360 degrees, move from room to room, and get a true sense of the space.",
      features: [
        "Compatible with Oculus, HTC Vive, and other VR headsets",
        "Realistic lighting and textures",
        "Interactive elements to open doors, turn on lights, etc.",
      ],
      buttonLabel: "Try VR Tour Demo",
      imageAlt: "VR Tour",
      showPlayButton: true,
    },
    {
      value: "3d",
      triggerLabel: "3D Walkthroughs",
      title: "3D Walkthroughs",
      description: "Our 3D walkthroughs allow you to explore properties on any device without a VR headset. Navigate through the space using your mouse or touchscreen, getting a complete view of the property from any angle.",
      features: [
        "Works on any device with a web browser",
        "Dollhouse view to see the entire floor plan",
        "Measurement tools to check dimensions",
      ],
      buttonLabel: "Try 3D Walkthrough Demo",
      imageAlt: "3D Walkthrough",
      showPlayButton: false,
    },
    {
      value: "ar",
      triggerLabel: "AR Experience",
      title: "Augmented Reality Experience",
      description: "Our AR experience lets you visualize furniture and decor in the actual space using your smartphone or tablet. See how different items would look and fit in the property before you move in.",
      features: [
        "Compatible with iOS and Android devices",
        "Virtual furniture catalog with hundreds of items",
        "Save and share your designs",
      ],
      buttonLabel: "Download AR App",
      imageAlt: "AR Experience",
      showPlayButton: false,
    },
  ];
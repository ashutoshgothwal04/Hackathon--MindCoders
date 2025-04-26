# NestQuest – Hackathon Project Documentation

## 🧠 Hackathon

**MindCoder Hackathon 2025**

## 🧑‍💻 Team Members

| Name             | Role               |
| ---------------- | ------------------ |
| Anamika Saini    | Team Leader        |
| Adarsh Sharma    | Backend Developer |
| Ashutosh Gothwal | All Developer      |
| Rishi Tiwari     | Frontend Developer |

## 🚀 Project Overview

**NestQuest** is a platform where users can  **search** ,  **list** , and **rent rest houses** without any  **middlemen or brokers** . It aims to create a transparent, community-driven network for short and long-term stays, ensuring trust, affordability, and ease of use.

## **🖊️  Installation**

Terminal commands

*npm i --legacy-peer-deps*

## 🎯 Problem Statement

Finding rest houses often involves hidden charges and unreliable middlemen. There's a lack of a **trustworthy peer-to-peer rental system** where users can connect directly with house owners.

## 🌟 Solution

NestQuest eliminates the broker by connecting **house owners and seekers directly** on a single platform. With real-time listings, secure user verification, and simple chat integration, it ensures a smooth rental process.

## 🛠️ Tech Stack

| Layer          | Technology          |
| -------------- | ------------------- |
| Frontend       | Next.js             |
| Backend        | Node.js, Express.js |
| Database       | MongoDB, Cloudneiry |
| Authentication | JWT                 |
| Hosting        | Vercel              |

## 🖼️ Features

* 🔍 **Search Listings** – Users can search rest houses by location, price, and date.
* 🏡 **Post Your Rest House** – Owners can easily list their property with images and details.
* 🧑‍💻 **Login & Authentication** – Secure login system.
* 💬 **Direct Chat / Contact** – Owners and renters can communicate directly (optional).
* 📷 **Image Upload** – Upload multiple images for each rest house.
* 🗺️ **Map Integration** – Locate rest houses on a map (optional/bonus).
* 📅 **Booking Calendar** – Users can view availability (optional/bonus).

## 📦 Project Architecture

```
NestQuest/
├── app/                     # Next.js App Router
│   ├── ai-features/
│   ├── blog/
│   ├── compare/
│   ├── dashboard/
│   ├── for-landlords/
│   ├── for-renters/
│   ├── pricing/
│   ├── properties/
│   ├── safety/
│   ├── seller/
│   ├── virtual-tours/
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   └── page.tsx
│
├── components/              # Reusable UI Components
│   ├── Ai-Features/
│   ├── Blogs/
│   ├── Home/
│   ├── Pricing/
│   ├── Properties/
│   ├── ui/
│   └── Virtual-Tour/
│       ├── ai-features.tsx
│       ├── featured-properties.tsx
│       ├── footer.tsx
│       ├── header.tsx
│       ├── how-it-works.tsx
│       ├── property-card.tsx
│       ├── property-comparison.tsx
│       ├── search.tsx
│       └── theme-provider.tsx
│
├── hooks/                   # Custom Hooks
├── lib/                     # Helper & Utility Functions
├── public/                  # Static Files (images, icons)
├── styles/                  # Tailwind & Global CSS
├── node_modules/            # NPM Modules
│
├── .gitignore
├── components.json
├── next.config.mjs          # Next.js Config
├── package.json
├── package-lock.json / pnpm-lock.yaml
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🔐 Authentication Flow

* Users can sign up and log in.
* JWT token is generated and stored securely.
* Protected routes for posting/editing listings.📈 Future Scope
* Add **payment gateway** for bookings.
* Add **ratings and reviews** for listings and users.
* Implement  **AI-based recommendations** .
* Add **PWA support** for mobile users.

## 👨‍🔧 Challenges Faced

* Managing image uploads and storage.
* Implementing real-time data updates.
* Ensuring a smooth UX on both mobile and desktop.
* Coordinating as a team under time pressure.

## ✅ What We Achieved

* A full-stack MERN app in limited time.
* Built a real-world usable system.
* Learned collaboration, Git, and time management.

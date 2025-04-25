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

**Nestify** is a platform where users can  **search** ,  **list** , and **rent rest houses** without any  **middlemen or brokers** . It aims to create a transparent, community-driven network for short and long-term stays, ensuring trust, affordability, and ease of use.

## **🖊️  Installation**

Terminal commands

*npm i --legacy-peer-deps*

**.env.local file keys**

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FwYWJsZS1hYXJkdmFyay0zMi5jbGVyay5hY2NvdW50cy5kZXYk

CLERK_SECRET_KEY=sk_test_bRawmk2nhx0MsFCIE4WsEG7Ef0Q1lp4myyrw0WGGwS

## 🎯 Problem Statement

Finding rest houses often involves hidden charges and unreliable middlemen. There's a lack of a **trustworthy peer-to-peer rental system** where users can connect directly with house owners.

## 🌟 Solution

Nestify eliminates the broker by connecting **house owners and seekers directly** on a single platform. With real-time listings, secure user verification, and simple chat integration, it ensures a smooth rental process.

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

## 🛣️ API Routes Documentation

### Backend Routes
#### User Routes
| Method | Endpoint | Description | Authentication Required |
|--------|----------|-------------|------------------------|
| POST | `/api/users/register` | Register a new user | No |
| POST | `/api/users/login` | Login user | No |
| POST | `/api/users/logout` | Logout user | Yes |
| POST | `/api/users/refresh-token` | Refresh access token | No |
| POST | `/api/users/change-password` | Change user password | Yes |
| GET | `/api/users/current-user` | Get current user details | Yes |
| POST | `/api/users/update-account-details` | Update user account details | Yes |
| POST | `/api/users/update-profile-picture` | Update profile picture | Yes |

#### Message Routes  -- currently not available
| Method | Endpoint | Description | Authentication Required |
|--------|----------|-------------|------------------------|
| POST | `/api/messages/` | Send a new message | Yes |
| GET | `/api/messages/property/:propertyId/user/:otherUserId` | Get messages between users for a property | Yes |
| GET | `/api/messages/conversations` | Get all user conversations | Yes |
| POST | `/api/messages/upload` | Upload message attachment | Yes |
| DELETE | `/api/messages/:messageId` | Delete a message | Yes |

#### Property Routes
| Method | Endpoint | Description | Authentication Required |
|--------|----------|-------------|------------------------|
| POST | `/api/properties/` | Create new property listing | Yes |
| GET | `/api/properties/` | Get all properties with filters | No |
| GET | `/api/properties/:id` | Get property by ID | No |
| PATCH | `/api/properties/:id` | Update property details | Yes |
| DELETE | `/api/properties/:id` | Delete property | Yes |
| GET | `/api/properties/seller/:sellerId` | Get properties by seller | Yes |

### Frontend Routes
| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/ai-features` | AI Features page |
| `/blog` | Blog section |
| `/compare` | Property comparison page |
| `/dashboard` | User dashboard |
| `/for-landlords` | Landlord information page |
| `/for-renters` | Renter information page |
| `/pricing` | Pricing plans page |
| `/properties` | Property listings page |
| `/safety` | Safety information page |
| `/seller` | Seller dashboard |
| `/virtual-tours` | Virtual property tours page |

## 📁 Project Folder Structure

### Frontend Structure
```
frontend/
├── app/                     # Next.js App Router
│   ├── ai-features/         # AI Features pages
│   ├── blog/               # Blog section pages
│   ├── compare/            # Property comparison pages
│   ├── dashboard/          # User dashboard pages
│   ├── for-landlords/      # Landlord information pages
│   ├── for-renters/        # Renter information pages
│   ├── pricing/            # Pricing plans pages
│   ├── properties/         # Property listing pages
│   ├── safety/             # Safety information pages
│   ├── seller/             # Seller dashboard pages
│   ├── virtual-tours/      # Virtual tour pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   ├── loading.tsx         # Loading component
│   └── page.tsx            # Home page
│
├── components/             # Reusable UI Components
│   ├── Ai-Features/       # AI Features components
│   ├── Blogs/            # Blog components
│   ├── Home/             # Home page components
│   ├── Pricing/          # Pricing components
│   ├── Properties/       # Property components
│   ├── ui/               # Common UI components
│   └── Virtual-Tour/     # Virtual tour components
│
├── hooks/                 # Custom React Hooks
├── lib/                   # Utility functions and helpers
├── public/                # Static assets
│   ├── images/           # Image assets
│   └── icons/            # Icon assets
├── styles/                # CSS and styling files
└── types/                 # TypeScript type definitions
```

### Backend Structure
```
backend/
├── api/                    # API Routes
│   ├── users/             # User-related endpoints
│   │   ├── register       # POST /api/users/register
│   │   ├── login         # POST /api/users/login
│   │   ├── logout        # POST /api/users/logout
│   │   ├── refresh-token # POST /api/users/refresh-token
│   │   ├── change-password # POST /api/users/change-password
│   │   ├── current-user  # GET /api/users/current-user
│   │   ├── update-account # POST /api/users/update-account-details
│   │   └── update-profile # POST /api/users/update-profile-picture
│   │
│   ├── messages/          # Message-related endpoints
│   │   ├── /             # POST /api/messages/ (send message)
│   │   ├── property/:propertyId/user/:otherUserId # GET messages
│   │   ├── conversations # GET /api/messages/conversations
│   │   ├── upload       # POST /api/messages/upload
│   │   └── :messageId   # DELETE /api/messages/:messageId
│   │
│   └── properties/       # Property-related endpoints
│       ├── /            # POST/GET /api/properties/
│       ├── :id          # GET/PATCH/DELETE /api/properties/:id
│       └── seller/:sellerId # GET /api/properties/seller/:sellerId
│
├── config/                # Configuration files
│   ├── cloudinary.js     # Cloudinary setup
│   └── db.js             # Database connection
│
├── controllers/          # Business logic
│   ├── user.controllers.js
│   │   ├── registerUser()
│   │   ├── loginUser()
│   │   ├── logoutUser()
│   │   ├── refreshAccessToken()
│   │   ├── changeCurrentPassword()
│   │   ├── getCurrentUser()
│   │   ├── updateAccountDetails()
│   │   └── updateProfilePicture()
│   │
│   ├── message.controllers.js
│   │   ├── sendMessage()
│   │   ├── getMessages()
│   │   ├── getConversations()
│   │   ├── uploadAttachment()
│   │   └── deleteMessage()
│   │
│   └── property.controllers.js
│       ├── createProperty()
│       ├── getAllProperties()
│       ├── getPropertyById()
│       ├── updateProperty()
│       ├── deleteProperty()
│       └── getPropertiesBySeller()
│
├── middlewares/          # Custom middleware
│   ├── JWT_Verify.js     # JWT authentication
│   └── multer.middleware.js  # File upload handling
│
├── models/               # Database schemas
│   ├── user.model.js     # User schema
│   ├── property.model.js # Property schema
│   └── message.model.js  # Message schema
│
└── utils/                # Helper functions
    ├── ApiError.js       # Error handling
    ├── ApiResponse.js    # Response handling
    └── asyncHandler.js   # Async handler
```

### Backend Path Structure Tree
```
backend/
├── api/                    # API Routes
│   ├── users/             # User-related endpoints
│   │   ├── register       # POST /api/users/register
│   │   ├── login         # POST /api/users/login
│   │   ├── logout        # POST /api/users/logout
│   │   ├── refresh-token # POST /api/users/refresh-token
│   │   ├── change-password # POST /api/users/change-password
│   │   ├── current-user  # GET /api/users/current-user
│   │   ├── update-account # POST /api/users/update-account-details
│   │   └── update-profile # POST /api/users/update-profile-picture
│   │
│   ├── messages/          # Message-related endpoints
│   │   ├── /             # POST /api/messages/ (send message)
│   │   ├── property/:propertyId/user/:otherUserId # GET messages
│   │   ├── conversations # GET /api/messages/conversations
│   │   ├── upload       # POST /api/messages/upload
│   │   └── :messageId   # DELETE /api/messages/:messageId
│   │
│   └── properties/       # Property-related endpoints
│       ├── /            # POST/GET /api/properties/
│       ├── :id          # GET/PATCH/DELETE /api/properties/:id
│       └── seller/:sellerId # GET /api/properties/seller/:sellerId
│
├── config/                # Configuration files
│   ├── cloudinary.js     # Cloudinary setup
│   └── db.js             # Database connection
│
├── controllers/          # Business logic
│   ├── user.controllers.js
│   │   ├── registerUser()
│   │   ├── loginUser()
│   │   ├── logoutUser()
│   │   ├── refreshAccessToken()
│   │   ├── changeCurrentPassword()
│   │   ├── getCurrentUser()
│   │   ├── updateAccountDetails()
│   │   └── updateProfilePicture()
│   │
│   ├── message.controllers.js
│   │   ├── sendMessage()
│   │   ├── getMessages()
│   │   ├── getConversations()
│   │   ├── uploadAttachment()
│   │   └── deleteMessage()
│   │
│   └── property.controllers.js
│       ├── createProperty()
│       ├── getAllProperties()
│       ├── getPropertyById()
│       ├── updateProperty()
│       ├── deleteProperty()
│       └── getPropertiesBySeller()
│
├── middlewares/          # Custom middleware
│   ├── JWT_Verify.js     # JWT authentication
│   └── multer.middleware.js  # File upload handling
│
├── models/               # Database schemas
│   ├── user.model.js     # User schema
│   ├── property.model.js # Property schema
│   └── message.model.js  # Message schema
│
└── utils/                # Helper functions
    ├── ApiError.js       # Error handling
    ├── ApiResponse.js    # Response handling
    └── asyncHandler.js   # Async handler
```

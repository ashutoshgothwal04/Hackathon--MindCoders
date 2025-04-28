# NestQuest – Hackathon Project Documentation

## 🧠 Hackathon

**MindCoder Hackathon 2025**

## 🧑‍💻 Team Members

| Name             | Role               |
| ---------------- | ------------------ |
| Anamika Saini    | Team Leader        |
| Adarsh Sharma    | Backend Developer  |
| Ashutosh Gothwal | Mern Developer     |
| Rishi Tiwari     | Frontend Developer |

## 🚀 Project Overview

NestQuest is a platform where users can **search**, **list**, and **rent rest houses** without any **middlemen or brokers**. It aims to create a transparent, community-driven network for short and long-term stays, ensuring trust, affordability, and ease of use.

## **🖊️ Installation**

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm i --legacy-peer-deps
```

3. Create `.env.local` file with the following keys:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api/v1
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y2FwYWJsZS1hYXJkdmFyay0zMi5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_bRawmk2nhx0MsFCIE4WsEG7Ef0Q1lp4myyrw0WGGwS
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install stripe
```

3. Create `.env` file with the following keys:

```env
MONGO_URI=mongodb://localhost:27017/mindcoders
ACCESS_TOKEN_SECRET=<generate_secure_random_string>
REFRESH_TOKEN_SECRET=<generate_secure_random_string>
FRONTEND_URL=http://localhost:3000
PORT=5000
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

4. Start the backend server:

```bash
npm run dev
```

## 🎯 Problem Statement

Finding rest houses often involves hidden charges and unreliable middlemen. There's a lack of a **trustworthy peer-to-peer rental system** where users can connect directly with house owners.

## 🌟 Solution

Nestify eliminates the broker by connecting **house owners and seekers directly** on a single platform. With real-time listings, secure user verification, and simple chat integration, it ensures a smooth rental process.

## 🛠️ Tech Stack

| Layer          | Technology               |
| -------------- | ------------------------ |
| Frontend       | Next.js 13+ (App Router) |
| Backend        | Node.js, Express.js      |
| Database       | MongoDB, Cloudinary      |
| Authentication | JWT, Clerk               |
| Hosting        | Vercel                   |

## 🖼️ Features

* 🔍 **Search Listings** – Users can search rest houses by location, price, and date.
* 🏡 **Post Your Rest House** – Owners can easily list their property with images and details.
* 🧑‍💻 **Login & Authentication** – Secure login system with JWT and Clerk.
* 💬 **Direct Chat / Contact** – Owners and renters can communicate directly.
* 📷 **Image Upload** – Upload multiple images for each rest house using Cloudinary.
* 🗺️ **Map Integration** – Locate rest houses on a map.
* 📅 **Booking Calendar** – Users can view availability.

## 📦 Project Architecture

### Frontend Architecture

- Next.js 13+ with App Router
- Client-side components marked with "use client" directive
- Server components for static content and metadata
- Axios for API calls with proper CORS configuration
- Context API for state management

### Backend Architecture

- Express.js with CORS enabled
- MongoDB for database
- JWT for authentication
- Cloudinary for image storage
- Rate limiting and security middleware

## 🔐 Authentication Flow

1. User Registration:

   - Frontend sends registration data to `/api/v1/users/register`
   - Backend validates and creates user
   - JWT tokens are generated and sent in cookies
2. User Login:

   - Frontend sends credentials to `/api/v1/users/login`
   - Backend validates and returns JWT tokens
   - Tokens are stored in secure HTTP-only cookies
3. Protected Routes:

   - Frontend includes JWT in Authorization header
   - Backend middleware validates token
   - Access granted/denied based on token validity

## 🛣️ API Routes Documentation

### Backend Routes

#### User Routes

| Method | Endpoint                        | Description              | Authentication Required |
| ------ | ------------------------------- | ------------------------ | ----------------------- |
| POST   | `/api/v1/users/register`      | Register a new user      | No                      |
| POST   | `/api/v1/users/login`         | Login user               | No                      |
| POST   | `/api/v1/users/logout`        | Logout user              | Yes                     |
| POST   | `/api/v1/users/refresh-token` | Refresh access token     | No                      |
| GET    | `/api/v1/users/current-user`  | Get current user details | Yes                     |

#### Property Routes

| Method | Endpoint                   | Description                     | Authentication Required |
| ------ | -------------------------- | ------------------------------- | ----------------------- |
| POST   | `/api/v1/properties/`    | Create new property listing     | Yes                     |
| GET    | `/api/v1/properties/`    | Get all properties with filters | No                      |
| GET    | `/api/v1/properties/:id` | Get property by ID              | No                      |
| PATCH  | `/api/v1/properties/:id` | Update property details         | Yes                     |
| DELETE | `/api/v1/properties/:id` | Delete property                 | Yes                     |

## 📁 Project Folder Structure

### Frontend Structure

```
frontend/
├── app/                     # Next.js App Router
│   ├── (auth)/             # Authentication pages
│   │   ├── login/         # Login page
│   │   └── signup/        # Signup page
│   ├── dashboard/          # User dashboard
│   ├── properties/         # Property listings
│   └── ...                 # Other pages
│
├── components/             # Reusable UI Components
│   ├── ui/                # Common UI components
│   └── ...                # Other components
│
├── context/               # React Context
│   └── AuthContext.tsx    # Authentication context
│
├── lib/                   # Utility functions
│   └── auth.ts           # Authentication utilities
│
└── public/                # Static assets
```

### Backend Structure

```
backend/
├── routes/                # API Routes
│   ├── user.routes.js    # User routes
│   └── property.routes.js # Property routes
│
├── controllers/          # Business logic
│   ├── user.controller.js
│   └── property.controller.js
│
├── models/               # Database schemas
│   ├── user.model.js
│   └── property.model.js
│
├── middlewares/          # Custom middleware
│   └── auth.middleware.js
│
└── services/             # Services
    └── ConnectDB.js      # Database connection
```

## 👨‍🔧 Challenges Faced

* CORS configuration between frontend and backend
* JWT token management and refresh flow
* Image upload and storage with Cloudinary
* State management across the application

## ✅ What We Achieved

* Full-stack application with proper authentication
* Secure API endpoints with CORS protection
* Real-time property listings and search
* User-friendly interface for both renters and landlords

## 📈 Future Scope

* Add payment gateway integration
* Implement real-time chat functionality
* Add property reviews and ratings
* Implement AI-based property recommendations

## Payment Integration with Stripe

This project includes payment functionality using Stripe for both card and UPI payments.

### Backend Setup

1. Install the required dependencies:
   ```bash
   cd backend
   npm install stripe
   ```

2. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGO_URI=your_mongodb_uri
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
   ```

3. Get your Stripe API keys:
   - Sign up for a Stripe account at https://stripe.com
   - Get your API keys from the Stripe Dashboard
   - For testing, use the test keys

4. Set up Stripe webhooks:
   - In your Stripe Dashboard, go to Developers > Webhooks
   - Add an endpoint: `https://your-domain.com/api/v1/payments/webhook`
   - Select events to listen for: `payment_intent.succeeded` and `payment_intent.payment_failed`
   - Get the webhook signing secret and add it to your `.env` file

### Frontend Setup

1. Install the required dependencies:
   ```bash
   cd frontend
   npm install @stripe/stripe-js @stripe/react-stripe-js
   ```

2. Create a `.env.local` file in the frontend directory with the following variables:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

3. Get your Stripe publishable key from the Stripe Dashboard and add it to the `.env.local` file.

### Testing Payments

1. For card payments, use Stripe's test card numbers:
   - Success: 4242 4242 4242 4242
   - Decline: 4000 0000 0000 0002
   - Expiry: Any future date
   - CVC: Any 3 digits
   - ZIP: Any 5 digits

2. For UPI testing, use the test mode in your Stripe Dashboard.

### Payment Flow

1. **Card Payments**:
   - User enters amount and card details
   - Backend creates a payment intent
   - Frontend confirms the payment with Stripe
   - Webhook updates the payment status

2. **UPI Payments**:
   - User enters amount
   - Backend creates a payment link
   - User is redirected to the payment link
   - Webhook updates the payment status

### Payment History

Users can view their payment history at `/payment/history`.

## Other Project Features

[Add other project features here]

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./services/ConnectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

// Create __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
import userRoutes from "./routes/user.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import messageRoutes from "./routes/message.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import { verifyJWT } from "./middlewares/JWT_Verify.js";

// Load environment variables
dotenv.config();

// Validate required environment variables
const requiredEnvVars = [
  'MONGO_URI',  // This is the primary one used in ConnectDB.js
  'ACCESS_TOKEN_SECRET',
  'REFRESH_TOKEN_SECRET',
  'JWT_SECRET'
];

// Check for missing variables
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  console.error('Please create a .env file with these variables');
  process.exit(1);
}

// Set default values for optional variables
if (!process.env.MONGODB_URI) {
  process.env.MONGODB_URI = process.env.MONGO_URI;
}

if (!process.env.JWT_EXPIRY) {
  process.env.JWT_EXPIRY = '1d';
}

if (!process.env.ACCESS_TOKEN_EXPIRY) {
  process.env.ACCESS_TOKEN_EXPIRY = '1d';
}

if (!process.env.REFRESH_TOKEN_EXPIRY) {
  process.env.REFRESH_TOKEN_EXPIRY = '7d';
}

if (!process.env.CORS_ORIGIN) {
  process.env.CORS_ORIGIN = 'http://localhost:3000';
}

// Connect to database
try {
  await connectDB();
} catch (error) {
  console.error("Failed to connect to database:", error);
  process.exit(1);
}

const app = express();

// Security Middleware
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginOpenerPolicy: { policy: "unsafe-none" }
}));

// CORS configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  exposedHeaders: ["Set-Cookie"],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later."
});
app.use(limiter);

// Logger
app.use(morgan("dev"));

// Body Parsers
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/properties", verifyJWT, propertyRoutes);
app.use("/api/v1/messages", verifyJWT, messageRoutes);
app.use("/api/v1/upload", uploadRoutes);

// Serve uploaded files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected"
  });
});

// 404 Handler
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

const PORT = process.env.PORT || 5000;

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
  console.log(`CORS Origin: ${process.env.CORS_ORIGIN}`);
  console.log(`MongoDB URI: ${process.env.MONGO_URI.substring(0, 20)}...`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection! Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception! Shutting down...");
  console.error(err.name, err.message);
  process.exit(1);
});
// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./services/ConnectDB.js";
// import cookieParser from "cookie-parser";
// import cors from 'cors'

// //Routes-->

// import userRoutes from "./routes/user.routes.js";
// import propertyRoutes from "./routes/property.routes.js";
// import messageRoutes from "./routes/message.routes.js";


// dotenv.config();
// connectDB();

// const app = express();

// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//   origin: 'http://localhost:3000', 
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],     
//   credentials: true                
// }));

// //Routes-->

// app.use("/api/v1/users", userRoutes);
// app.use("/api/v1/properties", propertyRoutes);
// app.use("/api/v1/messages", messageRoutes);


// app.get("/", (req, res) => {
//   res.send("Hello World");
// });


// app.listen(process.env.PORT, () => {
//   console.log(`Server is running on port ${process.env.PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./services/ConnectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import morgan from "morgan";

// Routes
import userRoutes from "./routes/user.routes.js";
import propertyRoutes from "./routes/property.routes.js";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();
connectDB();

const app = express();

// Security Middleware
app.use(helmet());
app.use(
  cors({
    // origin: process.env.FRONTEND_URL || "http://localhost:3000",
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
  })
);

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
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
app.use("/api/v1/properties", propertyRoutes);
app.use("/api/v1/messages", messageRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
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

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || "development"} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection! Shutting down...");
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
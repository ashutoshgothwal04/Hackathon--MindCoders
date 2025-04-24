import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 8000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRY: process.env.JWT_EXPIRY || "1d",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "http://localhost:5173",
  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    API_KEY: process.env.CLOUDINARY_API_KEY,
    API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
  RATE_LIMIT: {
    WINDOW_MS: 15 * 60 * 1000, // 15 minutes
    MAX_REQUESTS: 100, // limit each IP to 100 requests per windowMs
  },
};

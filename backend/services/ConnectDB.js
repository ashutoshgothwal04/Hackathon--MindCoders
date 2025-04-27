import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Use MONGODB_URI if available, otherwise fall back to MONGO_URI
    const mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
    
    if (!mongoUri) {
      throw new Error("MongoDB connection string is missing. Please set MONGO_URI or MONGODB_URI in your .env file.");
    }
    
    await mongoose.connect(mongoUri);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

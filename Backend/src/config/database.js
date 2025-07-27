import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb = async () => {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error('MONGO_URL environment variable is not defined');
    }
    
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 30000, // 30 seconds
      socketTimeoutMS: 45000, // 45 seconds
      bufferMaxEntries: 0, // Disable mongoose buffering
      maxPoolSize: 10, // Maintain up to 10 socket connections
    });
    
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Failed to connect to database:", error.message);
    process.exit(1); // Exit if database connection fails
  }
};

export { connectDb };

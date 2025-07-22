import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDb = async () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("mongodb is connected succesfully"))
    .catch((e) => {
      console.log("failed to connect database", e);
    });
};

export { connectDb };

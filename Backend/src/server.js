import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/database.js";
import { router } from "./routes/auth-router.js";
import cookieParser from "cookie-parser";
import cors from "cors";
dotenv.config();
const app = express();


//cors
app.use(cors({
  origin : process.env.NODE_ENV === "production" ? "https://passwordmanager-indol.vercel.app" : "http://localhost:5173",
  credentials : true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
  optionsSuccessStatus: 200
}));


// middlewares
app.use(express.json());
app.use(cookieParser());

// database
await connectDb();

// routers
app.use("/passwordManager", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

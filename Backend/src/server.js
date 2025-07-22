import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/database.js";
import { router } from "./routes/auth-router.js";
import cookieParser from "cookie-parser";
dotenv.config();
const app = express();

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

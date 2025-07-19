import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
// import userRoutes from "./routes/user.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import feedbackRoutes from "./routes/feedback.routes.js";

dotenv.config();

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
})();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(cors());
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/user", userRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/feedback", feedbackRoutes);
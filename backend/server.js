import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import leadRoutes from "./routes/leadRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import noticeRoutes from "./routes/noticeRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/notices", noticeRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err.message));

app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 5000;
app.get("/api/test", (req, res) => res.send("test ok"));
console.log("notice route mounted at /api/notices");


app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


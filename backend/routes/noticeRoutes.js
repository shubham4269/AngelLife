// backend/routes/noticeRoutes.js
import express from "express";
import Notice from "../models/Notice.js";
import { getNotices, addNotice } from "../controllers/noticecontroller.js";


const router = express.Router();

// ➕ Add Notice
router.post("/", async (req, res) => {
    console.log("📥 New notice data:", req.body); 
  try {
    const { title } = req.body;
    const notice = await Notice.create({ title });
    res.status(201).json(notice);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📜 Get all Notices
router.get("/", async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✏️ Update Notice
router.put("/:id", async (req, res) => {
  try {
    const updated = await Notice.findByIdAndUpdate(
      req.params.id,
      { title: req.body.title },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ❌ Delete Notice
router.delete("/:id", async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: "Notice deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;



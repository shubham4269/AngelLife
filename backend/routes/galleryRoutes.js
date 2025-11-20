// backend/routes/galleryRoutes.js
import express from "express";
import Gallery from "../models/Gallery.js";

const router = express.Router();

// ➕ Add Gallery Item
router.post("/", async (req, res) => {
  console.log("📥 New gallery data:", req.body); 
  try {
    const { title, imageUrl, description, category } = req.body;
    const galleryItem = await Gallery.create({ title, imageUrl, description, category });
    res.status(201).json(galleryItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 📜 Get all Gallery Items
router.get("/", async (req, res) => {
  try {
    const galleryItems = await Gallery.find().sort({ createdAt: -1 });
    res.json(galleryItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✏️ Update Gallery Item
router.put("/:id", async (req, res) => {
  try {
    const { title, imageUrl, description, category } = req.body;
    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      { title, imageUrl, description, category },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ❌ Delete Gallery Item
router.delete("/:id", async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Gallery item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
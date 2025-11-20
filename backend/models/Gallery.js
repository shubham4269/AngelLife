// backend/models/Gallery.js
import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    description: { type: String, default: "" },
    category: { type: String, default: "general" }, // e.g., "courses", "events", "facilities", "general"
  },
  { timestamps: true }
);

const Gallery = mongoose.model("Gallery", gallerySchema);
export default Gallery;
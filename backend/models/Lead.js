
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, default: "" },
  mobile: { type: String, required: true },
  course: { type: String, default: "" },
  city: { type: String, default: "" },
  consent: { type: Boolean, default: true },
  status: {
    type: String,
    enum: ["New", "Attempted", "Converted", "Closed"],
    default: "New"
  },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model("Lead", leadSchema);

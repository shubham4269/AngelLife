
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
  programType: { type: String, default: "" },
  programId: { type: String, default: "" },
  centreId: { type: String, default: "" },
  intakeMonth: { type: String, default: "" },
  intakeYear: { type: String, default: "" },
  createdAt: { type: Date, default: Date.now },
});

// Force recreation of the model to clear any cache
if (mongoose.models.Lead) {
  delete mongoose.models.Lead;
}

export default mongoose.model("Lead", leadSchema);

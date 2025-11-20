// backend/routes/leadRoutes.js
import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

// create lead
router.post("/", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({ message: "Lead saved", lead });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// get all leads (admin)
router.get("/", async (req, res) => {
  try {
    // Explicitly select all fields including the new ones
    const leads = await Lead.find({}, {
      name: 1,
      email: 1,
      mobile: 1,
      course: 1,
      city: 1,
      consent: 1,
      status: 1,
      programType: 1,
      programId: 1,
      centreId: 1,
      intakeMonth: 1,
      intakeYear: 1,
      createdAt: 1
    }).sort({ createdAt: -1 });
    
    res.json(leads);
  } catch (err) {
    console.error("Error in leads route:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// update lead (status or other fields)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;

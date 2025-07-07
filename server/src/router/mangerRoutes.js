const express = require("express");
const Complaint = require("../models/complaintModal");
const verifyToken = require("../middlewares/authMiddleware");
const authorizeRole = require("../middlewares/roleMiddleware");
const router = express.Router();

// Manager fetches complaints by category
router.get("/:category", async (req, res) => {
  try {
    const category = req.params.category;
    const complaints = await Complaint.find({
      category: { $regex: new RegExp(`^${category}$`, "i") }
    });
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ message: "Error fetching complaints" });
  }
});

module.exports = router;
const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  category: { type: String, required: true }, // e.g., "plumbing"
  message: String,
  roomNo: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Complaint", complaintSchema);
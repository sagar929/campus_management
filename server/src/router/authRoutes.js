const express =  require("express");
const {register,login} = require("../controller/authControllers.js");
const router  =  express.Router();


router.post("/register",register);
router.post("/login",login);
router.post("/complaint", async (req, res) => {
  try {
    const Complaint = require("../models/complaintModal.js");
    const { name, email, category, message,roomNo } = req.body;
    const complaint = new Complaint({ name, email, category, message ,  roomNo });
    await complaint.save();
    res.status(201).json({ message: "Complaint submitted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to submit complaint" });
  }
});
router.delete("/complaint/:id", async (req, res) => {
  try {
    const Complaint = require("../models/complaintModal.js");
    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: "Complaint deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete complaint" });
  }
});


module.exports =  router;
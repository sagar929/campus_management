const express = require("express");
const verifyToken = require("../middlewares/authMiddleware")
const authorizeRole =  require("../middlewares/roleMiddleware.js")
const router = express.Router();

// Only admin will access this route
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
    res.json({ message: "welcome admin" });
});

// Both admin and manager will access this route
router.get("/manager", verifyToken, authorizeRole("admin","manager"), (req, res) => {
    res.json({ message: "welcome manager" });
});

// All can access this route
router.get("/user", verifyToken, authorizeRole("admin","manager", "user") , (req, res) => {
    res.json({ message: "welcome user" });
    
});

module.exports = router;


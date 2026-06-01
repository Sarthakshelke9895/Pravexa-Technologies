const express = require("express");
const jwt = require("jsonwebtoken");
const requireAdmin = require("../middleware/auth");
const Contact = require("../models/Contact");
const InternshipApplication = require("../models/InternshipApplication");
const ProjectRequest = require("../models/ProjectRequest");

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!process.env.JWT_SECRET || !process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
    return res.status(500).json({ message: "Admin authentication is not configured." });
  }

  const validEmail = email === process.env.ADMIN_EMAIL;
  const validPassword = password === process.env.ADMIN_PASSWORD;

  if (!validEmail || !validPassword) {
    return res.status(401).json({ message: "Invalid admin credentials." });
  }

  const token = jwt.sign({ email, role: "admin" }, process.env.JWT_SECRET, { expiresIn: "8h" });
  return res.status(200).json({ token });
});

router.get("/contacts", requireAdmin, async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: contacts });
  } catch (error) {
    return next(error);
  }
});

router.get("/internships", requireAdmin, async (req, res, next) => {
  try {
    const applications = await InternshipApplication.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: applications });
  } catch (error) {
    return next(error);
  }
});

router.get("/project-requests", requireAdmin, async (req, res, next) => {
  try {
    const projectRequests = await ProjectRequest.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: projectRequests });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

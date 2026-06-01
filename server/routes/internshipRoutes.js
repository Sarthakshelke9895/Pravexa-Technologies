const express = require("express");
const InternshipApplication = require("../models/InternshipApplication");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", upload.single("resume"), async (req, res, next) => {
  try {
    const { name, email, phone, college, skills, linkedIn } = req.body;
    if (!name || !email || !phone || !college || !skills || !req.file) {
      return res.status(400).json({ message: "Please complete all required fields and upload a resume." });
    }

    const application = await InternshipApplication.create({
      name,
      email,
      phone,
      college,
      skills,
      linkedIn,
      resumePath: `/uploads/${req.file.filename}`
    });

    return res.status(201).json({ message: "Internship application received.", data: application });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

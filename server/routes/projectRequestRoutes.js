const express = require("express");
const ProjectRequest = require("../models/ProjectRequest");
const upload = require("../middleware/upload");

const router = express.Router();

router.post("/", upload.single("projectFile"), async (req, res, next) => {
  try {
    const { companyName, clientName, email, phone, budget, requirements } = req.body;
    if (!companyName || !clientName || !email || !phone || !budget || !requirements) {
      return res.status(400).json({ message: "Please complete all required fields." });
    }

    const projectRequest = await ProjectRequest.create({
      companyName,
      clientName,
      email,
      phone,
      budget,
      requirements,
      filePath: req.file ? `/uploads/${req.file.filename}` : undefined
    });

    return res.status(201).json({ message: "Project request received.", data: projectRequest });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

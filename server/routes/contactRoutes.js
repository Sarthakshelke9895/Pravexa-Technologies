const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;
    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({ message: "Please complete all required fields." });
    }

    const contact = await Contact.create({ name, email, phone, service, budget, message });
    return res.status(201).json({ message: "Contact submission received.", data: contact });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;

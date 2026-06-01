const mongoose = require("mongoose");

const internshipApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    college: { type: String, required: true, trim: true },
    skills: { type: String, required: true, trim: true },
    linkedIn: { type: String, trim: true },
    resumePath: { type: String, required: true },
    status: { type: String, enum: ["new", "shortlisted", "rejected"], default: "new" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("InternshipApplication", internshipApplicationSchema);

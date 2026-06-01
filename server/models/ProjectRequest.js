const mongoose = require("mongoose");

const projectRequestSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true, trim: true },
    clientName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    budget: { type: String, required: true, trim: true },
    requirements: { type: String, required: true, trim: true },
    filePath: { type: String },
    status: { type: String, enum: ["new", "quoted", "closed"], default: "new" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProjectRequest", projectRequestSchema);

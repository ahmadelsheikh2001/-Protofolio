const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  name: { type: String, trim: true },
  name_ar: { type: String, trim: true },
  email: { type: String, trim: true },
  name: { type: String, trim: true },
  resume: { type: String, trim: true },
  resume_ar: { type: String, trim: true },
  behance: { type: String, trim: true },
  drible: { type: String, trim: true },
  linkedin: { type: String, trim: true },
  medem: { type: String, trim: true },
  instagram: { type: String, trim: true },
  facebook: { type: String, trim: true },
  twitter: { type: String, trim: true },
});

const Resume = mongoose.model("Resume", resumeSchema);
module.exports = Resume;

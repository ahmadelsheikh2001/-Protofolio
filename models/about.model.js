const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  title: { type: String, trim: true },
  title_ar: { type: String, trim: true },
  job: { type: String, trim: true },
  job_ar: { type: String, trim: true },
  job_link: { type: String, trim: true },
  company: { type: String,  trim: true },
  company_ar: { type: String,  trim: true },
  company_link: { type: String,  trim: true },
  company_link_ar: { type: String,  trim: true },
  intro: { type: String, trim: true },
  intro_ar: { type: String, trim: true },
  image:{type: String  , trim:true}

});

const About = mongoose.model("About", AboutSchema);
module.exports = About;
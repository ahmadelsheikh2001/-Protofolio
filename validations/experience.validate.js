const Joi = require("joi");

const experienceValidation = {
  id: Joi.string().trim(),
  _id: Joi.string().trim(),
  logo: Joi.string().trim(),
  name: Joi.string().trim(),
  name_ar: Joi.string().trim(),
  company: Joi.string().trim(),
  company_ar: Joi.string().trim(),
  link: Joi.string().trim(),
  link_ar: Joi.string().trim(),
  job: Joi.string().trim(),
  job_ar: Joi.string().trim(),
  start: Joi.string().trim(),
  end: Joi.string().trim(),
  location: Joi.string().trim(),
  location_ar: Joi.string().trim(),
  description: Joi.string().trim(),
  collage: Joi.string().trim(),
  collage_ar: Joi.string().trim(),
  certificate: Joi.string().trim(),
  certificate_ar: Joi.string().trim(),
  type: Joi.string().valid("experience", "certificate", "education", "program", "language","skills"),
};

const addExperienceSchema = Joi.object().keys(experienceValidation);

module.exports = {
  addExperienceSchema,
};

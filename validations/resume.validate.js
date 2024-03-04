const Joi = require("joi");

const ResumeValidation = {
  id: Joi.string().trim(),
  _id: Joi.string().trim(),
  name: Joi.string().trim(),
  name_ar: Joi.string().trim(),
  resume: Joi.string().trim(),
  resume_ar: Joi.string().trim(),
  behance: Joi.string().trim(),
  drible: Joi.string().trim(),
  linkedin: Joi.string().trim(),
  medem: Joi.string().trim(),
  instagram: Joi.string().trim(),
  facebook: Joi.string().trim(),
  twitter: Joi.string().trim(),
};

const addResumeSchema = Joi.object().keys(ResumeValidation);

module.exports = {
  addResumeSchema,
};

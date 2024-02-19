const Joi = require("joi");

module.exports = {
  addExperienceSchema: Joi.object().keys({
    logo: Joi.string().trim(),
    company: Joi.string().trim().required().messages({
      "string.required": "Company name is required",
    }),
    company_ar: Joi.string().trim().required().messages({
      "string.required": "Company name (Arabic) is required",
    }),
    link: Joi.string().trim(),
    link_ar: Joi.string().trim(),
  }),
};

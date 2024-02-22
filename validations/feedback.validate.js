const Joi = require("joi");

module.exports = {
  addFeedbackSchema: Joi.object().keys({
    name: Joi.string().min(3).max(30).required().messages({
      "string.required": "name is required",
    }),
    message: Joi.string().required().messages({
      "string.required": "name is required",
    }),
    job: Joi.string().required().messages({
      "string.required": "name is required",
    }),
    date: Joi.string().min(3).max(30).messages({
      "string.required": "name is required",
    }),
    reactions: Joi.array().items(Joi.string().trim()).messages({
      "array.items.string.required": "Each 'need' reactions is required",
    }),
    status: Joi.string()
      .valid("pending", "approved", "rejected")
      .min(3)
      .max(30)
      .messages({
        "string.required": "status is required",
      }),
  }),
};

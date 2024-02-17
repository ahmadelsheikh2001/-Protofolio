const Joi = require("joi");

module.exports = {
  addDesignTypeSchema: Joi.object().keys({
    name: Joi.string().min(3).max(30).required().messages({
      "string.required": "name is required",
    }),
  }),
};

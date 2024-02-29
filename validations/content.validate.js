const Joi = require("joi");

module.exports = {
  addContentSchema: Joi.object().keys({
    name: Joi.string().trim().required().messages({
      "string.required": "Name is required",
    }),
    description: Joi.string().trim(),
    designType: Joi.string().trim().messages({
      "string.base": "DesignType must be a valid ObjectId",
    }),
    type: Joi.string().required().valid("design", "case"),
    visible: Joi.boolean().default(false),
    wfile: Joi.string().trim(),
    bfile: Joi.string().trim(),
    type: Joi.string().trim(),
    visible: Joi.string().trim(),
    date: Joi.string().trim(),
    likes: Joi.number().min(0),
    behanceLink: Joi.string().trim(),
    deibbleLink: Joi.string().trim(),
    themeForest: Joi.string().trim(),
    meduimLink: Joi.string().trim(),
    image: Joi.string().trim(),
    // meduimLink: Joi.string().trim(),
  }),
};

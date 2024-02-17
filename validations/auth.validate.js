const Joi = require("joi");
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

module.exports = {
  registerationSchema: Joi.object().keys({
    email: Joi.string().email().min(3).max(30).required().messages({
      "string.required": "email is required",
      "string.email": "Invalid Email",
    }),
    password: Joi.string().regex(passwordExp).required().messages({
      "string.required": "password is required",
    }),
  }),
  loginSchema: Joi.object().keys({
    email: Joi.string().email().min(3).max(30).required().messages({
      "string.required": "email is required",
      "string.email": "Invalid Email",
    }),
    password: Joi.string().required().messages({
      "string.required": "password is required",
    }),
  }),
};

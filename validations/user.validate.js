const Joi = require("joi");
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

module.exports = {
  updateSchema: Joi.object().keys({
    email: Joi.string().email().min(3).max(30).required().messages({
      "string.required": "email is required",
      "string.email": "Invalid Email",
    }),
  }),
  changePasswordSchema: Joi.object().keys({
    oldPassword: Joi.string().regex(passwordExp).required().messages({
      "string.required": "password is required",
    }),
    newPassword: Joi.string().regex(passwordExp).required().messages({
      "string.required": "newPassword is required",
    }),
    confirmPassword: Joi.string().regex(passwordExp).messages({
      "string.required": "confirmPassword is required",
    }),
  }),
};

const Joi = require("joi");
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

module.exports = {
  updateSchema: Joi.object().keys({
    email: Joi.string().email().min(3).max(30).messages({
      "string.required": "email is required",
      "string.email": "Invalid Email",
    }),
    password: Joi.string(),
    image: Joi.string(),
    newPassword: Joi.string(),
    name: Joi.string().min(3).max(30).messages({
      "string.required": "name is required",
    }),
    job: Joi.string().min(3).max(30).messages({
      "string.required": "job is required",
    }),
    _id: Joi.string().min(3).max(30).messages({
      "string.required": "job is required",
    }),
    __v: Joi.number(),
  }),
  changePasswordSchema: Joi.object().keys({
    oldPassword: Joi.string().regex(passwordExp).messages({
      "string.required": "password is required",
    }),
    newPassword: Joi.string().regex(passwordExp).messages({
      "string.required": "newPassword is required",
    }),
    confirmPassword: Joi.string().regex(passwordExp).messages({
      "string.required": "confirmPassword is required",
    }),
  }),
};

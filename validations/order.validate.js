const Joi = require("joi");

module.exports = {
  addOrderSchema: Joi.object().keys({
    name: Joi.string().required().trim().min(3).max(30).messages({
      "string.required": "Name is required",
      "string.min": "Name must be at least {#limit} characters long",
      "string.max": "Name must not exceed {#limit} characters",
    }),
    about: Joi.string().required().trim().min(3).max(100).messages({
      "string.required": "about is required",
      "string.min": "about must be at least {#limit} characters long",
      "string.max": "about must not exceed {#limit} characters",
    }),
    email: Joi.string().email().required().trim().messages({
      "string.required": "Email is required",
      "string.email": "Email must be a valid email address",
    }),
    date: Joi.string().trim().min(3).max(30).messages({
      "string.required": "Date is required",
      "string.min": "Date must be at least {#limit} characters long",
      "string.max": "Date must not exceed {#limit} characters",
    }),
    period: Joi.string().required().trim().min(3).max(30).messages({
      "string.required": "Period is required",
      "string.min": "Period must be at least {#limit} characters long",
      "string.max": "Period must not exceed {#limit} characters",
    }),
    balance: Joi.string().required().trim().min(3).max(30).messages({
      "string.required": "Balance is required",
      "string.min": "Balance must be at least {#limit} characters long",
      "string.max": "Balance must not exceed {#limit} characters",
    }),
    file: Joi.string().trim().allow("").messages({
      "string.trim": "File path should not have leading or trailing spaces",
    }),
    need: Joi.array().items(Joi.string().required().trim()).messages({
      "array.items.string.required": "Each 'need' item is required",
    }),
    status: Joi.string().valid("pending", "approved", "rejected").trim().messages({
      "string.valid": "Status must be one of 'pending', 'approved', 'rejected'",
    }),
  }),
  // You can add more validation schemas for other CRUD operations as needed
};

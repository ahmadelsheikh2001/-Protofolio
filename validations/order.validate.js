const Joi = require("joi");

module.exports = {
  addOrderSchema: Joi.object().keys({
    name: Joi.string().min(3).max(30).required().messages({
      "string.required": "name is required",
    }),
    email: Joi.string().email().required().messages({
      "string.required": "email is required",
      "string.email": "email must be a valid email address",
    }),
    date: Joi.string().min(3).max(30).required().messages({
      "string.required": "date is required",
    }),
    period: Joi.string().min(3).max(30).required().messages({
      "string.required": "period is required",
    }),
    balance: Joi.string().min(3).max(30).required().messages({
      "string.required": "balance is required",
    }),
    status: Joi.string().valid("pending", "approved", "rejected").messages({
      "string.valid": "status must be one of 'pending', 'approved', 'rejected'",
    }),
  }),
  // You can add more validation schemas for other CRUD operations as needed
};

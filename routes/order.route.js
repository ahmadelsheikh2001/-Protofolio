const express = require("express");
const router = express.Router();
const { authorizeUser } = require("../services/authenticate.service");
const ordersCtl = require("../controllers/order.control");
const { validateParamsId, validate } = require("../services/validate.service");
const { addOrderSchema } = require("../validations/order.validate");

router
  .route("/")
  .post(authorizeUser, validate(addOrderSchema), ordersCtl.addOrder)
  .get(ordersCtl.getOrders);

router
  .route("/:id")
  .patch(authorizeUser, validateParamsId, ordersCtl.updateOrder)
  .delete(authorizeUser, ordersCtl.deleteOrder);

module.exports = router;

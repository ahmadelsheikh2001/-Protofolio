const asyncHandler = require("express-async-handler");
const Orders = require("../models/order.model");

const ordersCtl = {
  getOrders: asyncHandler(async (req, res) => {
    let data = await Orders.find();
    res.send(data);
  }),
  deleteOrder: asyncHandler(async (req, res) => {
    let id = req.params.id;

    await Orders.findByIdAndDelete(id);
    res.send();
  }),
  updateOrder: asyncHandler(async (req, res) => {
    let newData = await Orders.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  addOrder: asyncHandler(async (req, res) => {
    let order = new Orders(req.body);
    await order.save();
    res.send(order);
  }),
};

module.exports = ordersCtl;

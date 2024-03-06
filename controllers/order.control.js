const asyncHandler = require("express-async-handler");
const Orders = require("../models/order.model");
const { format } = require("date-fns");
const notificationCtl = require("./notification.control");
const { getIo } = require("../services/socket");

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
    try {
      let file;
      if (req.file) {
        file = "/api/orders" + req.file.filename;
      }

      let updatedOrder;
      if (req.file) {
        updatedOrder = await Orders.findByIdAndUpdate(
          req.params.id,
          { ...req.body, file },
          { new: true }
        );
      } else {
        console.log(req.body);
        updatedOrder = await Orders.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
        });
      }
      if (!updatedOrder) {
        return res.status(404).send({
          message: "Orders not found",
        });
      }

      res.status(200).send({
        message: "Orders updated",
        data: updatedOrder,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }),
  addOrder: asyncHandler(async (req, res) => {
    let neworder = new Orders(req.body);
    if (req.file) {
      neworder.file = "/api/orders/" + req.file.filename;
    }
    let date = format(new Date(), "yyyy-MM-dd");
    neworder.date = date;
    await neworder.save();

    const io = getIo();
    const newNotify =await notificationCtl.addNotification({
      title: "New order from " + neworder.name,
      type: "order",
    });
    io.emit("new", newNotify);

    res.status(201).send({
      message: "orders added",
    });
  }),
};

module.exports = ordersCtl;

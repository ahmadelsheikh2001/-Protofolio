const Notification = require("../models/notificaction.model");
const asyncHandler = require("express-async-handler");

const notificationCtl = {
  addNotification: asyncHandler(async (data) => {
    let newNotification = new Notification(data);
    await newNotification.save()
    return newNotification
  }),
  getAllNotifications: asyncHandler(async (req, res) => {
    let data = await Notification.find();
    res.send(data);
  }),
  deleteNotification: asyncHandler(async (req, res) => {
    await Notification.findByIdAndDelete(req.params.id);
    res.send();
  }),
  allSeenNotofication: asyncHandler(async () => {
    await Notification.updateMany({ seen: false }, { seen: true });
  }),
  deleteAllNotification: asyncHandler(async (req, res) => {
    await Notification.deleteMany();
    res.send();
  }),
};

module.exports = notificationCtl
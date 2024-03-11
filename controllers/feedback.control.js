const asyncHandler = require("express-async-handler");
const Feedback = require("../models/feedback.model");
const { format } = require("date-fns");
const notificationCtl = require("./notification.control");
const { getIo } = require("../services/socket");

const feedbackCtl = {
  getFeedabacks: asyncHandler(async (req, res) => {
    let data = await Feedback.find();
    res.send(data);
  }),
  deleteFeedback: asyncHandler(async (req, res) => {
    let id = req.params.id;

    await Feedback.findByIdAndDelete(id);
    res.send();
  }),
  updateFeedback: asyncHandler(async (req, res) => {
    let newData = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  addFeedback: asyncHandler(async (req, res) => {
    let feedback = new Feedback(req.body);
    if(req.file){
      feedback.image = "/api/feedback/" + req.file.filename;
    }
    let date = format(new Date(), "yyyy-MM-dd");
    feedback.date = date;
    await feedback.save();

    const newNotify =await notificationCtl.addNotification({
      title: feedback.name + " send a new Feedback",
      type: "feedback",
      id : feedback._id
    });

    const io = getIo();
    console.log(newNotify);
    io.emit("new", newNotify);
    res.send(feedback);
  }),
};

module.exports = feedbackCtl;

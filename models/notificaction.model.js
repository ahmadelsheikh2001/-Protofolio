const { format } = require("date-fns");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  seen: { type: Boolean, default: false },
  id: { type: mongoose.Types.ObjectId, trim: true },
  title: { type: String, required: true, trim: true },
  type: { type: String, enum: ["order", "feedback"] },
  date: { type: String, trim:true , default : format(new Date() , "yyyy-MM-dd")},
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;

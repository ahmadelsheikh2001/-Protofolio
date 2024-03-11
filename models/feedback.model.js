const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const feedbackSchema = new Schema({
  name: { type: String, required: true, trim: true },
  message: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  job: { type: String, required: true, trim: true },
  image: { type: String, trim: true },
  reactions: [{ type: String, trim: true }],
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
    trim: true,
  },
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  period: { type: String, required: true, trim: true },
  balance: { type: String, required: true, trim: true },
  about: { type: String, required: true, trim: true },
  file: { type: String,trim: true },
  need: [{ type: String, required: true, trim: true }],
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
    trim: true,
  },
});

const Orders = mongoose.model("Orders", orderSchema);
module.exports = Orders;

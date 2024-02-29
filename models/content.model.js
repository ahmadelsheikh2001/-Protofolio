const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  name: { type: String, trim: true },
  image: { type: String, trim: true },
  image_ar: { type: String, trim: true },
  description: { type: String, trim: true },
  designType: { type: String, trim: true },
  wfile: { type: String, trim: true },
  bfile: { type: String, trim: true },
  type: { type: String, enum: ["design", "case"] },
  visible: { type: Boolean, default: false },
  date: { type: String, trim: true },
  likes: { type: Number, default: 0 },
  behanceLink: { type: String, trim: true },
  deibbleLink: { type: String, trim: true },
  themeForest: { type: String, trim: true },
  meduimLink: { type: String, trim: true },
});

const Content = mongoose.model("content", contentSchema);
module.exports = Content;

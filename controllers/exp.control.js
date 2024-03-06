const asyncHandler = require("express-async-handler");
const Exp = require("../models/exp.model.js");

const ExpCtl = {
  getExp: asyncHandler(async (req, res) => {
    let data = await Exp.find();
    res.send(data);
  }),
  deleteexp: asyncHandler(async (req, res) => {
    let id = req.params.id;
    await Exp.findByIdAndDelete(id);
    res.send();
  }),
  updateexp: asyncHandler(async (req, res) => {
    let newData = await Exp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  addexp: asyncHandler(async (req, res) => {
    let exp = new Exp(req.body);
    await exp.save();
    res.send(exp);
  }),
};

module.exports = ExpCtl;

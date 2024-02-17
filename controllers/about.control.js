const asyncHandler = require("express-async-handler");
const About = require("../models/about.model");

const aboutCtl = {
  getAbout: asyncHandler(async (req, res) => {
    let data = await About.find();
    res.send(data);
  }),
  deleteAbout: asyncHandler(async (req, res) => {
    let id = req.params.id;

    await About.findByIdAndDelete(id);
    res.send();
  }),
  updateAbout: asyncHandler(async (req, res) => {
    let newData = await About.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  addAbout: asyncHandler(async (req, res) => {
    let about = new About(req.body);
    await about.save();
    res.send(about);
  }),
};

module.exports = aboutCtl;

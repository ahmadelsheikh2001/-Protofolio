const Experience = require("../models/experience.model");
const asyncHandler = require("express-async-handler");

exports.ExperienceCtl = {
  addExperience: asyncHandler(async (req, res) => {
    let newExperience = new Experience(req.body);
    if (req.file) {
      newExperience.logo = "/api/experience/" + req.file.filename;
    }
    await newExperience.save();
    res.status(201).send({
      message: "Experience added",
    });
  }),
  getExperiences: asyncHandler(async (req, res) => {
    let data =await Experience.find();
    res.send(data);
  }),
  updateExperience: asyncHandler(async (req, res) => {
    try {
      let logo;
      if (req.file) {
        logo = "/api/experience" + req.file.filename;
      }

      let updatedExperience;
      if (req.file) {
        updatedExperience = await Experience.findByIdAndUpdate(
          req.params.id,
          {  ...req.body, logo },
          { new: true }
        );
      } else {
        console.log(req.body);
        updatedExperience = await Experience.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      }
      if (!updatedExperience) {
        return res.status(404).send({
          message: "Experience not found",
        });
      }

      res.status(200).send({
        message: "Experience updated",
        data: updatedExperience,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }),
  deleteExperience: asyncHandler(async (req, res) => {
    await Experience.findByIdAndDelete(req.params.id);
    res.send({
      message: "Experience deleted !!",
    });
  }),
};

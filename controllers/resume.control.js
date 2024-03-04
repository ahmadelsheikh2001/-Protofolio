const Resume = require("../models/resume.model");
const asyncHandler = require("express-async-handler");

exports.ResumeCtl = {
  addResume: asyncHandler(async (req, res) => {
    let data =await Resume.find();
    if(data.length){
        return res.status(400).send({message:"Resume is already set"})
    }
    let newResume = new Resume(req.body);
    if (req.file) {
      newResume.resume = "/api/resume/" + req.file.filename;
    }
    await newResume.save();
    res.status(201).send({
      message: "Resume added",
    });
  }),
  getResumes: asyncHandler(async (req, res) => {
    let data =await Resume.find();
    res.send(data);
  }),
  updateResume: asyncHandler(async (req, res) => {
    try {
      let resume;
      if (req.file) {
        resume = "/api/Resume/" + req.file.filename;
      }

      let updatedResume;
      if (req.file) {
        updatedResume = await Resume.findByIdAndUpdate(
          req.params.id,
          {  ...req.body, resume },
          { new: true }
        );
      } else {
        updatedResume = await Resume.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
      }
      if (!updatedResume) {
        return res.status(404).send({
          message: "Resume not found",
        });
      }

      res.status(200).send({
        message: "Resume updated",
        data: updatedResume,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }),
  
  deleteResume: asyncHandler(async (req, res) => {
    await Resume.findByIdAndDelete(req.params.id);
    res.send({
      message: "Resume deleted !!",
    });
  }),
};

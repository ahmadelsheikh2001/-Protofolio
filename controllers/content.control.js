const Content = require("../models/content.model");
const asyncHandler = require("express-async-handler");
const { format } = require("date-fns");

const contentCtl = {
  addContent: asyncHandler(async (req, res) => {
    try {
      const { wfile, bfile, image, image_ar } = req?.files;
      const newContent = new Content(req.body);
      newContent.date = format(new Date(), "yyyy-MM-dd");

      if (wfile) newContent.wfile = "/api/content/" + wfile[0].filename;
      if (bfile) newContent.bfile = "/api/content/" + bfile[0].filename;
      if (image) newContent.image = "/api/content/" + image[0].filename;
      if (image_ar)
        newContent.image_ar = "/api/content/" + image_ar[0].filename;

      await newContent.save();

      res.status(201).send({ message: "Content created successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  }),
  getContent: asyncHandler(async (req, res) => {
    const data = await Content.find();
    res.send(data);
  }),
  deleteContent: asyncHandler(async (req, res) => {
    await Content.findByIdAndDelete(req.params.id);
    res.send();
  }),
  updateContent: asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (req.files) {
      var { wfile, bfile, image, image_ar, ...otherFields } = req?.files;
    }
    await Content.findByIdAndUpdate(id, {
      ...req.body,
      date: format(new Date(), "yyyy-MM-dd"),
    });

    let existingContent = await Content.findById(id);
    if (!existingContent) {
      return res.status(404).send({ message: "Content not found" });
    }

    if (bfile) existingContent.bfile = "/api/content/" + bfile[0].filename;
    if (wfile) existingContent.wfile = "/api/content/" + wfile[0].filename;
    if (image) existingContent.image = "/api/content/" + image[0].filename;
    if (image_ar)
      existingContent.image_ar = "/api/content/" + image_ar[0].filename;
    await existingContent.save();

    res.status(200).send({ message: "Content updated successfully!" });
  }),
};

module.exports = contentCtl;

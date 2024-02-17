const asyncHandler = require("express-async-handler");
const DesignTypes = require("../models/design-type.model.js");

const designTypesCtl = {
  getDesignTypes: asyncHandler(async (req, res) => {
    let data = await DesignTypes.find();
    res.send(data);
  }),
  deleteDesignType: asyncHandler(async (req, res) => {
    let id = req.params.id;

    await DesignTypes.findByIdAndDelete(id);
    res.send();
  }),
  updateDesignType: asyncHandler(async (req, res) => {
    let newData = await DesignTypes.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(newData);
  }),
  addDesignType: asyncHandler(async (req, res) => {
    let designType = new DesignTypes(req.body);
    await designType.save();
    res.send(designType);
  }),
};

module.exports = designTypesCtl;

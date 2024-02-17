const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DesignTypesSchema = new Schema({
  name: { type: String, required: true, trim: true },
})

const DesignTypes = mongoose.model("DesignTypes", DesignTypesSchema);
module.exports = DesignTypes;

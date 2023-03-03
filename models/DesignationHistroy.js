const mongoose = require("mongoose");

const DesignationHistroySchema = new mongoose.Schema({
  designationName: {
    type: String,
    required: true,
  },
  designationNameOld: {
    type: String,
    required: true,
  },
  orgId: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  designationStatus: {
    type: String,
    required: true,
  },
  EnterById: {
    type: String,
  },
  EnterByName: {
    type: String,
  },
  EnterByDateTime: {
    type: String,
  },
  EditById: {
    type: String,
  },
  EditByName: {
    type: String,
  },
  EditByDateTime: {
    type: String,
  },
  DeactiveById: {
    type: String,
  },
  DeactiveByName: {
    type: String,
  },
  DeactiveByDateTime: {
    type: String,
  },
});

module.exports = DesignationHistroy = mongoose.model("DesignationHistorys", DesignationHistroySchema);

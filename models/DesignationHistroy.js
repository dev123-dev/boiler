const mongoose = require("mongoose");

const DesignationHistroySchema = new mongoose.Schema({
  designationName: {
    type: String,
  },
  designationNameOld: {
    type: String,
  },
  orgId: {
    type: String,
   
  },
  orgName: {
    type: String,
   
  },
  designationStatus: {
    type: String,
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

const mongoose = require("mongoose");

const IndInsSchema = new mongoose.Schema({
  entName: {
    type: String,
  },
  entOrderDesg: {
    type: String,
  },
  entOrderDesgId: {
    type: String,
  },
  entEmail: {
    type: String,
  },
  entAddEmail: {
    type: String,
  },
  InstHead: {
    type: Array,
  },
  entUrl: {
    type: String,
  },
  entAddurl: {
    type: String,
  },
  entPhone: {
    type: String,
  },
  entAddPhone: {
    type: String,
  },
  entAddress1: {
    type: String,
  },
  entAddress2: {
    type: String,
  },
  entAddress3: {
    type: String,
  },
  entDistrict: {
    type: String,
  },
  entState: {
    type: String,
  },
  entPinCode: {
    type: String,
  },
  entType: {
    type: String,
  },
  entStatus: {
    type: String,
  },
  categoryBelongs: {
    type: [],
  },
  orgId: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  entReason: {
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

module.exports = EntDetails = mongoose.model("Entities", IndInsSchema);

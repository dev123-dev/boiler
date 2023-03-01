const mongoose = require("mongoose");

const OrgSchema = new mongoose.Schema({
  orgName: {
    type: String,
    required: true,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  endDate: {
<<<<<<< HEAD
    type: String,   
=======
    type: String,
>>>>>>> 8763f4fa2923a75a5c4f41c13dda1769f5f87dd9
  },
  address: {
    type: String,
  },
  orgStatus: {
    type: String,
  },
  orgDeactiveReason: {
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

module.exports = OrgDetails = mongoose.model("Org", OrgSchema);

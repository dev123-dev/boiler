const mongoose = require("mongoose");

const OrgSchema = new mongoose.Schema({
  orgName: {
    type: String,
    required: true,
    unique: true,
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
    type: String,
    
  },
  address: {
    type: String,
    required: true,
  },
  orgStatus: {
    type: String,
  
  },
  orgDeactiveReason:{
    type: String,
  },
});

module.exports = OrgDetails = mongoose.model("Org", OrgSchema);


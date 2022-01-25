const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  sdName: {
    type: String,
    required: true,
    unique: true,
  },
  sdProfile: {
    type: String,
    required: true,
  },
  sdDesig: {
    type: String,
    required: true,
  },
  sdUserName: {
    type: String,
    required: true,
  },
  sdPassword: {
    type: String,
    required: true,
  },
});

module.exports = User = mongoose.model("StaffDetails", StaffSchema);

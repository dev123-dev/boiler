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
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = StaffDetails = mongoose.model("staffdetails", StaffSchema);

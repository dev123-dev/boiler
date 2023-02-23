const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  groupName: {
    type: String,
    required: true,
    unique: true,
  },
  userStatus: {
    type: String,
    required: true,
  },
});

module.exports = GroupDetails = mongoose.model("groups", GroupSchema);

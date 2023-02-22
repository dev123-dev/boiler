const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  sdName: {
    type: String,
    required: true,
    unique: true,
  },
  sdType: {
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

module.exports = UserDetails = mongoose.model("users", UserSchema);

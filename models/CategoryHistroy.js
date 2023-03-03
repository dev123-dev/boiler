const mongoose = require("mongoose");

const CategoryHistroySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDesp: {
    type: String,
    //required: true,
  },
  orgId: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  categoryStatus: {
    type: String,
    required: true,
  },
  categoryReason: {
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

module.exports = CategoryHistroy = mongoose.model("categorys", CategoryHistroySchema);

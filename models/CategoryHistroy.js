const mongoose = require("mongoose");

const CategoryHistroySchema = new mongoose.Schema({
  categoryName: {
    type: String,
  },
  categoryDesp: {
    type: String,
  },
  orgId: {
    type: String,
  },
  orgName: {
    type: String,
  },
  categoryStatus: {
    type: String,
  },
  categoryReason: {
    type: String,
  },
  categoryNameOld: {
    type: String,
  },
  categoryDespOLd: {
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

module.exports = CategoryHistroy = mongoose.model("categoryHistroys", CategoryHistroySchema);

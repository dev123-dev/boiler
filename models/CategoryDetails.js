const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  categoryDesp: {
    type: String,
    required: true,
  },
  orgId: {
    type: String,
    required: true,
  },
  orgName: {
    type: String,
    required: true,
  },
  catogoryStatus: {
    type: String,
    required: true,
  },
});

module.exports = CategoryDetails = mongoose.model("categorys", CategorySchema);


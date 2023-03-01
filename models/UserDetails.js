const mongoose = require("mongoose");
ObjectId = mongoose.Schema.ObjectId;
var SchemaTypes = mongoose.Schema.Types;
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  orgId:{
    type: ObjectId,
    required:true,
  },
  orgName: {
    type: String,
    required: true,
  },
  userGroup: {
    type: String,
    required: true,
  },

  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    
  },
  password: {
    type: String,
    required: true,
  },
  userStatus: {
    type: String,
    required: true,
  },
  userDeactiveReason:{
    type: String,
  },
  EnterById:{
    type: String,
  },
  EnterByName:{
    type: String,
  },
  EnterByDateTime:{
    type:String,
  },
  EditById:{
    type: String,
  },
  EditByName:{
    type: String,
  },
  EditByDateTime:{
    type:String,
  },
  DeactiveById:{
    type: String,
  },
  DeactiveByName:{
    type: String,
  },
  DeactiveByDateTime:{
    type:String,
  },

});

module.exports = UserDetails = mongoose.model("users", UserSchema);


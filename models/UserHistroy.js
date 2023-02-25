const mongoose = require("mongoose");

const UserHisSchema = new mongoose.Schema({
  userName: {
    type: String,
   
  },
  userGroup: {
    type: String,
   
  },
  orgName: {
    type: String,
   
  },
  fullName: {
    type: String,
    
  },
  email: {
    type: String,
   
  },
  phone: {
    type: String,
    
  },
  address: {
    type: String,
   
  },
  password: {
    type: String,
    
  },
  userStatus: {
    type: String,
    
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

module.exports = UserHistroy = mongoose.model("userHistroys", UserHisSchema);


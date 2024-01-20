const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
      unique:true
    },
    password:{
      type:String,
      required:true,
    },
    business:{
      type:Number,
      default:0
    },
    sports:{
      type:Number,
      default:0
    },
    entertainment:{
      type:Number,
      default:0
    },
    technology:{
      type:Number,
      default:0
    },
    health:{
      type:Number,
      default:0
    },
    science:{
      type:Number,
      default:0
    },
    date:{
      type: Date,
      default: Date.now
    },
  });
  const UserModel = mongoose.model('user', UserSchema);
  module.exports = {UserModel};
import mongoose from "mongoose";
import Category from "./Category.js";

const incomeSchema=new mongoose.Schema({
  amount:{
    type:Number,
    required:true
  }  ,
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  description:{
    type:String
  }
})

export default mongoose.model('Income',incomeSchema);
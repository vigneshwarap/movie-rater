import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true, "User name is required"],
    trim: true
  },
  email : {
    type : String,
    required : [true, "Emailid is required"],
    trim : true
  },
  role : {
    type : String,
    required : [true, "User role is required"],
    trim : true
  }
})

const user = mongoose.model('User', userSchema);

export default user
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username : {
    type : String,
    required : [true, "User name is required"],
    trim: true,
    unique : true
  },
  email : {
    type : String,
    required : [true, "Emailid is required"],
    trim : true,
    unique : true
  },
  password : {
    type : String,
    required : [true, "Password is required"],
    trim : true
  },
  role : {
    type : String,
    required : [true, "User role is required"],
    trim : true,
    enum : ["admin", "maintainer", "user"]
  }
},{
  timestamps : true
})

const User = mongoose.model('User', userSchema);

export default User
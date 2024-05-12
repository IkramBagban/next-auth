import mongoose from "mongoose";

const userSchama = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Please provider a username"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please provider an email"],
  },
  password: {
    type: String,
    required: [true, "Please provider a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.model.users || mongoose.model("user", userSchama);
export default User;

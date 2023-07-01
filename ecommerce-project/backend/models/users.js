const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    minLength: 5,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 5,
    required: true,
  }
});

const User = mongoose.model("users", userSchema);
module.exports = User;

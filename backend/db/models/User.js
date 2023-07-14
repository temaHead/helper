const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    uniquie: true,
  },
  passwordHash: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("User", UserSchema);

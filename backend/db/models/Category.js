const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    require: true,
  },
  open: {
    type: Boolean,
    require: true,
  },
  secret: {
    type: String,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Category", CategorySchema);

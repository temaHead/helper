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
});

module.exports = mongoose.model("Category", CategorySchema);

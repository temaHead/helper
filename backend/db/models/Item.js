const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  count: {
    type: String,
  },
  price: {
    type: String,
  },
  categoryId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Item", ItemSchema);

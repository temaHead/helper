const mongoose = require("mongoose");

/**
 * Подключаемся к MongoDB
 */
function connectionMongoDB() {
  mongoose
    .connect(
      "mongodb+srv://livarius:52722310@cluster0.f1v3lcd.mongodb.net/blog?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB ok"))
    .catch((err) => console.log("db err", err));
}
module.exports = connectionMongoDB

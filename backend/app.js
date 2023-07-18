const express = require("express");
const expressConfig = require("./config/express");
const authRouter = require("./routes/auth.routes");
const myRouter = require("./routes/my.routes");
const connectionMongoDB = require("./db/config/mongodb");
const checkAuth = require("./middlewares/checkAuth");



connectionMongoDB();

const app = express();
expressConfig(app);

app.use("/auth", authRouter);
app.use(checkAuth);

app.use("/my", myRouter);

app.use((error, req, res, _next) => {
  console.error("Произошла ошибка", error);
  res.status(500).json({
    success: false,
    message: "Непредвиденная ошибка сервера, попробуйте зайти позже",
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("Server ok port 4444");
});

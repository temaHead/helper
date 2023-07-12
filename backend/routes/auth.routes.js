const authRouter = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../db/models/User");
const jwt = require("jsonwebtoken");

authRouter.get("/user", async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({
        message: "Пользователь не найден",
      });
    }
    const { passwordHash, ...userData } = user._doc;
    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Нет доступа",
    });
  }
});

authRouter.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const validatePassword = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );
    if (!validatePassword) {
      return res.status(400).json({ message: "Неверный логин или пароль" });
    }

    const token = jwt.sign({ _id: user._id }, "secret-word");

    const { passwordHash, ...userData } = user._doc;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось авторизоваться" });
  }
});

authRouter.post("/registration", async (req, res) => {
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const data = new User({
      email: req.body.email,
      userName: req.body.userName,
      passwordHash: hash,
    });

    const newUser = await data.save();
    const token = jwt.sign({ _id: newUser._id }, "secret-word");

    const { passwordHash, ...userData } = newUser._doc;

    res.json({ ...userData, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось зарегистрироваться" });
  }
});

module.exports = authRouter;

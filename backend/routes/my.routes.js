const myRouter = require("express").Router();
const Category = require("../db/models/Category");

myRouter.get("/categories", async (req, res) => {
  console.log(req.userId);
  try {
    const data = await Category.find({ userId: req.userId });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось загрузить категории",
    });
  }
});

myRouter.post("/categories", async (req, res) => {
  try {
    const data = new Category({
      userId: req.userId,
      categoryName: req.body.categoryName,
      secret: req.body.secret,
      open: req.body.open,
      description: req.body.description,
    });

    const category = await data.save();
    console.log(category);
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать категорию",
    });
  }
});

module.exports = myRouter;

const myRouter = require("express").Router();
const Category = require("../db/models/Category");

myRouter.get("/categories", async (req, res) => {
  console.log(req.userId);
  try {
    const data = await Category.find({userId:req.userId});
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
      categoryName: req.body.categoryName,
      userId: req.body.userId,
      secret: req.body.secret,
      open: req.body.open,
    });

    const category = await data.save();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать категорию",
    });
  }
});

module.exports = myRouter;

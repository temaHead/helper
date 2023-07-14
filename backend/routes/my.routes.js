const myRouter = require("express").Router();
const Category = require("../db/models/Category");

myRouter.post("/addCategory", async (req, res) => {
  try {
    const data = new Category({
      categoryName: req.body.categoryName,
      userId: req.body.userId,
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

const myRouter = require("express").Router();
const { response } = require("express");
const Category = require("../db/models/Category");
const Item = require("../db/models/Item");

myRouter.get("/categories", async (req, res) => {
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

myRouter.get("/category/:id", async (req, res) => {
  try {
    const categoryId = req.params.id;
    const data = await Item.find({ categoryId: categoryId });
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось загрузить объекты" });
  }
});

myRouter.delete("/category/:id", async (req, res) => {
  console.log(req.params.id, req.userId);
  try {
    const categoryId = req.params.id;
    const userId = req.userId;

    const data = await Item.deleteMany(
      { $and: [{ categoryId: categoryId }, { userId: userId }] }
      // (err, doc) => {
      //   if (err) {
      //     console.log(err);
      //     return res.status(500).json({ message: "Не удалось удалить категорию" });
      //   }
      //   if (!doc) {
      //     return res.status(404).json({
      //       message: "Категория не найдена",
      //     });
      //   }
      //   res.json({ success: true });
      // }
    );
    console.log(data);
    const category = await Category.deleteOne({ _id: categoryId });
    console.log(category);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось удалить категорию" });
  }
});

myRouter.post("/item", async (req, res) => {
  try {
    const data = new Item({
      userId: req.userId,
      itemName: req.body.itemName,
      description: req.body.description,
      count: req.body.count,
      price: req.body.price,
      categoryId: req.body.categoryId,
    });

    const item = await data.save();
    res.json(item);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Не удалось создать карточку" });
  }
});

module.exports = myRouter;

const express = require("express");
const path = require("path");
const checkAuth = require("../middlewares/checkAuth");

function expressConfig(app) {
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(checkAuth);
}

module.exports = expressConfig;

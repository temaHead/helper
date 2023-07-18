const express = require("express");
const path = require("path");
const cors = require('cors')


function expressConfig(app) {
  app.use(cors());
  app.use(express.static(path.join(__dirname, "../public")));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}

module.exports = expressConfig;

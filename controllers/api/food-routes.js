const router = require("express").Router();
const { Food } = require("../../models");

// GET api/food
router.get("/", (req, res) => {
  Food.findAll({});
});

const router = require("express").Router();
// routes will be required in here
const foodRoutes = require("./food-routes.js");

// routes will be setup here
router.use("/food", foodRoutes);
module.exports = router;

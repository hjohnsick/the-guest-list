const router = require("express").Router();
// routes will be required in here
const foodRoutes = require("./food-routes.js");

// routes will be setup here
router.use("/food", foodRoutes);

const guestlistRoutes = require("./guestRoutes");

// routes will be setup here

router.use("/guestlist", guestlistRoutes);

module.exports = router;

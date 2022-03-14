const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const guestRoutes = require("./guestlistRoutes");


router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use("/theguestlist", guestRoutes);

router.use((req, res) => {
  res.status(404).end();
});




module.exports = router;

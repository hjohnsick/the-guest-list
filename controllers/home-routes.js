const router = require("./api/userRoutes");

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("homepage", { loggedIn: req.session.loggedIn }).catch((error) => {
    console.log(error);
    res.status(500).json(error);
  });
});

module.exports = router;

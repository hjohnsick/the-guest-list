const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

module.exports = router;

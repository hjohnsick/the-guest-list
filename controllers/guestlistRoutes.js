const router = require("express").Router();
const { GuestList, Food } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  GuestList.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: [
      {
        model: Food,
        attributes: ["food"],
      },
    ],
  })
    .then((dbGuestData) => {
      const guests = dbGuestData.map((guest) => guest.get({ plain: true }));
      res.render("guestlist", { guests, loggedIn: true });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;

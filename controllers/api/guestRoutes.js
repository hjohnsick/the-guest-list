const express = require("express");
const router = express.Router();
const { GuestList, Food } = require("../../models");

router.get("/", (req, res) => {
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
      if (!dbGuestData) {
        res.status(404).json({ message: "no guest found for this user" });
        return;
      }
      res.json(dbGuestData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  GuestList.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Food,
        attributes: ["food"],
      },
    ],
  })
    .then((dbGuestData) => {
      if (!dbGuestData) {
        res.status(404).json({ message: "no guest found for this user" });
        return;
      }
      res.json(dbGuestData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  GuestList.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    street: req.body.street,
    city: req.body.street,
    state: req.body.state,
    zipcode: req.body.zipcode,
    phone_number: req.body.phone_number,
    email: req.body.email,
    rsvp: req.body.rsvp,
    user_id: req.body.user_id,
    food_id: req.body.food_id,
  })
    .then((dbGuestData) => res.json(dbGuestData))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  GuestList.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      street: req.body.street,
      city: req.body.street,
      state: req.body.state,
      zipcode: req.body.zipcode,
      phone_number: req.body.phone_number,
      email: req.body.email,
      rsvp: req.body.rsvp,
      user_id: req.body.user_id,
      food_id: req.body.food_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbGuestData) => {
      if (!dbGuestData) {
        res.status(404).json({ message: "no guest list found with this id" });
        return;
      }
      res.json(dbGuestData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  GuestList.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbGuestData) => {
      if (!dbGuestData) {
        res.status(404).json({ message: "no guest list found with this id" });
        return;
      }
      res.json(dbGuestData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;

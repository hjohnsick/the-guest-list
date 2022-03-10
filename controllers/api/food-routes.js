const router = require("express").Router();
const { Food } = require("../../models");

// GET api/food
router.get("/", (req, res) => {
  Food.findAll({})
    .then((dbFoodData) => res.json(dbFoodData))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.get("/:id", (req, res) => {
  Food.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbFoodData) => {
      if (!dbFoodData) {
        res.status(404).json({ message: "No food found with that id" });
        return;
      }
      res.json(dbFoodData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  Food.create({
    food: req.body.food,
    guest_id: req.body.guest_id,
  })
    .then((dbFoodData) => res.json(dbFoodData))
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.put("/:id", (req, res) => {
  Food.update(
    {
      food: req.body.food,
      guest_id: req.body.guest_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbFoodData) => {
      if (!dbFoodData) {
        res.status(404).json({ message: "No food found with this id" });
        return;
      }
      res.json(dbFoodData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

router.delete("/:id", (req, res) => {
  Food.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbFoodData) => {
      if (!dbFoodData) {
        res.status(404).json({ message: "No food found with that id" });
        return;
      }
      res.json(dbFoodData);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;

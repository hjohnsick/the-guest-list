const router = require("express").Router();
const { User } = require("../../models");

// getting all the users
router.get("/", (req, res) => {
  User.findAll({ attributes: { exclude: ["password"] } })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one user by its `id` value
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) =>
      dbUserData
        ? res.json(dbUserData)
        : res.json({ message: "User not found" })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new user
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// api/users/login
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    req.session.save(() => {
      // declare session variables
      req.session.user_id = dbUserData.id;
      req.session.username = dbUserData.username;
      req.session.loggedIn = true;

      res.json({ user: dbUserData, message: "You are now logged in!" });
    });
  });
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// update user info

router.put("/:id", (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) =>
      dbUserData
        ? res.json(dbUserData)
        : res.json({ message: "No user found with this id" })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete one user by its `id` value
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) =>
      dbUserData
        ? res.json(dbUserData)
        : res.json({ message: "User not found" })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

const router = require('express').Router();
const { User, GuestList, Food} = require('../../models');


// getting all the users
router.get('/', (req, res) => {
    User.findAll({ attributes: {exclude: ["password"] },})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    // find one user by its `id` value 
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: {exclude: ["password"] },
      })
      .then(dbUserData => dbUserData ? res.json(dbUserData) : res.json({message: 'User not found'}))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
     });
  
});


router.post('/', (req, res) => {
    // create a new user
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
          console.log(err);
          res.status(500).json(err);
     });
  
});


// update user info

router.put('/:id', (req, res) => {
    User.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => dbUserData ? res.json(dbUserData) : res.json({ message: "No user found with this id" }))
    .catch(err => { 
      console.log(err); 
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    // delete one user by its `id` value
    User.destroy({
      where: {
          id: req.params.id
     }
  })  
  .then(dbUserData => dbUserData ? res.json(dbUserData) : res.json({message: 'User not found'}))
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});



module.exports = router;
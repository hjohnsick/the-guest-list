const router = require('express').Router();
const { User, GuestList, Food} = require('../../models');


// getting all the users with the guestlist
router.get('/', (req, res) => {
    // find all users including its associated guestLists
    User.findAll({
        include: [
            {
                model: GuestList,
                attributes: ['id', 'first_name', 'last_name', 'street', 'city', 'state', 'zipcode', 'phone_number', 'email', 'rsvp', 'user_id', 'food_id' ]
            }
          ]
      })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    // find one user by its `id` value including its associated guestLists
    User.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: GuestList,
                attributes: ['id', 'first_name', 'last_name', 'street', 'city', 'state', 'zipcode', 'phone_number', 'email', 'rsvp', 'user_id', 'food_id' ]
            }

        ]
      })
      .then(dbUserData => {
          if(!dbUserData[0]) {
              res.status(404).json({ message: "No user with this id"});
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
     });
  
});


router.post('/', (req, res) => {
    // create a new user
    User.create({
        user_email: req.body.email,
        user_password: req.body.password
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
          console.log(err);
          res.status(500).json(err);
     });
  
});





module.exports = router;
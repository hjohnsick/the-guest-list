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
      .then(dbUserData => dbUserData ? res.json(dbUserData) : res.json({message: 'User not found'}))
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


// trying to figure out if we want to update guestList 
// associated with particular guest
// update 
router.put('/:id', (req, res) => {
    // update product data
    User.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((user) => {
        // find all associated guestList 
        console.log(user);
        return GuestList.findAll({ where: { user_id: req.params.id } });
      })
      .then((guestList) => {
        //  stuck here
        // trying to figure out both delete and update action
        // how to catch data from req.body
        //then update accordingly 
      })
      .catch((err) => {
        // console.log(err);
        res.status(400).json(err);
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
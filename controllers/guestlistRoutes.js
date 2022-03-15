const router = require('express').Router(); 
const { GuestList, Food } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
   GuestList.findAll({
        where: {
            user_id: req.session.user_id,
         },
         include: [
            {
                model: Food,
                attributes: ['food']
            }
         ]
         
     }).then((dbGuestData) => {
         const guests = dbGuestData.map((guest) => guest.get({ plain: true }));
         console.log(guests);
         res.render("guestlist", { guests, loggedIn: true });
     })
     .catch((error) => {
         console.log(error);
         res.status(500).json(error);
     });
});


module.exports = router;


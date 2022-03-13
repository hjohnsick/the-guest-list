const router = require('express').Router();
const sequelize = require('../config/connection'); 
const { GuestList } = require('../models');


router.get('/', (req, res) => {
    console.log(req.session);
//    GuestList.findAll({
//         where: {
//             user_id: req.session.user_id,
//         },

//     })
res.render("guestlist")
});


module.exports = router;


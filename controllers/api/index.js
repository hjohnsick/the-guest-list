const router = require("express").Router();

// routes will be required in here

const userRoutes = require('./userRoutes');
const guestlistRoutes = require('./guestRoutes')

// routes will be setup here

router.use('/guestlist', guestlistRoutes)
router.use('/users', userRoutes);



module.exports = router;

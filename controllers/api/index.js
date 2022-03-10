const router = require("express").Router();

// routes will be required in here
const userRoutes = require('./userRoutes');

// routes will be setup here
router.use('/users', userRoutes);


module.exports = router;

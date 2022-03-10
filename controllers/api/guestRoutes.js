const express = require('express');
const router = express.Router();
const config = require('../config/connection');

router.get('/', (req, res) => {
    GuestList.findAll()

});






module.exports = router;
const express = require("express");

const router  = express.Router();

const home_controller = require('../controller/home-controller');

router.get('/',home_controller.home);
router.use('/users',require('./user-route'));

module.exports = router;
const express = require("express");

const router  = express.Router();

const user_controller = require('../controller/user-controller');

router.get('/about',user_controller.about);

router.get('/contact',user_controller.contact);

router.get('/event',user_controller.event);
router.get('/contact-us',user_controller.contactUs);

module.exports = router;




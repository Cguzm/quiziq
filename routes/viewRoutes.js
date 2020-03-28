const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/viewsController');

router.get('/', viewsController.getLandingPage);
router.get('/signup', viewsController.getSignUpPage);
router.get('/login', viewsController.getLoginPage);
router.get('/play', viewsController.getPlayGame);

module.exports = router;

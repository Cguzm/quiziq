const express = require('express');
const router = express.Router();

const viewsController = require('../controllers/viewsController');

router.get('/', viewsController.getLandingPage);
router.get('/signup', viewsController.getSignUpPage);

module.exports = router;

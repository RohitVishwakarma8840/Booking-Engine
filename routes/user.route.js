const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/getusers', userController.getUser);

module.exports = router;
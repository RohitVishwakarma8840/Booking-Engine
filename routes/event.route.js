const router = require('express').Router();

const eventController = require('../controllers/eventController');
const { route } = require('./auth.route');

router.get('/getevents', eventController.getAllEvents);

module.exports = router;
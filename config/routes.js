var express = require('express');
//using just the Router constructor in express
var router = express.Router();
var userController = require('../controllers/users');

//requiring the film controller
var filmController = require('../controllers/films');
var sessionsController = require('../controllers/sessions');

//sessions routes
router.route('/sessions')
            .post(sessionsController.create)
            .delete(sessionsController.delete);

router.route('/sessions/new')
            .get(sessionsController.new);


router.get('/films/new',filmController.new);
router.route('/films')
	.get(filmController.index)
	.post(filmController.create);
router.route('/films/:id')
	.get(filmController.show)
	.put(filmController.update)
	.delete(filmController.delete);
router.get("/films/:id/edit",filmController.edit);


//user router
router.route('/users')
		.post(userController.create);

router.route('/users/new')
		.get(userController.new);

module.exports = router;

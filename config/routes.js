var express = require('express');
//using just the Router constructor in express
var filmRouter = express.Router();
var userController = require('../controllers/users');

//requiring the film controller
var filmController = require('../controllers/films');

filmRouter.get('/films/new',filmController.new);
filmRouter.route('/films')
	.get(filmController.index)
	.post(filmController.create);
filmRouter.route('/films/:id')
	.get(filmController.show)
	.put(filmController.update)
	.delete(filmController.delete);
filmRouter.get("/films/:id/edit",filmController.edit);


//user router
router.route('/users')
		.post(userController.create);

router.route('/users/new')
		.get(userController.new);

module.exports = filmRouter;

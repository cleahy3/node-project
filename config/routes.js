var express = require('express');
//using just the Router constructor in express

var filmRouter = express.Router();
var actorRouter = express.Router();

//requiring the film controller
var filmController = require('../controllers/films');


module.exports = filmRouter;

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

router.route('/')
  .get(sessionsController.main);
router.get('/films/new',filmController.new);
router.route('/films')
	.get(filmController.index)
	.post(filmController.create);
router.route('/films/:id')
	.get(filmController.show)
	.put(filmController.update)
	.delete(filmController.delete);
router.get("/films/:id/edit",filmController.edit);



//requiring actor controller

var actorController = require('../controllers/actors');

router.get('/actors/new',actorController.new);

router.route('/actors')
  .get(actorController.index)
  .post(actorController.create);

router.route('/actors/:id')
  .get(actorController.show)
  .put(actorController.update)
  .delete(actorController.delete);

router.get("/actors/:id/edit",actorController.edit);


//user router
router.route('/users')
		.post(userController.create);

router.route('/users/new')
		.get(userController.new);

module.exports = router;



var express = require('express');
//using just the Router constructor in express
var filmRouter = express.Router();

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


//requiring actor controller

var actorController = require('../controllers/actors');

actorRouter.get('/actors/new',actorController.new);

actorRouter.route('/actors')
  .get(actorController.index)
  .post(actorController.create);

actorRouter.route('/actors/:id')
  .get(actorController.show)
  .put(actorController.update)
  .delete(actorController.delete);

actorRouter.get("/actors/:id/edit",actorController.edit);

module.exports = actorRouter;


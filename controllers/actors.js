var Actor = require('../models/actor');
// INDEX - GET /
function indexActors(req , res) {

 Actor.find({}, function(err, actors){
   res.render("actors/index" , {
   name: "actors",
   actors: actor
   });
 });

}

// SHOW - GET /:id
function showActors(req , res) {
  actor.findById(req.params.id,function(err,actor){
    if(!actor ) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("actors/show" ,
    {
      name: "actors",
      actor: actor
    })
});


}

// EDIT - GET /:id/edit
function editActors(req , res) {

  Actor.findById(req.params.id , function(err, actor) {

    // check for errors or for no object found
    if(!actor) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);

    res.render("actors/edit" , {
      name: "actor",
      actor: actor,
      edit: true
    });
});

}

// NEW - GET /new
function newActors(req , res) {

  // create an empty film
  var newActor = {
    id: "",
    name: "",
    body: ""
  }

  res.render("actors/new" , {
    name: "New Actor",
    actor: newActor,
    edit: false
  });

}

// DELETE - DELETE /:id
function deleteActors(req , res) {

  // tell the data store to remove the film with the id in the request
  Actor.findByIdAndRemove(req.params.id,function(err){
   res.redirect("/actors");
  })

  // redirect to a GET request


}

// UPDATE - UPDATE /:id
function updateActors(req , res) {

  // data is gathered by body parser animationd placed in req.body

    // get the film object from our data store
    Actor.findByIdAndUpdate(req.params.id,{$set: req.body},function(err,actor){
      res.redirect("/actors");

    });

    // redirect the user to a GET route. We'll go back to the INDEX.

}

// CREATE - film /
function createActors(req , res) {

  // data is gathered by body parser and placed in req.body

  // create a new film object with that data
  var actor =  new Actor(req.body);

  // store the film in our actors array
  actor.save(function(err,actor){
    if(err){
      return res.status(500).message(err);
    }
    console.log("actor saved: "+ actor);
    res.status(200).redirect("/actors");
  });

  // redirect the user to a GET route. We'll go back to the INDEX.


}


module.exports = {
  index: indexActors,
  show: showActors,
  new: newActors,
  create: createActors,
  edit: editActors,
  update: updateActors,
  delete: deleteActors
};
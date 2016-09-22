var Film = require('../models/film');
// INDEX - GET /
function indexFilms(req , res) {

 Film.find({}, function(err, films){
   res.render("films/index" , {
   title: "films",
   films: films
   });
 });

}

// SHOW - GET /:id
function showFilms(req , res) {
  Film.findById(req.params.id,function(err,film){
    if(!film ) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);
    res.render("films/show" ,
    {
      title: "film",
      film: film
    })
});


}

// EDIT - GET /:id/edit
function editFilms(req , res) {

  Film.findById(req.params.id , function(err, film) {

    // check for errors or for no object found
    if(!film) return res.status(404).send("Not found");
    if(err) return res.status(500).send(err);

    res.render("films/edit" , {
      title: "film",
      film: film,
      edit: true
    });
});

}

// NEW - GET /new
function newFilms(req , res) {

  // create an empty film
  var newFilm = {
    id: "",
    title: "",
    body: ""
  }

  res.render("films/new" , {
    title: "New Film",
    film: newFilm,
    edit: false
  });

}

// DELETE - DELETE /:id
function deleteFilms(req , res) {

  // tell the data store to remove the film with the id in the request
  Film.findByIdAndRemove(req.params.id,function(err){
   res.redirect("/films");
  })

  // redirect to a GET request


}

// UPDATE - UPDATE /:id
function updateFilms(req , res) {

  // data is gathered by body parser animationd placed in req.body

    // get the film object from our data store
    Film.findByIdAndUpdate(req.params.id,{$set: req.body},function(err,film){
      res.redirect("/films");

    });

    // redirect the user to a GET route. We'll go back to the INDEX.

}

// CREATE - film /
function createFilms(req , res) {

  // data is gathered by body parser and placed in req.body

  // create a new film object with that data
  var film =  new Film(req.body);

  // store the film in our films array
  film.save(function(err,film){
    if(err){
      return res.status(500).message(err);
    }
    console.log("film saved: "+ film);
    res.status(200).redirect("/films");
  });

  // redirect the user to a GET route. We'll go back to the INDEX.


}


module.exports = {
  index: indexFilms,
  show: showFilms,
  new: newFilms,
  create: createFilms,
  edit: editFilms,
  update: updateFilms,
  delete: deleteFilms
};
/*var films = [{
    id: 0,
    title: "The Hobbit",
    description: "An Unexpected Journey tells the tale of Bilbo Baggins (Martin Freeman), who is convinced by the wizard Gandalf (Ian McKellen) to accompany thirteen Dwarves, led by Thorin Oakenshield (Richard Armitage), on a quest to reclaim the Lonely Mountain from the dragon Smaug."
},
{
    id: 1,
    title: "Barb Wire",
    description: "Barb Wire (Pamela Anderson) owns the Hammerhead, a nightclub in Steel Harbor — \"the last free city\" in a United States ravaged by the civil war — and she brings in extra cash working as a mercenary and bounty hunter. Chief of Police Willis (Xander Berkeley) raids her club. Willis's target is fugitive Dr. Corrina  Devonshire (Victoria Rowell), a former government scientist with information about a bioweapon being developed by her former superior, Colonel Pryzer (Steve Railsback) of the Congressional Directorate. Dr. Devonshire hopes to escape to Canada in order to make this information public."
},
{
    id: 2,
    title: "Star wars",
    description: "The Imperial Forces -- under orders from cruel Darth Vader (David Prowse) -- hold Princess Leia (Carrie Fisher) hostage, in their efforts to quell the rebellion against the Galactic Empire. Luke Skywalker (Mark Hamill) and Han Solo (Harrison Ford), captain of the Millennium Falcon, work together with the companionable droid duo R2-D2 (Kenny Baker) and C-3PO (Anthony Daniels) to rescue the beautiful princess, help the Rebel Alliance, and restore freedom and justice to the Galaxy."
},
{
    id: 3,
    title: "Terminator",
    description: "The Terminator is a 1984 American science fiction film written and directed by James Cameron, produced by Hemdale Film Corporation and distributed by Orion Pictures. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose son will one day become a savior against machines in a film-apocalyptic future. Michael Biehn plays Kyle Reese, a soldier from the future sent back in time to protect Connor"
},]; */

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
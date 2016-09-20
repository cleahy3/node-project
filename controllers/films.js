var films = [{
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
    id: 0,
    title: "Terminator",
    description: "The Terminator is a 1984 American science fiction film written and directed by James Cameron, produced by Hemdale Film Corporation and distributed by Orion Pictures. It stars Arnold Schwarzenegger as the Terminator, a cyborg assassin sent back in time from 2029 to 1984 to kill Sarah Connor (Linda Hamilton), whose son will one day become a savior against machines in a post-apocalyptic future. Michael Biehn plays Kyle Reese, a soldier from the future sent back in time to protect Connor"
},];


// INDEX
function indexFilms(req, res) {
  res.render("films/index",{
  	title:'All Films',
  	films:films
  });
}

// SHOW
function showFilms(req, res) {
	var film = films[req.params.id];
  res.render('films/show',{
  	title:"show film: "+film.id,
  	film:film});
}

// CREATE
function createFilms(req, res) {
 
  film={
    id:films.length,
    title: req.body.title,
    description: req.body.description
  }
  films.push(film); 
  res.redirect("/films");
}

// NEW
function newFilms(req, res) {
  var film={
    id:"",
    title: "",
    description: ""
  }
  res.render('films/new',{title:'New Film',film:film,edit:false});
}

// UPDATE
function updateFilms(req, res) {
   var film = films[req.params.id];
  film.title = req.body.title;
  film.description = req.body.description;

  films[req.params.id]=film;
  res.redirect("/films");
}

// DELETE
function deleteFilms(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editFilms(req, res) {
	var film = films[req.params.id];
 
  res.render("films/edit" , {
    title: "Edit Film",
    film: film,
    edit:true
  });

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
// INDEX
function indexFilms(req, res) {
  res.send("<h1>Homepage</h1>");
}

// SHOW
function showFilms(req, res) {
  res.send("SHOW:" + req.params.id);
}

// CREATE
function createFilms(req, res) {
  res.send("CREATE");
}

// NEW
function newFilms(req, res) {
  res.send("NEW");
}

// UPDATE
function updateFilms(req, res) {
  res.send("UPDATE:" + req.params.id);
}

// DELETE
function deleteFilms(req, res) {
  res.send("DELETE:" + req.params.id);
}

// EDIT
function editFilms(req, res) {
  res.send("EDIT:" + req.params.id);
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
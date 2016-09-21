var express = require('express');
var app = express();
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./config/routes');
var port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(layouts);
app.use(bodyParser.urlencoded({extended:false}));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}));
app.use(routes);

app.listen(port , function(){
  console.log('app is listening on port'+port);
});

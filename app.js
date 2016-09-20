var express = require('express');
var app = express();
var ejs = require('ejs');
var layouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');

var routes = require('./config/routes');

app.set('view engine','ejs');

app.use(layouts);
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);

app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});

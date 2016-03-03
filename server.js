var express = require("express");
var exphbs = require("express-handlebars");)

var app = express();

app.use(express.static('public'));

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');

app.get("/", function(req, res, next){
  res.render('home');  
})

module.exports = app;

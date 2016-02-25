var express = require("express");

var app = express();

app.get("/", function(req, resp, next){
  resp.send("Node at Idweaver!");  
})

module.exports = app;

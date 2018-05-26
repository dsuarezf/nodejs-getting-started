const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();

// Serving static files
app.use('/static', express.static(path.resolve('./public')));

app.get('/about', function(req, res){
  res.sendfile(path.resolve('public/about.html'));
});

app.get('/hello', function(req, res){
  res.sendfile(path.resolve('public/hello.html'));
  //res.sendfile(__dirname + "/../public/" + "hello.html");
});

app.get('/listDocuments', function (req, res) {
   fs.readFile(__dirname + "/../database/" + "documents.json", 'utf8', function (err, data) {
       console.log(data);
       res.end(data);
   });
});

app.listen(3000);
 
console.log("Express server listening in mode %s", app.settings.env);
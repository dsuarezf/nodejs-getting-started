const express = require('express');
const path = require('path');
const fs = require("fs");

const app = express();

const DATABASE = '/../database/documents.json';
const NUMBER_OF_SPACES = 4;

// Serving static files
app.use('/static', express.static(path.resolve('./public')));

// To parse request's body
app.use(express.json());

app.get('/about', function(req, res){
	res.sendfile(path.resolve('public/about.html'));
});

app.get('/hello', function(req, res){
	res.sendfile(path.resolve('public/hello.html'));
});

app.get('/documents', function (req, res) {
	fs.readFile(__dirname + DATABASE, 'utf8', function (err, data) {
		console.log(data);
		res.end(data);
    });
});

app.get('/documents/:id', function (req, res) {
    fs.readFile(__dirname + DATABASE, 'utf8', function (err, data) {
		var documents = JSON.parse(data);
        var document = documents["id" + req.params.id] 
        console.log(document);
        res.end(JSON.stringify(document));
   });
});

app.post('/documents', function (req, res) {
	var newDocument = req.body;
	console.log(newDocument);

    fs.readFile(__dirname + DATABASE, 'utf8', function (err, data) {
		var documents = JSON.parse(data);
		var numberOfEntries = Object.keys(documents).length;
		documents["id" + (numberOfEntries + 1)] = newDocument;
		
		fs.writeFile(__dirname + DATABASE, JSON.stringify(documents,
		                                                  null,
		                                                  NUMBER_OF_SPACES),
		    function (err) {
				if (err) {
					return console.log(err);
				}
		        console.log('writing to ' + __dirname + DATABASE);
		        res.end(JSON.stringify(newDocument, null, NUMBER_OF_SPACES));
			});
		});
});

app.delete('/documents/:id', function (req, res) {
	fs.readFile(__dirname + DATABASE, 'utf8', function (err, data) {
		var documents = JSON.parse(data);
        delete documents["id" + req.params.id] 
        
		fs.writeFile(__dirname + DATABASE, JSON.stringify(documents,
		                                                  null,
		                                                  NUMBER_OF_SPACES),
		    function (err) {
				if (err) {
					return console.log(err);
				}
		        console.log('writing to ' + __dirname + DATABASE);
		        res.end(JSON.stringify(documents, null, NUMBER_OF_SPACES));
			});
		});
});

app.listen(3000);
 
console.log("Express server listening in mode %s", app.settings.env);

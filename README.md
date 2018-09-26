# nodejs-getting-started

This repository contains some examples to help getting started with
NodeJS development.

The first example just runs the HTTP server included within the NodeJS
runtime on port http://localhost:3000.

The evolved one add a more scalable solution based on the Express
framework.

To resolve and install dependencies:

    npm install

To start the server just execute:

    npm start

## How to test it

List all documents:

    curl -i -X GET http://localhost:3000/documents

Add a new document:

    curl -i -X POST -H 'Content-Type: application/json' -d '{{"name": "document 04", "author": "Julian Heart", "numberOfWords": 500}' http://localhost:3000/documents

Get a specific document:

    curl -i -X GET http://localhost:3000/documents/2

Delete a specific document:

    curl -i -X DELETE http://localhost:3000/documents/4
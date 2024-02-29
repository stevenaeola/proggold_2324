const express = require('express');
const fs = require('fs');
const cats = require('./file.json');

const app = express();
/*
const cats = [
    {"breed": "tortoiseshell",
    "age": 52,
    "name": "picasso",
    "colour": "brown"},
    {"breed": "British Short Hair",
    "age": 3,
    "name" : "Napoleon",
    "colour": "white"}
]
*/

app.use(express.static('client'));
app.use(express.json());

app.get('/cats', function (req, resp) {
    resp.json(cats);
  });

app.get('/catsearch', function (req, resp) {
    const colour = req.query.colour;
    const searchResults = [];
    for (const cat of cats) {
        if (cat.colour === colour) {
            searchResults.push(cat);
        }
    }
    resp.send(searchResults);
  });

app.get('/cat/:name', function (req, resp) {
    const catName = req.params.name;
    let found = false;
    console.log(catName);
    for (const cat of cats) {
        console.log('Looking for ' + cat.name);
        console.log(cat);
        if (cat.name.toLowerCase() === catName.toLowerCase()) {
            console.log('found it');
            resp.send(cat);
            found = true;
        }
    }
    if (!found) {
        resp.send('Your cat is invisible');
    }
  });

  app.post('/newcat', function (req, resp) {
    const colour = req.body.colour;
    const breed = req.body.breed;
    const name = req.body.name;
    const age = req.body.age;
    const newCat = { name, breed, colour, age };
    cats.push(newCat);
    fs.writeFileSync('./file.json', JSON.stringify(cats));

    resp.send('Tried to add a cat colour ' + colour);
  });

  module.exports = app;

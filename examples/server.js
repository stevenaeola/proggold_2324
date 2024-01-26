const express = require('express')
const app = express()

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
app.use(express.static('client'));

app.get('/', function(req, resp){
    resp.send('Hello golden cats')
  })

app.get('/cats', function(req, resp){
    resp.send(cats);
  })

  
app.get('/catsearch', function(req, resp){
    let colour = req.query.colour;
    let searchResults = [];
    for(let cat of cats){   
        if(cat.colour == colour){
            searchResults.push(cat);
        }
    }
    resp.send(searchResults);
  })

app.get('/cat/:name', function(req, resp){
    let catName = req.params.name;
    let found = false;
    console.log(catName);
    for(let cat of cats){
        console.log("Looking for " + cat.name);
        console.log(cat);
        if(cat.name.toLowerCase() == catName.toLowerCase()){
            console.log("found it");
            resp.send(cat);
            found = true;
        }
    }
    if(!found){
        resp.send("Your cat is invisible");
    }
  })

app.listen(8090)
console.log('Server running at http://127.0.0.1:8090/');
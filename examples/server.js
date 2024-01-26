const express = require('express')
const app = express()

const cats = [
    {"breed": "tortoiseshell",
    "age": 52,
    "name": "picasso",
    "colour": "brown"},
    {"breed": "British Short Hair",
    "age": 2,
    "name" : "Napleon",
    "colour": "white"}
]
app.use(express.static('client'));

app.get('/', function(req, resp){
    resp.send('Hello golden cats')
  })

app.get('/cats', function(req, resp){
    resp.send(cats);
  })

app.listen(8090)
console.log('Server running at http://127.0.0.1:8090/');
const express = require('express')
const app = express()

app.get('/', function(req, resp){
  resp.send('Hello golden cats')
})

app.listen(8090)
console.log('Server running at http://127.0.0.1:8090/');
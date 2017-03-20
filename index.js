const express = require('express')  
const app = express()  
const port = 3000
const path = require('path');

app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve('public/index.html'));
    });

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
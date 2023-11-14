require('dotenv').config();
var express = require('express');
var app = express();
const mySecret = process.env['MESSAGE_STYLE']

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  console.log("Hello world");
  res.sendFile(__dirname + '/views/index.html');
});



app.get('/json', (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "kk"});
    
  } else {
    res.json({"message": "HELLO JSON"});

  }
});

 module.exports = app;
let express = require('express');
require('dotenv').config()

let app = express();


console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})


app.get("/json", (req, res)=>{
    res.json({"message": "Hello json"}.toUpperCase())
})

























 module.exports = app;
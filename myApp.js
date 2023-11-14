let express = require('express');
require('dotenv').config()

let app = express();


console.log("Hello World")

app.use("/public", express.static(__dirname + "/public"))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
})


app.get("/json", (req, res)=>{
    if (process.env.MESSAGE_STYLE==="uppercase") {
        const resp= res.message.toUpperCase()
         res.send(resp)        
    } else {
        const respo = res.message.toLowerCase()
        res.send(respo)
    }
})

























 module.exports = app;
const express = require("express")
const cors = require("cors")
const port = 3000

require("dotenv").config()

const app = express()


app.use(cors())
app.use(express.json())

//database connection

const connection = require("./src/database/connection");

connection(); 


//routes

const routes = require("./src/routes/router");



app.use("/api", routes); 

app.listen(port, function(){
    console.log("Servidor em funcionamento");
})
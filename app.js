const express = require("express");
const cors =require('cors')
const body_parser = require('body-parser');
const rout = require("./rout/ens")
const db = require('./config/db')

const app = express();

const PORT =process.env.PORT || 3000;

app.use(cors());

app.use([body_parser.urlencoded({extended :true}),express.json()])
app.use("/ens",rout)





app.listen(PORT,()=>{
    console.log("run in the port ",PORT)
})
module.exports = app ;
//1id91YQfmON0tGGX
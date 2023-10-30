const express = require("express");
const body_parser = require('body-parser');
const rout = require("./rout/ens")
const db = require('./config/db')

const app = express();

const PORT =process.env.PORT || 3000;

app.use([body_parser.urlencoded({extended :true}),express.json()])
app.use("/ens",rout)

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:tru
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))


app.listen(PORT,()=>{
    console.log("run in the port ",PORT)
})
module.exports = app ;
//1id91YQfmON0tGGX
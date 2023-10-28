const express = require("express");
const body_parser = require('body-parser');
const rout = require("./rout/ens")
const db = require('./config/db')
const mongoose = require('mongoose');

const app = express();

const PORT =process.env.PORT || 3000;

app.use([body_parser.urlencoded({extended :true}),express.json()])


mongoose.connect('mongodb+srv://haideramd205:1id91YQfmON0tGGX@myens.roqdwr9.mongodb.net/MyEns?retryWrites=true&w=majority')
const connection = mongoose.connection;
connection.on('error' , (res,req) => {
    console.log("connected  Erorr")
});
connection.on('connected' , () => {
    console.log("connected with cloud")
});
app.use('/ens',rout)
app.listen(PORT,()=>{
    console.log("run in the port ",PORT)
})
module.exports = app ;
//1id91YQfmON0tGGX
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://haideramd205:1id91YQfmON0tGGX@myens.roqdwr9.mongodb.net/MyEns?retryWrites=true&w=majority')
const connection = mongoose.connection;
connection.on('error' , (res,req) => {
    console.log("connected  Erorr")
});
connection.on('connected' , () => {
    console.log("connected with cloud")
});
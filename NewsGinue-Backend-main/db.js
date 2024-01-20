const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/newsGinue";
// 127.0.0.1
const connectToMongo = ()=>{
    mongoose.connect(mongoURI);
    console.log("connected to monogoDB Successfully !");
} 

module.exports={
    connectToMongo,
}
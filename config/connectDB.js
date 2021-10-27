const mongoose = require ("mongoose");
require("dotenv").config({path:'./config/.env'})
const connectDB = async ()=>{
    try{
        const MONGO_URI = "mongodb+srv://MARWA_GH:95070814@auth.ajnqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
await mongoose.connect(MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log("mongo db connected")
}catch (error){
console.log(`database failed to connected ${error}`)
    }
}
module.exports = connectDB

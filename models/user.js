const mongoose = require('mongoose')

const {Schema , model} = mongoose

const userSchema = new Schema({
    first_name :{type:String , required :true},
    last_name :{type:String , required :true},
    dateofBrith :{type:String , required :true},
    email : {type:String , required :true , unique:true},
    password :{type:String , required :true},
    phone :{type: String , required :true},
    role:{type: String , default:"user"},
    
  })

  
module.exports= User = model ('User' , userSchema)

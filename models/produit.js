const mongoose = require('mongoose')

const {Schema , model} = mongoose

const produitSchema = new Schema({
    image:{type:String , required :true},
    title:{type:String , required :true},
    price :{type: Number , required :true},
    description:{type:String , required :true},
    countInStock: { type:  Number, required: true } ,
    rating: { type: Number, required: true } 
 })
  
module.exports= Produit = model ('Produit' , produitSchema)

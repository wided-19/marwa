const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config({path:'../config/.env'})

const isAuth = async(req,res,next)=>{
    try{
     const token = req.headers['x-auth-token' ]
     if(!token){
         return res.status(400).send({msg:'unauthorized you dont have token '})

     }
     const decoded = await jwt.verify(token,"mySecret")
     // if id exist or not and get it
     const user = await User.findById(decoded.id)
     if(!user){
     return res.status(400).send({msg:"unauthorized "})
     }
     //Get User
     req.user = user
     next()
    }catch(error) {
    return res.status(400).send({msg:'token is not valid'})
    }
}
module.exports = isAuth
const Router = require('express').Router()
const User =require('../models/user')
const isAuth  = require ('../midleware/isAuth')



//get all user

Router.get("/user",isAuth, async(req,res)=>{
    
   try {
       const result = await User.find();
         res.status(200).send({response: result, msg:"geting user succes"})
     } catch(error) {
         res.status(500).send({msg:"can not get user"})
     
    } 
    })

      //getID
  Router.get("/:id" ,isAuth, async(req,res)=>{
    
   try {
    const result = await User.findOne({_id:req.params.id});
       res.status(200).send({response: result, msg:"geting user succes"})
} catch(error) {
       res.status(400).send({msg:"can not get user  id"})
   }
  })

  
  //put user
  Router.put("/:id" ,isAuth ,  async(req,res)=>{

   try {
      const user = await User.findByIdAndUpdate({_id: req.params.id},{$set: {...req.body}})
     res?
        res.status(200).send({msg: "User update", response: user})
     :
       res.status(400).send({msg: " user is not exist"})
      
  } catch (error) {
      return res.status(500).send({msg: "Can not updated user"})
  }
  })

  Router.delete('/:id' ,isAuth , async(req, res) => {
   try {
       const user = await User.findByIdAndDelete({_id: req.params.id})
       res?
       res.status(200).send({msg: "User deleted"})
      
      :
      res.status(400).send({msg: "This user is not exist"})
   } catch (error) {
       return res.status(500).send({msg: "Can not delete user!"})
   }
}
)

 module.exports= Router 
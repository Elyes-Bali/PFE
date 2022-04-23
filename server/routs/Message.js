const express = require("express");
const router = express.Router();
const Message = require("../models/msgSchema");


router.post("/create", async (req, res) => {
    console.log(req.body)
    try {
      const {name ,email,message} = req.body;
    
    
      const sendMsg = new Message({
        name: name,
        email: email,
        message: message,
      });
      const created = await sendMsg.save();
      console.log(created);
      res.status(200).send("Sent");
    } catch (error) {
      res.status(400).send(error);
    }
  });
 
  router.get("/allmess", async (req, res) => {
    try {
      const result = await Message.find();
      res.status(200).send({ mesg: result });
    } catch (error) {
      console.log(error);
    }
  });

  router.delete("/delmess/:id", async(req,res)=>{
     try {
         const result =await Message.deleteOne({_id:req.params.id});
      res.status(200).send({msg:"message deleted successfuly"})
     } catch (error) {
        console.log(error);
     }
  })


 
  module.exports = router;
const express = require("express");
const router = express.Router();
const offerSchema =require("../models/offerSchema");


router.post("/create", async (req, res) => {
    try {
      // Get body or Data
      const {
        userId,
        prjectname,
        budget,
        detail,
        
      } = req.body;
      // console.log(name,email,title,linkedin,github,phone,project,project1,project2,
      //   languages,languages1,languages2,college,summary)
  
      const createofferSchema = new offerSchema({
        userId,
        prjectname,
        budget,
        detail,
        
      });
  
      const created = await createofferSchema.save();
  
      res.send({msg:"Saved succefully"})
  
  
      console.log(created);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  module.exports = router;
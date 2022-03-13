const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const CvInfo = require("../models/cvSchema");

router.post("/resume", async (req, res) => {
  try {
    // Get body or Data
    const {
      userId,
      name,
 
      title,
      linkedin,
      github,
      phone,
      project,
      project1,
      project2,
      languages,
      languages1,
      languages2,
      college,
      summary
    } = req.body;
    // console.log(name,email,title,linkedin,github,phone,project,project1,project2,
    //   languages,languages1,languages2,college,summary)

    const createCvInfo = new CvInfo({
      userId,
      name,
      title,
      linkedin,
      github,
      phone,
      project,
      project1,
      project2,
      languages,
      languages1,
      languages2,
      college,
      summary
    });

    const created = await createCvInfo.save();

    res.send({msg:"Saved succefully"})


    console.log(created);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getallcv", async(req,res) =>{
  try {
    const cvs = await CvInfo.find()
    res.send({result:cvs})
  } catch (error) {
    
  }
})
module.exports = router;

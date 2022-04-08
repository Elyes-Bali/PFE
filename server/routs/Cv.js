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
      summary,
      images
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
      summary,
      images
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
router.put("/update" , async(req,res) => {
  // console.log(req.body)
  try{
    const result= await CvInfo.findByIdAndUpdate({_id:req.body._id},{$set:{...req.body}})
    res.send("user updated")
  }catch(error){
      res.status(400).send({message:"No user with this id"})
  }
}, )
router.get("/:id", async(req,res)=>{
  console.log(req.params.id)
  try {
    const result = await CvInfo.findOne({userId:req.params.id})
    return res.status(200).send({cv:result})
  } catch (error) {
    console.log(error)
  }
})




module.exports = router;

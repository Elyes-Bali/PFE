const express = require("express");
const router = express.Router();
const Comments = require("../models/commSchema");

router.post("/addcom", async (req, res) => {
    console.log(req.body)
    try {
      const {name ,comment,devId,writedbyname,writedbyid} = req.body;
    
    
      const sendCom = new Comments({
        name: name,
        comment: comment,
        devId: devId,
        writedbyname:writedbyname,
        writedbyid:writedbyid
      });
      const created = await sendCom.save();
      console.log(created);
      res.status(200).send("Sent");
    } catch (error) {
      res.status(400).send(error);
    }
  });


  router.get("/allcomm", async (req, res) => {
    try {
      const result = await Comments.find();
      res.status(200).send({ com: result });
    } catch (error) {
      console.log(error);
    }
  });
  module.exports = router;
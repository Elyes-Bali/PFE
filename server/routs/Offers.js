const express = require("express");
const router = express.Router();
const offerSchema = require("../models/offerSchema");

router.post("/create", async (req, res) => {
  try {
    // Get body or Data
    const { createdbyId, createdbyName, prjectname, budget, detail } = req.body;
    // console.log(name,email,title,linkedin,github,phone,project,project1,project2,
    //   languages,languages1,languages2,college,summary)

    const createofferSchema = new offerSchema({
      createdbyId,
      createdbyName,
      prjectname,
      budget,
      detail,
    });

    const created = await createofferSchema.save();

    res.send({ msg: "Saved succefully" });

    console.log(created);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/alloff", async (req, res) => {
  try {
    const result = await offerSchema.find();
    res.status(200).send({ offers: result });
  } catch (error) {
    console.log(error);
  }
});

router.put("/edite/:id", async (req, res) => {
  // console.log(req.body);
  try {
    const result = await offerSchema.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send("offer updated");
  } catch (error) {
    res.status(400).send({ message: "No offer with this id" });
  }
});

router.put("/apply/:id", async (req, res) => {
  // console.log(req.body);
  // console.log(req.params.id);
  await offerSchema.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { postuledby: req.body } }
  );
});

router.put("/deleteapply/:id", async (req, res) => {
  // console.log(req.body._id);
  try {
    offerSchema.findByIdAndUpdate(
      req.params.id,
      { $pull: { postuledby: { _id: req.body._id } } },
     
      function (err, doc) {
        if (!err) {
          res.status(200).send();
        } else {
          res.render("error", { error: err });
        }
      }
    );
  } catch (error) {
    res.status(400).send({ message: "No offer with this id" });
  }
});
router.get('/getone/:id', async(req,res)=>{
  // console.log(req.params.id)
  try {
  const result = await offerSchema.findOne({_id:req.params.id});
  // console.log(result);
  res.status(200).send({ofer : result});
  }catch (error) {
    res.status(400).send({ message: "No offer with this id" });
  
}
})


module.exports = router;

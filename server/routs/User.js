const bcryptjs = require("bcryptjs");
// Require Model
const User = require("../models/userShema");
const isAuth = require("../middleware/authenticate");
const express = require("express");
const router = express.Router();





// Registration
router.post("/register", async (req, res) => {
  try {
    // Get body or Data
    const {username, email, password,role} = req.body;
    console.log(username, email, password,role)

    const createUser = new User({
      username,
      email,
      password,
      role
    });

    // Save Method is Used to Create User or Insert User
    // But Before Saving or Inserting, Password will Hash
    // Because of Hashing. After Hash, It will save to DB
    const created = await createUser.save();
    console.log(created);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Find User if Exist
    const user = await User.findOne({ email: email });

    if (!user) {
     return res.status(400).send({ msg: "Invalid Credentials" });
    }
    // Verify Password
    const isMatch = await bcryptjs.compare(password, user.password);

    if (!isMatch) {
     return res.status(400).send({ msg: "Invalid Credentials" });
    }
    // Generate Token Which is Define in User Schema
    const token = await user.generateToken();
    // res.cookie("jwt", token )
    // res.status(200).send("LoggedIn")
   return  res.status(200).send({ searchedUser: user, token: `Bearer ${token}` });
  } catch (error) {
   return res.status(500).send({ msg: "can not login" });
    console.log(error);
  }
});
//Authentification
router.get("/auth", isAuth(), (req, res) => {
  res.status(200).send({user : req.user})
});

module.exports = router;
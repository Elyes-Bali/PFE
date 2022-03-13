// Import All Dependencies
console.clear();
const cors= require("cors");
const dotenv = require("dotenv");
const express = require("express");

// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;


const Message = require("./models/msgSchema");

// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/user", require ('./routs/User'))
app.use("/api/res",require ('./routs/Cv') )

// Message
app.post("/message", async (req, res) => {
  try {
    // Get body or Data
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    const sendMsg = new Message({
      name: name,
      email: email,
      message: message,
    });

    // Save Method is Used to Create User or Insert User
    // But Before Saving or Inserting, Password will Hash
    // Because of Hashing. After Hash, It will save to DB
    const created = await sendMsg.save();
    console.log(created);
    res.status(200).send("Sent");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Logout Page
// app.get("/logout", (req, res) => {
//   res.clearCookie("jwt", { path: "/" });
//   res.status(200).send("User Logged Out");
// });



// Run server
app.listen(port, () => {
  console.log("Server is Listening");
});

// Our Backend is Done And Store Data in Database
// Now Its Time to Connect Front End With BackEnd

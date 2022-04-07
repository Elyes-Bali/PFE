// Import All Dependencies
console.clear();
const cors= require("cors");
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
// const jwt = require("jsonwebtoken");


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

// app.use("/photoimgs", express.static("./photoimgs"));
app.use('/photoimgs', express.static(path.join(__dirname, 'photoimgs')));
app.use("/api/user", require ('./routs/User'))
app.use("/api/user/upload",require("./routs/PhotoImgsUpload"));
app.use("/api/res",require ('./routs/Cv') )
app.use("/api/offer",require ('./routs/Offers') )

// app.post("/upload", (req, res) => {
//   // use modules such as express-fileupload, Multer, Busboy
  
//   setTimeout(() => {
//       console.log('file uploaded')
//       return res.status(200).json({ result: true, msg: 'file uploaded' });
//   }, 3000);
// });

// app.delete("/upload", (req, res) => {
//   console.log(`File deleted`)
//   return res.status(200).json({ result: true, msg: 'file deleted' });
// });

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

// app.use('/api/us')



// Run server
app.listen(port, () => {
  console.log("Server is Listening");
});

// Our Backend is Done And Store Data in Database
// Now Its Time to Connect Front End With BackEnd

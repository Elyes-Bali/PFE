"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendemail=async(opts)=> {

  // let testAccount = await nodemailer.createTestAccount();


  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER, // generated ethereal user
      pass: process.env.GMAIL_PASSWORD, // generated ethereal password
    },
  });
  
  let info ={
    // from: '"Admin 👻" <opportunity@example.com>', // sender address
    to:opts.email, // list of receivers
    subject: opts.subject, // Subject line
    text: opts.message, // plain text body
    // html: "<b>Hello world?</b>", // html body
  };
  await transporter.sendMail(info);
  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}

module.exports = sendemail;
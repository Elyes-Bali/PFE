const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const CvInfo = require("../models/cvSchema");


router.post("/profile", async (req, res) => {
    try {
      // Get body or Data
      const name = req.body.name;
      const email = req.body.email;
      const title = req.body.title;
      const linkedinLink = req.body.linkedinLink;
      const githubLink = req.body.githubLink;
      const phone = req.body.phone;
      const companyName = req.body.companyName;
      const certificate = req.body.certificate;
      const location = req.body.location;
      const startDate = req.body.startDate;
      const endDate = req.body.endDate;
      const workDes = req.body.workDes;
      const overview = req.body.overview;
      const depLink = req.body.depLink;
      const projectDes = req.body.projectDes;
      const college = req.body.college;
      const achievements = req.body.achievements;
      const summary = req.body.summary;
      const other = req.body.other;
  
      const createCvInfo = new CvInfo({
        name: name,
        email: email,
        title: title,
        linkedinLink: linkedinLink,
        githubLink: githubLink,
        phone: phone,
        companyName: companyName,
        certificate: certificate,
        location: location,
        startDate: startDate,
        endDate:endDate,
        startDate: startDate,
        workDes: workDes,
        overview: overview,
        depLink: depLink,
        projectDes: projectDes,
        college: college,
        achievements: achievements,
        summary: summary,
        other: other,
      });

      const created = await createCvInfo.save();
    console.log(created);
    } catch (error) {
      res.status(400).send(error);
    }
  });
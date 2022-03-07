const mongoose = require('mongoose');
const bcryptjs  = require('bcryptjs');
const jwt  = require('jsonwebtoken');

//CV Schema Or Document Structure
const cvSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
        
    },
    title : {
        type : String,
        required : true,
        
    },
    linkedinLink : {
        type : String,
        required : true
    },
    githubLink : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type :Number,
        required : true
    },
    companyName : {
        type : String,
        required : true
    },
    certificate : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    startDate : {
        type : Date,
        required : true
    },
    endDate : {
        type : Date,
        required : true
    },
    workDes : {
        type : String,
        required : true
    },
    overview : {
        type : String,
        required : true
    },
    depLink : {
        type : String,
        required : true
    },
    projectDes : {
        type : String,
        required : true
    },
    college : {
        type : String,
        required : true
    },
    achievements : {
        type : String,
        required : true
    },
    summary : {
        type : String,
        required : true
    },
    other : {
        type : String,
        required : true
    },
})
cvSchema.pre('save', async function(next){
    next();
}),
module.exports = CvInfo =  mongoose.model("CV", userSchema);
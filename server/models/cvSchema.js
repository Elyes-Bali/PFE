const mongoose = require('mongoose');

//CV Schema Or Document Structure
const cvSchema = new mongoose.Schema({
    userId : {
        type : String,
        
        
    },


    name : {
        type : String,
        
        
    },
    title : {
        type : String,
       
        
    },
    linkedin : {
        type : String,
        
    },
    github : {
        type : String,
        
    },
    phone : {
        type :Number,
      
    },
    project : {
        type : String,
        
    },
    project1 : {
        type : String,
       
    },
    project2 : {
        type : String,
        
    },
    languages : {
        type : String,
        
    },
    languages1 : {
        type : String,
       
    },
    languages2 : {
        type : String,
        
    },
    college : {
        type : String,
       
    },
    summary : {
        type : String,
      
    },
    images : [Object] 
},{timestamps:true});

module.exports = CvInfo =  mongoose.model("CV", cvSchema);
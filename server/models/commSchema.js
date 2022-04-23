const mongoose = require ('mongoose');


const commentSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },
    comment : {
        type : String,
        
    },
    devId:{
        type:String
    },
    writedbyid:{
        type:String
    },
   
    date :{
        type : Date,
        default: Date.now()
    },
  
})



module.exports = Comments = new mongoose.model("comment", commentSchema);
const mongoose = require ('mongoose');


//User Schema Or Document Structure
const msgSchema = new mongoose.Schema({
    name : {
        type : String,
        
    },
    email : {
        type : String,
        
    },
    message : {
        type : String,
        
    },
  
    
})



module.exports = Message = new mongoose.model("message", msgSchema);
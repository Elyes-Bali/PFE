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



// Create Model
const Message = new mongoose.model("MESSAGE", msgSchema);

module.exports = Message;
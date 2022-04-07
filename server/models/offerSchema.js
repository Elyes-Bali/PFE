const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "userShema"
        
    },
    prjectname : {
        type : String,
        
        
    },
    budget : {
        type : Number,
       
        
    },
    detail : {
        type : String,
        
    },
    date :{
        type : Date,
        default: Date.now()
    },
    isAffectted:{
        type : Boolean,
        default : false 
    }
  
},{timestamps:true});
module.exports = OfferInfo =  mongoose.model("OFFER", offerSchema);
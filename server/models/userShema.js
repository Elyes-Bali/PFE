const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//User Schema Or Document Structure
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    // required : true,
    // unique : true
  },
  email: {
    type: String,
    // required : true,
    // unique : true,
  },
  password: {
    type: String,
    // required : true
  },
  role: {
    type: String,
  },

  pic: {
    type: String,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
  phone: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zip: {
    type: String,
  },
  haveCv:{
    type:Boolean,
    default:false ,
  }
  // tokens : [
  //     {
  //         token : {
  //             type : String,
  //             required : true
  //         }
  //     }
  // ]
});

// Hashing Password to Secure
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

// Generate Tokens to Verify User
userSchema.methods.generateToken = async function () {
  try {
    const generatedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    // this.tokens = this.tokens.concat({token : generatedToken});
    // await this.save();
    return generatedToken;
  } catch (error) {
    console.log(error);
  }
};

// Create Model
module.exports = Users = mongoose.model("USER", userSchema);

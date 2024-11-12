import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

name:{
   type : String,
   required :[ true,"Provide name" ]
},
email:{
    type :String,
    required : [true,"provide email"],
    unique : true
},
password : {
    type:String,
    required:[true, "provide password"]
},
avatar : {
    type : String,
    default: ""
},
mobile:{
    type :Number,
    default: null

},
refresh_token:{
    type : String,
    default : ""
},
verify_email : {
    type : Boolean,
    default  :false
},
last_login_date:{
    type:Date,
    default: ""
},
status: 



})
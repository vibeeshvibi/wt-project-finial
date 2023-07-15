const mongoose=require('mongoose');
const attSchema=new mongoose.Schema({
    Rollno:Number,
    Name:String,
    email:String,
    pass:String,
    att:String,
 
});
module.exports.att=mongoose.model("att",attSchema);
const mongoose=require('mongoose');
const attSchema=new mongoose.Schema({
    Name:String,
    email:String,
    pass:String,
    isAdmin:Boolean,
});
module.exports.att=mongoose.model("aAtt",attSchema);
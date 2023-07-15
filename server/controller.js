const {att} = require('./s_schema')
const {aatt} = require('./a_schema')
module.exports.insertstd=async(req,res)=>{
    try{

    const std=new att({
        Rollno:Number(req.body.RollNo),
        Name:req.body.Name,

    });
    console.log(req.body.RollNo);
    const Att=await att.findOne({Rollno:Number(req.body.RollNo)});
    if(Att)
     return res.send({msg:" exist in db"});
    const saved_std=await std.save();
    console.log(saved_std);
    res.send(saved_std);
} catch (err){
    console.log(err.message)
}
}
module.exports.getall=async(req,res)=>{
    const atts=await att.find({});
    res.send(atts);
}
module.exports.login=async(req,res)=>{
    try{
    const atts=await att.findOne({email:req.body.email});
    if(!atts)
    res.send({msg:'User not found'})
    if(atts.pass!=req.body.pass){
        res.send({msg:'Incorrect password'})
    }
    res.send(atts);}
    catch(err){}
}
module.exports.getone=async(req,res)=>{
    const fatt=await att.findOne({Rollno:Number(req.params.Rollno)})
    if(fatt) res.send(fatt)
    else
    res.send({msg:"Not Found"})
}
module.exports.update=async(req,res)=>{
    const uatt=await att.findOneAndUpdate({Rollno:Number(req.params.Rollno)},{...req.body})
    if(uatt) res.send(uatt)
    else
    res.send({msg:"Not Found"})
}
module.exports.delete=async(req,res)=>{
    const uatt=await att.findOneAndDelete({Rollno:Number(req.params.Rollno)})
    if(uatt) res.send({msg:"Deleted Succesfully"})
    else
    res.send({msg:"Not Found"})
}

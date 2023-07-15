const express=require('express');
const {connectdb}=require('./connect');
const attscontroller=require('./controller')
const app=express();
const cors=require('cors')
app.use(cors())
app.use(express.json());


connectdb()
.then(()=>console.log("connected"))
.catch(err=>console.log(err));


app.post('/api/atts',attscontroller.insertstd);
app.get('/api/atts',attscontroller.getall);
app.post('/api/atts/login',attscontroller.login);
app.get('/api/atts/:Rollno',attscontroller.getone);
app.put('/api/atts/:Rollno',attscontroller.update);
app.delete('/api/atts/:Rollno',attscontroller.delete);
const port=8989;
app.listen(port,()=>{
    console.log("listening");
})




















// 
// 
const express = require("express");
const app = express();
const db = require('./config/mongoose');
const User = require('./model/User')
const path = require('path');
const port = 8000;


app.use(express.urlencoded());
app.use('/',require('./routes'));
app.set('view engine','ejs');
app.use(express.static('assets'));
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{

  return res.render('Contact')
  
})
app.post('/create-contact',(req,res)=>(

  User.create({
    name: req.body.name,
    email: req.body.email,
    pnumber : req.body.pnumber,
    pincode:req.body.pincode,
    address : req.body.address,
    items : req.body.items

      },function(err,newContact){
        if(err){
        console.log('Error In Creating The Contact'+err);
        return;
      }
    console.log('************',newContact);
    return res.redirect('back');
})

))

app.listen(port,function(err){

  if(err){
      console.log(`Error In RUnning Sever: ${err}`);
  }
  console.log(`Sever Is Running On ${port}`);
})


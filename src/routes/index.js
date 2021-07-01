const {Router}=require('express')
const routes=Router();

routes.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('index.html',{title:'First Wevsite'});
});
  
routes.get('/contact',(req,res)=>{
    // res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('contact.html',{title:'Contact Page'});
});
module.exports=routes;
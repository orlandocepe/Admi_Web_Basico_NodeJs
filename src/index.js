require('dotenv').config()
const express=require("express")
const app=express();
const path=require('path');
//const port=process.env.PORT;
app.set('port',8080);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
//app.engine('html',require('ejs').renderFile('./views/partials'));
app.set('view engine','ejs');

app.use(require('./routes/index'))

app.use(express.static( path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
    console.log("Escuchado en el puerto",app.get('port'))
});

// app.listen(port,()=>{
//     console.log("Escuchado en el puerto",port)
// });
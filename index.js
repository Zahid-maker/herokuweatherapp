const https = require('https');
const path = require('path');
const express = require('express');
const hbs = require('hbs')
const app = express();
const port = process.env.PORT | 3000;

//public path (static files)
app.use(express.static(path.join(__dirname,"public")));

// template engine
 app.set('view engine','hbs');
app.set('views',path.join(__dirname,"/templates/views"));

hbs.registerPartials(path.join(__dirname,"/templates/partials"));

app.get('/',(req,res)=>{
    res.render("index.hbs");
});

app.get('/about',(req,res)=>{
    res.render("about.hbs")
});
app.get('/weather',(req,res)=>{
    res.render('weather')
});

app.get('*',(req,res)=>{
res.render("404error",{
    errorMsg:"Opps! Page Not Found"
});
});

app.listen(port,(req,res)=>{
    console.log("connected!");
});
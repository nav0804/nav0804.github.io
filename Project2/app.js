const express=require("express")

const app= express();
const path=require('path')

app.use(express.static( path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home.ejs');
})

app.get('/projects',(req,res)=>{
    res.render('projects.ejs')
})

app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.get('/contact',(req,res)=>{
    res.render('contact.ejs')
})

app.listen(3000,()=>{
    console.log("On port 3000!")
})
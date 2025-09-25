const express = require('express')
const morgan = require('morgan')
const app= express()
const  serModel=require('./modals/user')
const dbconnection=require('./config/db')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static("public"))

app.set("view engine",'ejs')
 
app.get('/',(req,res)=>{
    res.render('hi')
    
})

app.get('/register',(req,res)=>{
    res.render('register')
    
})

app.post('/register',async (req,res)=>{
    const {username,email,password}=req.body
  await serModel.create({
          username: username,
          email: email,
          password: password,

    })

    
    res.send("user register")
})

app.post('/get-from-data',(req,res)=>{
    console.log(req.body)
    res.send('hi')
})

app.listen(3000)
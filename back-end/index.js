const express= require('express')
const app=express()
const bodyParser=require('body-parser')
const path=require('path')
const API=require('./src/routers/api')

app.set('view engine','ejs')
app.set('views','views')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(API)

app.listen(3000)
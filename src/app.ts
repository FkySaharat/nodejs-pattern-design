import express from 'express'
import apiRoute from './apiRoute';
const app = express()

const PORT =8080;

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/api',apiRoute)

app.listen(PORT,()=>{
    console.log("Open web on port:",PORT)
})
const express = require('express')
const app = express();          // Here app is a handler Function
const student = require('./Routes/student');
const teacher = require('./Routes/teacher')
const path = require('path');


app.get("/",(req, res)=>{
    return res.send('Hello From Home Page ')
})

app.use('/student', student)
app.use('/teacher', teacher)

app.listen(8000,()=>{
    console.log("Server Started");
})

const express = require('express')
const app = express()
const port = 8000;
const mongoose = require('mongoose')
const userRouter = require('./route/user')
const {logReqResp }= require('./middleware/index')  // we may use /index  it is by default / optional.




//      Connection
const {connectMongodb} = require('./connection')
connectMongodb('mongodb://127.0.0.1:27017/you-tube-app-1')
.then(()=>{
    console.log("MongoDb get connected");
})



// MIDDLEWARE
app.use(express.urlencoded({ extended: false }))
app.use(logReqResp('log.txt'))

//Routes
app.use("/",userRouter)



app.listen(port, () => {
    console.log("Server Start at port " + port);
})
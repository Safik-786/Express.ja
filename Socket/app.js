const express = require ('express')
const app = express()
const port = 3000
const server = app.listen(port,()=>console.log( `Server is started on Port ${port}`))
const io = require("socket.io")(server)
const path = require('path')
const router = express.Router()




// let app = require('express')()
// // const app = express()
// const http = require('http').Server(app);
// http.listen(3000, function(){
//     console.log('server is ready on 3000')
// })


const absolutePath = path.join(__dirname,"./public" )
console.log(absolutePath)
// app.use(express.static(absolutePath))
app.use(express.static('public'))


io.on('connection',(socket)=>{
    console.log('a user connected having id ='+ socket.id)
    setTimeout(()=>{
        socket.send("send message from server side by prereserved events")
    },3000)
    socket.emit("customServerSide", {description: "hii i am safik from server side"})
    socket.on('disconnect', ()=>{
        console.log("user gonna disconnect having id="+ socket.id)
    })
    socket.on('customClientSide',(data)=>{
        console.log('message from client side')
        console.log(data.name)
        console.log(data.age)
    })
})


// app.get('/index', (req,resp)=>{
//     resp.sendFile('public/index.html')     // it is by default if we dont use it fine
// })

app.use('/', router)

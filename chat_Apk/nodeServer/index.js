// Node Server Which will handle WebSocket.io library


const { log } = require('console')
const express = require ('express')
const app = express()
const path = require('path')
const port = 8000
const server = app.listen(port,()=>console.log( `Server is started on Port ${port}`))
const io = require("socket.io")(server)


            // Debugging code
// console.log(__dirname)
// console.log(path.join(__dirname,"./public"));
// console.log(path.join(__dirname,"../","./public"));


        //  Rendering our html page to server
        
const publicPath = path.join(__dirname,"../public")
app.use(express.static(publicPath))



let connectedSocketCount= new Set()

io.on('connection', onConnection)               // connection event is a predefined event

function onConnection(socket){          // the argument "socket" can be anything

    
    console.log("New User: "+ socket.id);
    connectedSocketCount.add(socket.id)

    io.emit('clients-total',connectedSocketCount.size )

    socket.on('disconnect',()=>{                    // disconnect is also a predefined event
        console.log('user Disconnected of id  '+ socket.id);
        connectedSocketCount.delete(socket.id)
        // after dis connected it will fire event
        io.emit('clients-total',connectedSocketCount.size)
    })

    socket.on('message',(data)=>{
        console.log("data"+data);        
        socket.broadcast.emit('chat-message', data)
    })

}




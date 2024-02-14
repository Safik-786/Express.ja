const express = require('express')
const app = express()
const port = 3000;
const sendEmail = require('./Controllers/sendEmail')

app.get('/', (req, resp) =>{
    resp.send('i am a Server')
})
app.get('/sendemail', sendEmail)


const start = async () => {
    try {
        app.listen(port,()=>{
            console.log("I am run on port no. " + port)
        })
    } catch (error) {
        
    }
}

start()

// we listen the server like this because of time complexity(use async await)
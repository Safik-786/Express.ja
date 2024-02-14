const express = require('express')
const app = express();          // Here app is a handler Function
const path = require('path');


app.get("/",(req, res)=>{
    return res.sendFile(path.join(__dirname, "index.html"))
    return res.send('Hello From Home Page ')
})
app.get("/html",(req, res)=>{
    return res.send('<h2>Hello From html Page</h2>')
})
app.get("/home",(req, res)=>{
    // const filepath2 =  path.join(__dirname, "abc/index.html")
    // console.log(filepath2)
    const filepath =  path.join(__dirname, "home.html")
    return res.sendFile(filepath)
})
app.get("/about",(req, res)=>{
    return res.sendFile(path.join(__dirname, "about.html"))
    // return res.send(`Hello From About Page myself ${req.query.name} and my age: ${req.query.age}`)
})
app.get("/test",(req, res)=>{
    let data={
        name: 'safik',
        age: 23,
        fname: 'rafik'
    }
    return res.send(data)
})


// ------------------------------------------------------------------------------------------------------------
//                                                  very important


app.get("/download" ,(req, res)=>{
    res.download(path.resolve(__dirname, './about.html'))

})
app.listen(8000,()=>{
    console.log("Server Started");
})

const express = require('express')
const app = express();          // Here app is a handler Function
const path = require('path')



app.use(express.static('public'))

// set the ejs to our node.js
app.set("view engine", "ejs")

// how to get
console.log(app.get("view engine"))


// app.set('views' ,path.resolve(__dirname + "/template/views"))
// console.log(app.get("views"))

app.get("/",(req, res)=>{
    res.render('index',{
        title: "my Home page"
    })
})
app.get("/about",(req, res)=>{
    return res.render('about',{
        title:' my About Page'
    })
})

app.listen(3000, ()=>{
    console.log("server started at port 8000")
})
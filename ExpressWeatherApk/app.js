
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
        title:"Home Page"
    })
})
app.get("/about",(req, res)=>{
    return res.render('about',{
        title:'About Us Page'
    })
})
app.get("/weather",(req, res)=>{
    return res.render('weather',{
        title:'Weather Page'
    })
})

let data=[
    {
        "name": 'safik',
        "age": 21,
        'fname': 'rafik', 
        'language':'js, python'
    },
    {
        "name": 'rahul',
        "age": 25,
        'fname': 'sohel', 
        'language':'js, python'
    },
]

app.get("/api",(req, res)=>{
    // return res.json({"name":"safik", "roll":"21"})
    return res.json(data)
})

app.get("*",(req, res)=>{
    return res.render('404error',{
        errorMessage:'404 Page Not Found'
    })
})

app.listen(3000, ()=>{
    console.log("server started at port 3000")
})
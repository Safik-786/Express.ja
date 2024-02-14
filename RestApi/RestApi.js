const fs = require('fs')
const express = require('express')
const users =require('./MOCK_DATA.json')
const app = express();
const PORT = 8002;

                        // Routing

app.get('/',(req, resp)=>{
    resp.end('hii am Home Page')
})

// GET /users - List All users (render html document)
app.get("/users",(req,resp)=>{
    const html = `
        <ul>
            ${users.map((user)=>{
                return `<li> ${user.first_name}</li>`
            }).join('')}

        </ul>
    `
    resp.send(html);
});

// GET /api/users - List All users (render json)  for mobile user
app.get("/api/users",(req,resp)=>{
    // resp.setHeader("X-myName","safix md")
    return resp.json(users)
})

// app.get("/api/users/:id",(req,resp)=>{
//     const id = Number(req.params.id)                // get id variable of url
//     // it will give string so we need to convert it into String
//     const user = users.find((val)=>{
//         return (val.id===id)
//     })
//     console.log(user);
//     return resp.json(user)
// })

app.route("/api/users/:id")
.get((req,resp)=>{
    const id = Number(req.params.id)                // get id variable of url
    // it will give string so we need to convert it into number
    const user = users.find((val)=>{
        return (val.id===id)
    })
    console.log(user);
    return resp.json(user)
})
.patch((req,res) => {})
.delete((req,res) => {})

// ======================================================================================================================


app.use(express.urlencoded({extended : false }))
        // Middleware  or wecan say Plugin

app.post("/api/users",(req,res)=>{
    const body =req.body;
    users.push({ id : users.length+1 , ...body})
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err, data)=>{
        console.log("hello Done    "+data);
        console.log(err)
        return res.json({status: "successful" , id : users.length})
    })
    
})

app.listen(PORT,()=>console.log(`Server Started at port 8002`))
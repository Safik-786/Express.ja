const express = require('express')
const app = express()
const port = 8000;
const fs = require('fs')
// const users = require('./MOCK_DATA.json');
const mongoose = require('mongoose')

//      Connection


mongoose
    .connect('mongodb://127.0.0.1:27017/you-tube-app-1')       //you-tube-app-1  -> database name
    .then(() => console.log("mongodb is connected"))
    .catch((err) => console.log('Mongo Error ' + err))




// Define a schema structure

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        // required :false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },

}, { timestamps: true });

// CREATE A MODEL CLASS
const User = new mongoose.model('user', userSchema)



// MIDDLEWARE
app.use(express.urlencoded({ extended: false }))

app.get("/user/data", async (req, resp) => {
    const allDbUser = await User.find({})
    const html = `
    <ul>
            ${allDbUser.map((user) => {
        return `<li> ${user.firstName} - ${user.email}</li>`
    }).join('')}                
            
            </ul>
            `
    // join method add an empty white space after each iteration of map function
    resp.send(html);
})



app.get("/user/api", async (req, resp) => {
    const allDbUser = await User.find({})
    return resp.json(allDbUser)
})


app.route("/user/api/:id")
    .get(async (req, resp) => {

        const user = await User.findById(req.params.id);
        console.log(user);
        return resp.json(user)
    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
        return res.json('Success')
    })
    // to update last name we have to insert _id value(from database) to the url(in place of ":id")

    .delete(async (req, resp) => {
        await User.findByIdAndDelete(req.params.id)
        return resp.json({ status: "success" })
    })
//to delete we have to give _id :___   value from database in url


app.post("/user", async (req, resp) => {
    const body = req.body;
    console.log(req.body)
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
        return resp.status(400).json({ msg: " All fields are require . fill up all " })
    }
    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
        jobTitle: body.job_title
    })

    // console.log(result);
    return resp.status(201).json({ msg: "Success" })

});





app.listen(port, () => {
    console.log("Server Start at port " + port);
})
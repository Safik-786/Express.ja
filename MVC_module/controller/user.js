const User = require('../model/user')

async function home(req, resp){
    
}
async function handleGetAllUsers(req, resp){
    const allDbUser= await User.find({})
    return resp.json(allDbUser)
}
async function handleGetUserById(req, resp){
    const user = await User.findById(req.params.id);
    console.log(user);
    return resp.json(user)

}
async function handleUpdateUserById(req, resp){
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" })
    return resp.json({status:' Changed Successffully'})
}
async function handleDeleteUserById(req, resp){
    await User.findByIdAndDelete(req.params.id)
    return resp.json({ status: "Delete successfully" })
}
async function handleCreateNewUser(req, resp){
    const body = req.body;
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
    return resp.status(201).json({ msg: "Success" , id: result._id})

}





module.exports={
    handleGetAllUsers, handleGetUserById ,handleUpdateUserById , handleDeleteUserById , handleCreateNewUser
}
const express = require("express")
const path = require('path');
const { handleGetAllUsers, handleGetUserById,
    handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controller/user')
    
    
const router = express.Router()

router.
    get('/',(req, resp)=>{
        console.log(__dirname)
        // path = path.join(__dirname,)
        const fileName= path.join(__dirname, '../views/index.html')
        return resp.sendFile(fileName, function (err) {
            if (err) {
                console.error('Error sending file:', err);
            } else {
                console.log('Sent:', fileName);
            }
        });
    })
    

router.route('/mvc/user')
    .get( handleGetAllUsers)
    .post( handleCreateNewUser)


router.route("/mvc/user/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

    module.exports =router

    





const express= require('express')
const router= express.Router()


router.get('/all',(req,res)=>{
    res.send('All Student')
})
router.post('/create',(req,res)=>{
    res.send('New Student Created')
})
router.put('/update',(req,res)=>{
    res.send(' Student Updated')
})
router.delete('/delete',(req,res)=>{
    res.send('Student Deleted')
})

module.exports = router
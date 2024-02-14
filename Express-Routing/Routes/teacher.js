
const express= require('express')
const router= express.Router()


router.get('/all',(req,res)=>{
    res.send('All teacher')
})
router.post('/create',(req,res)=>{
    res.send('New teacher Created')
})
router.put('/update',(req,res)=>{
    res.send(' teacher Updated')
})
router.delete('/delete',(req,res)=>{
    res.send('teacher Deleted')
})

module.exports = router
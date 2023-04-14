const express=require('express')
const router=express.Router()
const adminController= require('../controllers/adminController')



router.post('/adminLogin',adminController.adminLogin)

router.get('/getUserDetails',adminController.getUserDetails)

router.delete('/deleteUser',adminController.deleteUser)
router.get('/edituser',adminController.editUser)
router.put('/edit',adminController.editSubmit)

module.exports=router
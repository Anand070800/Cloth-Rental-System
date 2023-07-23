const express=require("express");
const router=express.Router();
const {add_profile_picture}=require('../controllers/add_profile_picture')
router.post('/',add_profile_picture);
module.exports=router; 
const express=require("express");
const router=express.Router();
const {add_aadhar_address}=require('../controllers/add_aadhar_address')
router.post('/',add_aadhar_address);
module.exports=router;
const express=require("express");
const router=express.Router();
const {check_aadhar_address}=require('../controllers/check_aadhar_address')
router.post('/',check_aadhar_address);
module.exports=router;
const express=require("express");
const router=express.Router();
const {verifiyOtp}=require('../controllers/verifiyOtp');
router.post('/',verifiyOtp);
module.exports=router;
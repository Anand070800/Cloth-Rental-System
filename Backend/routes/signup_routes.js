const express=require("express");
const router=express.Router();
const {signup}=require('../controllers/signup')
const {check_password}=require('../middlewres/check_password')
router.post('/',check_password,signup);
module.exports=router;
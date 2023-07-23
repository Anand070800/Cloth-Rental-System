const express=require("express");
const router=express.Router();
const {blocked_user}=require('../../controllers/Admin/blocked_user')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,blocked_user);
module.exports=router;
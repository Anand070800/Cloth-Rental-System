const express=require("express");
const router=express.Router();
const {blocked_seller}=require('../../controllers/Admin/blocked_seller')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,blocked_seller);
module.exports=router;
const express=require("express");
const router=express.Router();
const {blocked_cloth}=require('../../controllers/Admin/blocked_cloth')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,blocked_cloth);
module.exports=router;
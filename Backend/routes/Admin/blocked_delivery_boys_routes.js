const express=require("express");
const router=express.Router();
const {blocked_delivery_boys}=require('../../controllers/Admin/blocked_delivery_boys')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,blocked_delivery_boys);
module.exports=router;
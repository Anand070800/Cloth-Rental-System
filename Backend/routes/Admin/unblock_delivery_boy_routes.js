const express=require("express");
const router=express.Router();
const {unblock_delivery_boy}=require('../../controllers/Admin/unblock_delivery_boy');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,unblock_delivery_boy);
module.exports=router;
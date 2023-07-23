const express=require("express");
const router=express.Router();
const {unblock_seller}=require('../../controllers/Admin/unblock_seller');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,unblock_seller);
module.exports=router;
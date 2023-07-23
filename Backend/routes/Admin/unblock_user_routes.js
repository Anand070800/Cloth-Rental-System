const express=require("express");
const router=express.Router();
const {unblock_user}=require('../../controllers/Admin/unblock_user');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,unblock_user);
module.exports=router;
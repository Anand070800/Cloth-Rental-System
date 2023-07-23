const express=require("express");
const router=express.Router();
const {block_user}=require('../../controllers/Admin/block_user');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,block_user);
module.exports=router;
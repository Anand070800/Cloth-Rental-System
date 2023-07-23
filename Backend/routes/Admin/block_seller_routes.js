const express=require("express");
const router=express.Router();
const {block_seller}=require('../../controllers/Admin/block_seller');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,block_seller);
module.exports=router;
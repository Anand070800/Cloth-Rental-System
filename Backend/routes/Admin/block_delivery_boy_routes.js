const express=require("express");
const router=express.Router();
const {block_delivery_boy}=require('../../controllers/Admin/block_delivery_boy');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,block_delivery_boy);
module.exports=router;
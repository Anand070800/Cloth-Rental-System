const express=require("express");
const router=express.Router();
const {block_cloth}=require('../../controllers/Admin/block_cloth');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,block_cloth);
module.exports=router;
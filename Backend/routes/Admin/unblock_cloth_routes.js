const express=require("express");
const router=express.Router();
const {unblock_cloth}=require('../../controllers/Admin/unblock_cloth');
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,unblock_cloth);
module.exports=router;
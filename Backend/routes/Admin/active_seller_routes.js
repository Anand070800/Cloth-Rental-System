const express=require("express");
const router=express.Router();
const {active_seller}=require('../../controllers/Admin/active_seller')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,active_seller);
module.exports=router;
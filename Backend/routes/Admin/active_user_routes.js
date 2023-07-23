const express=require("express");
const router=express.Router();
const {active_user}=require('../../controllers/Admin/active_user')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,active_user);
module.exports=router;
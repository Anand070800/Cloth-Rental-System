const express=require("express");
const router=express.Router();
const {active_cloth}=require('../../controllers/Admin/active_cloth')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,active_cloth);
module.exports=router;
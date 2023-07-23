const express=require("express");
const router=express.Router();
const {active_delivery_boys}=require('../../controllers/Admin/active_delivery_boys')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,active_delivery_boys);
module.exports=router;
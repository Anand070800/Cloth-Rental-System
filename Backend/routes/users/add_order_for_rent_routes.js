const express=require("express");
const router=express.Router();
const {add_order_for_rent}=require('../../controllers/users/add_order_for_rent');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,add_order_for_rent);
module.exports=router;
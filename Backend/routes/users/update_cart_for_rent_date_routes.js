const express=require("express");
const router=express.Router();
const {update_cart_for_rent_date}=require('../../controllers/users/update_cart_for_rent_date');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,update_cart_for_rent_date);
module.exports=router;
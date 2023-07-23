const express=require("express");
const router=express.Router();
const {inc_cart_quantity_rent}=require('../../controllers/users/inc_cart_quantity_rent');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,inc_cart_quantity_rent);
module.exports=router;
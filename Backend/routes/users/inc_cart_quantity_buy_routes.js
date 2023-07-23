const express=require("express");
const router=express.Router();
const {inc_cart_quantity_buy}=require('../../controllers/users/inc_cart_quantity_buy');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,inc_cart_quantity_buy);
module.exports=router;
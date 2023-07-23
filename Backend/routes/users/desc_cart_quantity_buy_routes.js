const express=require("express");
const router=express.Router();
const {desc_cart_quantity_buy}=require('../../controllers/users/desc_cart_quantity_buy');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,desc_cart_quantity_buy);
module.exports=router;
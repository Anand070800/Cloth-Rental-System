const express=require("express");
const router=express.Router();
const {add_to_cart_for_buy}=require('../../controllers/users/add_to_cart_for_buy');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,add_to_cart_for_buy);
module.exports=router;
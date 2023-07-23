const express=require("express");
const router=express.Router();
const {delete_cart_for_buy}=require('../../controllers/users/delete_cart_for_buy');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,delete_cart_for_buy);
module.exports=router;
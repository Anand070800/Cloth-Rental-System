const express=require("express");
const router=express.Router();
const {get_cart_for_buy}=require('../../controllers/users/get_cart_for_buy')
const {checkAuthUser}=require('../../middlewres/check_Auth')
router.post('/',checkAuthUser,get_cart_for_buy);

module.exports=router;
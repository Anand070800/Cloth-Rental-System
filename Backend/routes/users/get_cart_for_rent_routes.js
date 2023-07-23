const express=require("express");
const router=express.Router();
const {get_cart_for_rent}=require('../../controllers/users/get_cart_for_rent')
const {checkAuthUser}=require('../../middlewres/check_Auth')
router.post('/',checkAuthUser,get_cart_for_rent);
module.exports=router;
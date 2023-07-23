const express=require("express");
const router=express.Router();
const {delete_cart_for_rent}=require('../../controllers/users/delete_cart_for_rent');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,delete_cart_for_rent);
module.exports=router;
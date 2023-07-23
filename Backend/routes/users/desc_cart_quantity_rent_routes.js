const express=require("express");
const router=express.Router();
const {desc_cart_quantity_rent}=require('../../controllers/users/desc_cart_quantity_rent');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,desc_cart_quantity_rent);
module.exports=router;
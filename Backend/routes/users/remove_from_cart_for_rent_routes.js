const express=require("express");
const router=express.Router();
const {remove_from_cart_for_rent}=require('../../controllers/users/remove_from_cart_for_rent');
router.post('/',remove_from_cart_for_rent);
module.exports=router;
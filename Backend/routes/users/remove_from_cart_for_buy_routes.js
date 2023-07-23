const express=require("express");
const router=express.Router();
const {remove_from_cart_for_buy}=require('../../controllers/users/remove_from_cart_for_buy');
router.post('/',remove_from_cart_for_buy);
module.exports=router;
const express=require("express");
const router=express.Router();
const {get_seller_order_details_for_rent}=require('../../controllers/sellers/get_seller_order_details_for_rent')
const {checkAuthSeller}=require('../../middlewres/check_Auth')
router.post('/',checkAuthSeller,get_seller_order_details_for_rent);
module.exports=router;
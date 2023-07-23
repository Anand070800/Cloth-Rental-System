const express=require("express");
const router=express.Router();
const {get_seller_order_details_for_buy}=require('../../controllers/sellers/get_seller_order_details_for_buy')
const {checkAuthSeller}=require('../../middlewres/check_Auth')
router.post('/',checkAuthSeller,get_seller_order_details_for_buy);

module.exports=router;
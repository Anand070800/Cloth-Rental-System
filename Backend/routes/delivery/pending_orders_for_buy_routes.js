const express=require("express");
const router=express.Router();
const {pending_orders_for_buy}=require('../../controllers/delivery/pending_orders_for_buy')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,pending_orders_for_buy);

module.exports=router;
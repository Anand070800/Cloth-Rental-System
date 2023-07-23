const express=require("express");
const router=express.Router();
const {pending_orders_for_return}=require('../../controllers/delivery/pending_orders_for_return')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,pending_orders_for_return);

module.exports=router;
const express=require("express");
const router=express.Router();
const {pending_orders_for_rent}=require('../../controllers/delivery/pending_orders_for_rent')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,pending_orders_for_rent);

module.exports=router;
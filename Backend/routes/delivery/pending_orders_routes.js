const express=require("express");
const router=express.Router();
const {pending_orders}=require('../../controllers/delivery/pending_orders')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,pending_orders);

module.exports=router;
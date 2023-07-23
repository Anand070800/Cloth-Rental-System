const express=require("express");
const router=express.Router();
const {get_dispatched_orders}=require('../../controllers/delivery/get_dispatched_orders')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,get_dispatched_orders);

module.exports=router;
const express=require("express");
const router=express.Router();
const {get_delivered_orders}=require('../../controllers/delivery/get_delivered_orders')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,get_delivered_orders);

module.exports=router;
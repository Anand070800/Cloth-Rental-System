const express=require("express");
const router=express.Router();
const {get_assigned_orders}=require('../../controllers/delivery/get_assigned_orders')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,get_assigned_orders);

module.exports=router;
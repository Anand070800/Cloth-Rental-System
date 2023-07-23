const express=require("express");
const router=express.Router();
const {get_on_the_way_orders}=require('../../controllers/delivery/get_on_the_way_orders')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,get_on_the_way_orders);

module.exports=router;
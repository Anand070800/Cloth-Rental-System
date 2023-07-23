const express=require("express");
const router=express.Router();
const {renting_period_over_for_order}=require('../../controllers/delivery/renting_period_over_for_order')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,renting_period_over_for_order);

module.exports=router;
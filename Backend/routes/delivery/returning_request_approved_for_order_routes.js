const express=require("express");
const router=express.Router();
const {returning_request_approved_for_order}=require('../../controllers/delivery/returning_request_approved_for_order')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,returning_request_approved_for_order);

module.exports=router;
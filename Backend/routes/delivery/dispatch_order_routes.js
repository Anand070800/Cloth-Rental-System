const express=require("express");
const router=express.Router();
const {dispatch_order}=require('../../controllers/delivery/dispatch_order')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,dispatch_order);

module.exports=router;
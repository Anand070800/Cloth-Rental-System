const express=require("express");
const router=express.Router();
const {delivered_order}=require('../../controllers/delivery/delivered_order')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,delivered_order);

module.exports=router;
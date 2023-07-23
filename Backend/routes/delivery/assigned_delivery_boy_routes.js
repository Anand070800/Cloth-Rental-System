const express=require("express");
const router=express.Router();
const {assigned_delivery_boy}=require('../../controllers/delivery/assigned_delivery_boy')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,assigned_delivery_boy);

module.exports=router;
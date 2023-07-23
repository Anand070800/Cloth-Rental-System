const express=require("express");
const router=express.Router();
const {on_the_way_order}=require('../../controllers/delivery/on_the_way_order')
const {checkAuthDeliveryBoys}=require('../../middlewres/check_Auth')
router.post('/',checkAuthDeliveryBoys,on_the_way_order);

module.exports=router;
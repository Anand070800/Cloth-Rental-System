const express=require("express");
const router=express.Router();
const {order_returned}=require('../../controllers/delivery/order_returned')
router.post('/',order_returned);

module.exports=router;
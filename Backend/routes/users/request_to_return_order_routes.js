const express=require("express");
const router=express.Router();
const {request_to_return_order}=require('../../controllers/users/request_to_return_order');
const {checkAuthUser}=require("../../middlewres/check_Auth")
router.post('/',checkAuthUser,request_to_return_order);
module.exports=router;
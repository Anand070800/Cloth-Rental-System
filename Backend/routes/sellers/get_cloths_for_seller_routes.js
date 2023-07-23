const express=require("express");
const router=express.Router();
const {get_cloths_for_seller}=require('../../controllers/sellers/get_cloths_for_seller')
const {checkAuthSeller}=require('../../middlewres/check_Auth')
router.post('/',checkAuthSeller,get_cloths_for_seller);
module.exports=router;
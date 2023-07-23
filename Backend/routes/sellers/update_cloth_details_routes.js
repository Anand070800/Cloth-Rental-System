const express=require("express");
const router=express.Router();
const {update_cloth_details}=require('../../controllers/sellers/update_cloth_details');
const {checkAuthSeller}=require('../../middlewres/check_Auth')
router.post('/',checkAuthSeller,update_cloth_details);
module.exports=router;
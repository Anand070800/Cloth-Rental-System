const express=require("express");
const router=express.Router();
const {delete_cloth}=require('../../controllers/sellers/delete_cloth');
const {checkAuthSeller}=require('../../middlewres/check_Auth');

router.post('/',checkAuthSeller,delete_cloth);
module.exports=router;
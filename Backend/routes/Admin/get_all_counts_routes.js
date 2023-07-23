const express=require("express");
const router=express.Router();
const {get_all_counts}=require('../../controllers/Admin/get_all_counts')
const {checkAuthAdmin}=require('../../middlewres/check_Auth')
router.post('/',checkAuthAdmin,get_all_counts);
module.exports=router;
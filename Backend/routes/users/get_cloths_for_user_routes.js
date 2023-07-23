const express=require("express");
const router=express.Router();
const {get_cloths_for_user}=require('../../controllers/users/get_cloths_for_user')
router.post('/',get_cloths_for_user);
module.exports=router;
const express=require("express");
const router=express.Router();
const {Add_new_cloth}=require('../../controllers/sellers/Add_new_cloth');
const multer = require("multer");
const uploads = multer({ dest: "uploads/" })
const {checkAuthSeller}=require('../../middlewres/check_Auth')
router.post('/',uploads.single("image"),checkAuthSeller,Add_new_cloth);
module.exports=router;
const express=require("express");
const router=express.Router();
const {update_cloth_image}=require('../../controllers/sellers/update_cloth_image');
const multer = require("multer");
const uploads = multer({ dest: "uploads/" })
const {checkAuthSeller}=require('../../middlewres/check_Auth')
router.post('/',uploads.single("image"),checkAuthSeller,update_cloth_image);
module.exports=router;
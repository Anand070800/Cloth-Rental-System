const {query}=require('../../Database/Postgres/send_query')
const update_cloth_image=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`CALL update_cloth_image(${obj.cloth_id},'${req.file.filename}')`);
    res.status(200).json({data:req.file.filename});
}
module.exports={update_cloth_image};
const {query}=require('../../Database/Postgres/send_query')
const unblock_cloth=async (req,res)=>{
    let product_id=req.body.product_id;
    let data=await query(`CALL unblock_cloth(${product_id})`);
    res.status(200).json(data);
}
module.exports={unblock_cloth};
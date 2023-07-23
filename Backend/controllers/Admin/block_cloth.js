const {query}=require('../../Database/Postgres/send_query')
const block_cloth=async (req,res)=>{
    let product_id=req.body.product_id;
    let data=await query(`CALL block_cloth(${product_id})`);
    res.status(200).json(data);
}
module.exports={block_cloth};
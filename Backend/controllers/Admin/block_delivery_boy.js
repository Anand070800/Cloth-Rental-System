const {query}=require('../../Database/Postgres/send_query')
const block_delivery_boy=async (req,res)=>{
    let data=await query(`CALL block_delivery_boy(${req.body.id})`);
    res.status(200).json(data);
}
module.exports={block_delivery_boy};
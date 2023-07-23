const {query}=require('../../Database/Postgres/send_query')
const unblock_delivery_boy=async (req,res)=>{
    let data=await query(`CALL unblock_delivery_boy(${req.body.id})`);
    res.status(200).json(data);
}
module.exports={unblock_delivery_boy};
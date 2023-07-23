const {query}=require('../../Database/Postgres/send_query')
const delivered_order=async (req,res)=>{
    let data=await query(`call delivered_order(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={delivered_order};
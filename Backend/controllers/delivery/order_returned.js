const {query}=require('../../Database/Postgres/send_query')
const order_returned=async (req,res)=>{
    let data=await query(`call order_returned(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={order_returned};
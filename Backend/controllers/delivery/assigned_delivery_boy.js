const {query}=require('../../Database/Postgres/send_query')
const assigned_delivery_boy=async (req,res)=>{
    let data=await query(`call assigned_delivery_boy(${req.Session.id},${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={assigned_delivery_boy};
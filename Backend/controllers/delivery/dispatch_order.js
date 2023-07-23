const {query}=require('../../Database/Postgres/send_query')
const dispatch_order=async (req,res)=>{
    let data=await query(`call dispatch_order(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={dispatch_order};
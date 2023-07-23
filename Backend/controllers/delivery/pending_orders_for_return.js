const {query}=require('../../Database/Postgres/send_query')
const pending_orders_for_return=async (req,res)=>{
    let data=await query(`SELECT * FROM pending_orders_for_return where delivery_boy_id=${req.Session.id}`);
    res.status(200).json(data);
}
module.exports={pending_orders_for_return};
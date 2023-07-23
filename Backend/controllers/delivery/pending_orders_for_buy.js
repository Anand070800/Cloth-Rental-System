const {query}=require('../../Database/Postgres/send_query')
const pending_orders_for_buy=async (req,res)=>{
    let data=await query(`SELECT * FROM pending_orders_for_buy`);
    res.status(200).json(data);
}
module.exports={pending_orders_for_buy};
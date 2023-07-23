const {query}=require('../../Database/Postgres/send_query')
const pending_orders_for_rent=async (req,res)=>{
    let data=await query(`SELECT * FROM pending_orders_for_rent`);
    res.status(200).json(data);
}
module.exports={pending_orders_for_rent};
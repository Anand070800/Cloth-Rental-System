const {query}=require('../../Database/Postgres/send_query')
const pending_orders=async (req,res)=>{
    let data=await query(`SELECT * FROM pending_orders`);
    res.status(200).json(data);
}
module.exports={pending_orders};
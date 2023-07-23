const {query}=require('../../Database/Postgres/send_query')
const get_assigned_orders=async (req,res)=>{
    let data=await query(`select * from get_assigned_orders(${req.Session.id})`);
    res.status(200).json(data);
}
module.exports={get_assigned_orders};
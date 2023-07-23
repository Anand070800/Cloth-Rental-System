const {query}=require('../../Database/Postgres/send_query')
const get_dispatched_orders=async (req,res)=>{
    let data=await query(`select * from get_dispatched_orders(${req.Session.id})`);
    res.status(200).json(data);
}
module.exports={get_dispatched_orders};
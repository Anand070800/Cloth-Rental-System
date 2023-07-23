const {query}=require('../../Database/Postgres/send_query')
const get_on_the_way_orders=async (req,res)=>{
    let data=await query(`select * from get_on_the_way_orders(${req.Session.id})`);
    res.status(200).json(data);
}
module.exports={get_on_the_way_orders};
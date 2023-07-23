const {query}=require('../../Database/Postgres/send_query')
const renting_period_over_for_order=async (req,res)=>{
    let data=await query(`call renting_period_over_for_order(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={renting_period_over_for_order};
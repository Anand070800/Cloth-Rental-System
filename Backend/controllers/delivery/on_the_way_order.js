const {query}=require('../../Database/Postgres/send_query')
const on_the_way_order=async (req,res)=>{
    let data=await query(`call on_the_way_order(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={on_the_way_order};
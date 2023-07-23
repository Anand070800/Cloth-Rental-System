const {query}=require('../../Database/Postgres/send_query')
const returning_request_approved_for_order=async (req,res)=>{
    let data=await query(`call returning_request_approved_for_order(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={returning_request_approved_for_order};
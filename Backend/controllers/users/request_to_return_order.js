const {query}=require('../../Database/Postgres/send_query')
const request_to_return_order=async (req,res)=>{
    // console.log(req,Session.id);
    let data=await query(`call request_to_return_order(${req.body.order_id})`);
    res.status(200).json(data);
}
module.exports={request_to_return_order};
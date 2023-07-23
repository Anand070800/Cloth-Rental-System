const {query}=require('../../Database/Postgres/send_query')
const get_seller_order_details_for_buy=async (req,res)=>{
    let data=await query(`SELECT * FROM get_seller_order_details_for_buy(${req.Session.id})`);
    res.status(200).json(data);
}
module.exports={get_seller_order_details_for_buy};
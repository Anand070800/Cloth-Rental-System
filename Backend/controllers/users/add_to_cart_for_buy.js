const {query}=require('../../Database/Postgres/send_query')
const add_to_cart_for_buy=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`CALL add_to_cart_for_buy(${req.Session.id},${obj.data.cloth_id})`);
    res.status(200).json(data);
}
module.exports={add_to_cart_for_buy};
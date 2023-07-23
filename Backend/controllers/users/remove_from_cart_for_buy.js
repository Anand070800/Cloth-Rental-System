const {query}=require('../../Database/Postgres/send_query')
const remove_from_cart_for_buy=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`CALL remove_from_cart_for_buy(${obj.user_id},${obj.cloth_id})`);
    res.status(200).json(data);
}
module.exports={remove_from_cart_for_buy};
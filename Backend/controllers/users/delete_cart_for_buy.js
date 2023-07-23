const {query}=require('../../Database/Postgres/send_query')
const delete_cart_for_buy=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`call delete_cart_for_buy(${req.Session.id},${obj.id})`);
    res.status(200).json(data);
}
module.exports={delete_cart_for_buy};
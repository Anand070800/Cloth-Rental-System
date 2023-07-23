const {query}=require('../../Database/Postgres/send_query')
const desc_cart_quantity_buy=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`select * from decrease_cart_quantity_for_buy(${req.Session.id},${obj.id})`);
    res.status(200).json(data);
}
module.exports={desc_cart_quantity_buy};
const {query}=require('../../Database/Postgres/send_query')
const inc_cart_quantity_rent=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`select * from increase_cart_quantity_for_rent(${req.Session.id},${obj.id})`);
    res.status(200).json(data);
}
module.exports={inc_cart_quantity_rent};
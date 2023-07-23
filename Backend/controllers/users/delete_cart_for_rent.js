const {query}=require('../../Database/Postgres/send_query')
const delete_cart_for_rent=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`call delete_cart_for_rent(${req.Session.id},${obj.id})`);
    res.status(200).json(data);
}
module.exports={delete_cart_for_rent};
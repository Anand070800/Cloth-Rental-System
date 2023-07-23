const {query}=require('../../Database/Postgres/send_query')
const get_cart_for_rent=async (req,res)=>{
    let data=await query(`SELECT * FROM GET_CART_FOR_RENT(${req.Session.id})`);
    res.status(200).json(data);
}
module.exports={get_cart_for_rent};
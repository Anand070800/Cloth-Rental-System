const {query}=require('../../Database/Postgres/send_query')
const active_delivery_boys=async (req,res)=>{
    let data=await query(`SELECT * FROM active_delivery_boys`);
    res.status(200).json(data);
}
module.exports={active_delivery_boys};
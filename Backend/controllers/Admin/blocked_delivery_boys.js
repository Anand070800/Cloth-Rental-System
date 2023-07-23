const {query}=require('../../Database/Postgres/send_query')
const blocked_delivery_boys=async (req,res)=>{
    let data=await query(`SELECT * FROM blocked_delivery_boys`);
    res.status(200).json(data);
}
module.exports={blocked_delivery_boys};
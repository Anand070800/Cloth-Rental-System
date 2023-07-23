const {query}=require('../../Database/Postgres/send_query')
const active_seller=async (req,res)=>{
    let data=await query(`SELECT * FROM active_sellers`);
    res.status(200).json(data);
}
module.exports={active_seller};
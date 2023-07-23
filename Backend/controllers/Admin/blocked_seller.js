const {query}=require('../../Database/Postgres/send_query')
const blocked_seller=async (req,res)=>{
    let data=await query(`SELECT * FROM blocked_sellers`);
    res.status(200).json(data);
}
module.exports={blocked_seller};
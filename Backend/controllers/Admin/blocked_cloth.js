const {query}=require('../../Database/Postgres/send_query')
const blocked_cloth=async (req,res)=>{
    let data=await query(`SELECT * FROM blocked_cloths`);
    res.status(200).json(data);
}
module.exports={blocked_cloth};
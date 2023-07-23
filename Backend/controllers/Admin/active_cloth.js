const {query}=require('../../Database/Postgres/send_query')
const active_cloth=async (req,res)=>{
    let data=await query(`SELECT * FROM active_cloths`);
    res.status(200).json(data);
}
module.exports={active_cloth};
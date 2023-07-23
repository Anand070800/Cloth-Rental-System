const {query}=require('../../Database/Postgres/send_query')
const get_all_counts=async (req,res)=>{
    let data=await query(`SELECT * FROM get_all_counts()`);
    res.status(200).json(data);
}
module.exports={get_all_counts};
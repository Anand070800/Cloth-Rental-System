const {query}=require('../../Database/Postgres/send_query')
const active_user=async (req,res)=>{
    let data=await query(`SELECT * FROM active_users`);
    res.status(200).json(data);
}
module.exports={active_user};
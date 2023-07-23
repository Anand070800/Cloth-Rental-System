const {query}=require('../../Database/Postgres/send_query')
const blocked_user=async (req,res)=>{
    let data=await query(`SELECT * FROM blocked_users`);
    res.status(200).json(data);
}
module.exports={blocked_user};
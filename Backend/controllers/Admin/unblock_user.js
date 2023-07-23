const {query}=require('../../Database/Postgres/send_query')
const unblock_user=async (req,res)=>{
    let id=req.body.id;
    let data=await query(`CALL unblock_user(${id})`);
    res.status(200).json(data);
}
module.exports={unblock_user};
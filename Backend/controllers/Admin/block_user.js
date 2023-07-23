const {query}=require('../../Database/Postgres/send_query')
const block_user=async (req,res)=>{
    let data=await query(`CALL block_user(${req.body.id})`);
    res.status(200).json(data);
}
module.exports={block_user};
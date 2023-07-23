const {query}=require('../../Database/Postgres/send_query')
const unblock_seller=async (req,res)=>{
    let id=req.body.id;
    let data=await query(`CALL unblock_seller(${id})`);
    res.status(200).json(data);
}
module.exports={unblock_seller};
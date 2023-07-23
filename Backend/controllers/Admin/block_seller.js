const {query}=require('../../Database/Postgres/send_query')
const block_seller=async (req,res)=>{
    console.log(req.body);
    let data=await query(`CALL block_seller(${req.body.id})`);
    res.status(200).json(data);
}
module.exports={block_seller};
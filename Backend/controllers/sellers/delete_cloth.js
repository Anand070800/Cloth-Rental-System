const {query}=require('../../Database/Postgres/send_query')
const delete_cloth=async (req,res)=>{
    let product_id=req.body.cloth_id;
    console.log(product_id);
    let data=await query(`CALL delete_cloth(${product_id})`);
    res.status(200).json(data);
}
module.exports={delete_cloth};
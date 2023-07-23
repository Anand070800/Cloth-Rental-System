const {query}=require('../../Database/Postgres/send_query')
const Add_new_cloth=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`CALL add_new_cloth('${obj.name}',${obj.rent},${obj.sell_price},${obj.stock},'${obj.category}',
    '${obj.section}','${obj.gender}',${req.Session.id},'${obj.description}',
    '${req.file.filename}')`);
    res.status(200).json(data);
}
module.exports={Add_new_cloth};
const {query}=require('../../Database/Postgres/send_query')
const update_cloth_details=async (req,res)=>{
    let obj={...req.body.data};
    let data=await query(`CALL update_cloth_details(${obj.cloth_id},'${obj.cloth_name}',${obj.cloth_renting_price},${obj.cloth_selling_price},${obj.cloth_stock},'${obj.cloth_category}',
    '${obj.cloth_section}','${obj.cloth_gender}','${obj.cloth_description}')`);
    console.log(data);
    res.status(200).json(data);
}
module.exports={update_cloth_details};
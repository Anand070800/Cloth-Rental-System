const {query}=require('../../Database/Postgres/send_query')
const update_cart_for_rent_date=async (req,res)=>{
    let obj={...req.body};
    let data=await query(`select * from  update_cart_for_rent_date(${req.Session.id},${obj.id},'${obj.rent_date}','${obj.return_date}')`);
    res.status(200).json(data);
}
module.exports={update_cart_for_rent_date};
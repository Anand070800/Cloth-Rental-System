const {query}=require('../../Database/Postgres/send_query')
const get_cloths_for_seller=async (req,res)=>{
    let page=(req.body.data.page-1)*10;
    let data=await query(`SELECT * FROM GET_CLOTHS_FOR_SELLER(${req.Session.id},${page},${req.body.data.limit})`);
    res.status(200).json(data);
}
module.exports={get_cloths_for_seller};
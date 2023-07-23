const {query}=require('../../Database/Postgres/send_query')
const add_order_for_buy=async (req,res)=>{
    let cartData=req.body.cartData;
    try{
        const promises = cartData.map(async (item, index) => {
            await query(`CALL add_order_for_buy(${req.Session.id}, ${item.id}, '${req.body.pay_id}')`);
        });  
        await Promise.all(promises);
        res.status(200).json("pass");
    }catch(err){
        console.log(err);
        res.status(200).json("fail")
    }
}
module.exports={add_order_for_buy};
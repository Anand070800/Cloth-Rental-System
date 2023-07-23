const jwt=require('jsonwebtoken')
const {query}=require('../Database/Postgres/send_query')
async function add_aadhar_address(req, res){
    let obj;
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,async(err,result)=>{
            if(err){
                res.status(401).json('fail');
            }else if(result ){
                obj=req.body.data;
                data=await query(`call add_aadhar_address(${result.id},'${obj.aadhar_id}','${obj.user_location}','${obj.user_landmark}','${obj.user_district}','${obj.user_state}','${obj.user_pincode}')`);
                console.log(data);
                res.status(200).json(data);
            }
        });
    }else{
        res.status(401).json('fail');
    }
    
}
module.exports = {add_aadhar_address};
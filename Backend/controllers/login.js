const {query}=require('../Database/Postgres/send_query')
const jwt =require('jsonwebtoken');
require("dotenv").config();
async function login(req, res){

    let obj={email:req.body.email.toLowerCase(),password:req.body.password}
    let data; 
    data=await query(`SELECT * FROM MATCH_EMAIL_PASSWORD('${obj.email}','${obj.password}')`);
    if(data[0]?.matched && data[0]?.user_status==='active'){
        data=await query(`SELECT * FROM GET_LOGIN_DETAIL('${obj.email}')`);
        if(data.length>0){
            const token=jwt.sign({
                id:data[0].user_id,
                emailVerified:data[0].user_email_verified,
                name:data[0].user_name,
                username:data[0].user_username,
                role:data[0].user_role,
                status:data[0].user_status},process.env.ACCESS_TOKEN);
            res.status(200).json({token,name:data[0].user_name,username:data[0].user_username});
        }else{
            res.status(401).json({error:'invalid email'});
        }
    }else{
        if(data[0]?.user_status==='deactive'){
            res.status(401).json({error:'This account has been deleted'});
        }else if(data[0]?.user_status==='blocked'){
            res.status(401).json({error:'This account has been blocked'});
        }else{
            res.status(401).json({error:'invalid email or password'});
        }
    }
}
module.exports = {login};
const {query}=require('../Database/Postgres/send_query')
const jwt=require('jsonwebtoken');
async function verifiyOtp(req, res){  
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,async(err,result)=>{
            if(err){
                res.status(401).json({error:'fail'});
            }else if(result ){
                let user_otp=req.body.otp;
                let id=result.id;
                data=await query(`SELECT * from match_otp(${id},'${user_otp}')`);
                if (data[0]?.macthed) {
                    await query(`CALL email_verified(${id})`);
                    let logindata=await query(`SELECT * FROM GET_LOGIN_DETAIL('${result.email}')`);
                    if(logindata.length>0){
                        const token=jwt.sign({
                            id:logindata[0].user_id,
                            emailVerified:logindata[0].user_email_verified,
                            name:logindata[0].user_name,
                            username:logindata[0].user_username,
                            role:logindata[0].user_role,
                            status:logindata[0].user_status},process.env.ACCESS_TOKEN);
                        res.status(200).json({token,name:logindata[0].user_name,username:logindata[0].user_username,macthed:data[0].macthed});                
                        } 
                    }
                else {
                    res.status(200).json({macthed:data[0].matched});
                }
            }
        });
    }else{
        res.status(401).json({error:'fail'});
    }
    
}
module.exports = {verifiyOtp};
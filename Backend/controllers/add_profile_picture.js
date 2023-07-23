const jwt=require('jsonwebtoken')
const {query}=require('../Database/Postgres/send_query')
async function add_profile_picture(req, res){
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,async(err,result)=>{
            if(err){
                res.status(401).json('fail');
            }else if(result ){
                obj=req.body.data;
                data=await query(`call add_profile_picture(${result.id},'${req.file.filename}')`);
                res.status(200).json(data);
            }
        });
    }else{
        res.status(401).json('fail');
    }
    
}
module.exports = {add_profile_picture};
const {query}=require('../Database/Postgres/send_query')
const jwt =require('jsonwebtoken');
const sendEmail=require('./sendEmail');
const {otp}=require('./otp');
require("dotenv").config(); 

async function signup(req, res){
    let obj={name:req.body.name ,username:req.body.username,password:req.body.password,email:req.body.email.toLowerCase(),mobile_number:req.body.mobile,role:req.body.role}
    if(obj.name!='' && obj.username!='' && obj.password!='' && obj.email!=''){
        let data;
        data=await query(`SELECT * FROM GET_LOGIN_DETAIL('${obj.email}')`);
        if(data.length>0){
            res.status(200).json({error:"Email already exist"});
            return
        }
        else if(obj.role==='user'){
            data=await query(`SELECT * FROM CREATE_NEW_USER('${obj.name}','${obj.username}','${obj.password}','${obj.email}','${obj.mobile_number}')`)
            // console.log('hey', data)
        }else if(obj.role==='seller'){
            data=await query(`SELECT * FROM CREATE_NEW_SELLER('${obj.name}','${obj.username}','${obj.password}','${obj.email}','${obj.mobile_number}')`)
            
        }else if(obj.role==='delivery_boy'){
            data=await query(`SELECT * FROM CREATE_NEW_DELIVERY_BOY('${obj.name}','${obj.username}','${obj.password}','${obj.email}','${obj.mobile_number}')`)
        }
        if(data.length>0){
            otp(data[0].id,(otp_number)=>{
                sendEmail({email:obj.email,otp:otp_number},(err,status)=>{
                    if(err){
                        console.log("something wrong at signup time in Email");
                    }else{
                        
                        const token=jwt.sign({
                        id:data[0].id,
                        emailVerified:false,
                        name:obj.name,
                        username:obj.username,
                        email:obj.email,
                        role:obj.role,
                        status:'active'},process.env.ACCESS_TOKEN);
                        res.status(200).json({token,name:obj.name,username:obj.username,success:"otpVerifiy",error:""});
                    }
                })
            });
            
        }else{
            res.status(200).json({error:'Password must be one uppercaae,one lower case , at least 1 number and one special char and length is greater than 8'});
            return
        }
    }else{
        res.status(200).json({error:'All field required'});
        return
    }
}
module.exports = {signup};
const jwt=require('jsonwebtoken')

function checkAuthUser(req,res,next){
    // console.log(req.body);
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,(err,result)=>{
            if(err){
                res.status(401).json({error:'fail'});
            }else if(result){
                // console.log(result);
                if(result.status==='blocked'){
                    res.status(401).js({error:'blocked'});
                }
                else if(result.emailVerified && result.role==='user'){
                    req.Session=result;
                    next();
                }else if(!result.emailVerified && result.role==='user'){
                    res.status(401).json({error:'NotVerified'});
                }
                else{
                    res.status(401).json({error:'unauthorized'})
                }
            }
        });
    }else{
        res.status(401).json({error:'fail'});
    }
}
function checkAuthAdmin(req,res,next){
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,(err,result)=>{
            if(err){
                res.status(401).json({error:'fail'});
            }else if(result){
                if(result.status==='blocked'){
                    res.status(401).js({error:'blocked'});
                }
                else if(result.emailVerified && result.role==='admin'){
                    req.Session=result;
                    next();
                }else if(!result.emailVerified && result.role==='admin'){
                    res.status(401).json({error:'NotVerified'});
                }
                else{
                    res.status(401).json({error:'unauthorized'})
                }
            }
        });
    }else{
        res.status(401).json({error:'fail'});
    }
}
function checkAuthSeller(req,res,next){
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,(err,result)=>{
            if(err){
                res.status(401).json({error:'fail'});
            }else if(result){
                if(result.status==='blocked'){
                    res.status(401).js({error:'blocked'});
                }
                else if(result.emailVerified && result.role==='seller'){
                    req.Session=result;
                    // console.log(result);
                    next();
                }else if(!result.emailVerified && result.role==='seller'){
                    res.status(401).json({error:'NotVerified'});
                }
                else{
                    res.status(401).json({error:'unauthorized'})
                }
            }
        });
    }else{
        res.status(401).json({error:'fail'});
    }
}
function checkAuthDeliveryBoys(req,res,next){
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,(err,result)=>{
            if(err){
                res.status(401).json({error:'fail'});
            }else if(result){
                if(result.status==='blocked'){
                    res.status(401).js({error:'blocked'});
                }
                else if(result.emailVerified && result.role==='delivery_boy'){
                    req.Session=result;
                    next();
                }else if(!result.emailVerified && result.role==='delivery_boy'){
                    res.status(401).json({error:'NotVerified'});
                }
                else{
                    res.status(401).json({error:'unauthorized'})
                }
            }
        });
    }else{
        res.status(401).json({error:'fail'});
    }
}
module.exports={checkAuthUser:checkAuthUser,checkAuthAdmin:checkAuthAdmin,checkAuthSeller:checkAuthSeller,checkAuthDeliveryBoys:checkAuthDeliveryBoys}
import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Forgot=()=>{
    const [Email,setEmail]=useState("");
    const [error,setError]=useState("")
    const navigate=useNavigate();
    const validation=()=>{
        let obj = { "Email": Email };
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/forgot");
        request.setRequestHeader("Content-type", "application/json");
        request.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                let data=JSON.parse(this.responseText);
                if(data.success=="success"){
                    localStorage.clear();
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('username',data.username);
                    let token=localStorage.getItem("token");
                    request.open("POST", "http://localhost:3000/resendOtp");
                    request.setRequestHeader("Content-type", "application/json");
                    request.onreadystatechange=function(){
                        if(this.readyState==4 && this.status==200){
                            let data=JSON.parse(this.responseText);
                            if(data.success=="otpVerifiy"){
                                navigate('/VerifiyMail');
                            }
                        }
                    }
                    request.send(JSON.stringify({token:token}));
                }else{
                    setError("Invalid Email");
                    setEmail(""); 
                }
            }
        }
        request.send(JSON.stringify(obj));
        
    }
    return<>
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="container bg-light">
                <div className="row pt-3 d-flex justify-content-center align-items-center text-center">
                    <h1>Forgot Password</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <div className="col-10 pb-3 mt-3">
                        <input className="mt-2" type="email" id="u_name" placeholder="Enter Email" name="user_name"
                            style={{width: "50%"}} value={Email} onChange={(e)=>{setEmail(e.target.value)}} required/><br/>
                    </div>
                    <div className="col-5 pb-3">
                        <div className="mt-2" style={{color:'red'}}>{error}</div>
                        <div className="btn btn-warning" type="button" onClick={validation}>Reset</div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default Forgot;
import react, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const VerifiyMail=()=>{
    const [OTP,setOTP]=useState("");
    const [error,setError]=useState("")
    const [countdown, setCountdown] = useState(60);
    const navigate=useNavigate();
    const validation=()=>{
        let token=localStorage.getItem("token");
        let obj = { "OTP": OTP };
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/verifyOtp");
        request.setRequestHeader("Content-type", "application/json");
        request.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                let data=JSON.parse(this.responseText);
                if(data.macthed){
                    localStorage.clear();
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('username',data.username);
                    window.location.href = '/';
                }else if(!data.macthed){
                    setError("Incorrect Otp");
                }
            }
        }
        request.send(JSON.stringify({token:token,otp:OTP}));
    }
    const handleResendOtp = () => {
        let token=localStorage.getItem("token");
        console.log(token);
        let request = new XMLHttpRequest();
        request.open("POST", "http://localhost:3000/resendOtp");
        request.setRequestHeader("Content-type", "application/json");
        request.onreadystatechange=function(){
            if(this.readyState==4 && this.status==200){
                let data=JSON.parse(this.responseText);
                if(data.success=="otpVerifiy"){
                    setError("Otp send on your mail");
                    setCountdown(60);
                }
            }
        }
        request.send(JSON.stringify({token:token}));
    };
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);


    return<>
        <div className="container-fluid bg-dark d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="container bg-light">
                <div className="row pt-3 d-flex justify-content-center align-items-center text-center">
                    <h1>Enter Mail Otp</h1>
                </div>
                <div className="row d-flex justify-content-center align-items-center text-center">
                    <div className="col-10 pb-3 mt-3">
                        <input className="mt-2" type="text" id="u_name" placeholder="Enter OTP" name="OTP"
                            style={{width: "50%"}} value={OTP} onChange={(e)=>{setOTP(e.target.value)}} required/><br/>
                    </div>
                    <div className="col-5 pb-3">
                        <div className="mt-2" style={{color:'red'}}>{error}</div>
                        {countdown > 0 ? (<div className="btn btn-warning" type="button" onClick={validation}>Submit</div>)
                     : <><div className="btn btn-primary" type="button" onClick={handleResendOtp} >Resend</div></>}
                        
                    </div>
                </div>
                <div className='rrow d-flex justify-content-center align-items-center text-centerow'>
                    {countdown > 0 ? (<p>Resend OTP in {countdown} seconds</p>)
                     : <></>}
                </div>
            </div>
        </div>
    </>
}
export default VerifiyMail;
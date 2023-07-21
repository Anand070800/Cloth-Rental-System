import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../../components/navbar/Navbar";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SignupPage = ()=> {
  const [userSignup, setSignup] = useState({
        name: "",
        username: "",
        mobile: "",
        password: "",
        confirm:"",
        email: "",
        role: "user",
      });
      // let [name_err, setNameError] = useState("");
      // let [username_err, setUserNameError] = useState("");
      // let [mobile_err, setMobileError] = useState("");
      let [pass_err, setPassErr] = useState("");
      const navigate = useNavigate();
      const [showPassword, setShowPassword] = useState(false);
      const handler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignup({ ...userSignup, [name]: value });
      };
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const formSubmit = (e) => {
        e.preventDefault();
        const newForm = { ...userSignup };
        if (userSignup.name.trim() === '' || userSignup.username.trim() === ''|| userSignup.mobile.trim() === ''||userSignup.password.trim() === ''||userSignup.confirm.trim() === ''||userSignup.email.trim() === '') {
          setPassErr("all Field required");
          return;
        }
        var format = /^\d{10}$/;
        if(!format.test(userSignup.mobile)){
          setPassErr("Invalid Mobile number");
          return
        }
        setSignup({
          name: "",
          username: "",
          mobile: "",
          password: "",
          confirm:"",
          email: "",
          role: "user",
        });
        setPassErr("");
        fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newForm),
        })
          .then((res) => {
            if (res.status === 200) {
              return res.json();
            } else {
              // navigate("/Notverified");
            }
          })
          .then((data) => {
            if(data.success=="otpVerifiy"){
              localStorage.setItem('token',data.token);
              localStorage.setItem('username',data.username);
              navigate("/VerifiyMail");
            }else if(data.error){
              setPassErr(data.error);
            }
          })
          .catch((err) => {
            console.log(err);
            throw new Error(err.status);
          });
      };
  return (
    <>
    <NavigationBar/>
    <div className="container d-flex justify-content-center">
      <MDBCard className='text-black m-5' style={{borderRadius: '25px',width:"70%"}} >
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='7' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
              <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 mt-4">Sign up</p>
              <div className="d-flex flex-row align-items-center mb-1 ">
              <input type="radio" name="role" onChange={handler} value="user" checked={userSignup.role=='user'}/>
              <label className="text-center me-3" htmlFor="html"> User </label>
              <input type="radio"  name="role" onChange={handler} value="seller" checked={userSignup.role=='seller'}/>
              <label className="text-center me-3 " htmlFor="css"> Seller </label>
              <input type="radio" name="role" onChange={handler} value="delivery_boy" checked={userSignup.role=='delivery_boy'}/>
              <label className="text-center me-3 " htmlFor="css"> Delivery_Boy </label>
              </div>
              <div className="d-flex flex-row align-items-center">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <label className="text-center me-3 mb-4" htmlFor='form1'>Your Name</label>
                <MDBInput name="name" onChange={handler} value={userSignup.name} id='form1' type='text' placeholder="Name"  style={{width:"350px"}}/>
              </div>
              <div className="d-flex flex-row align-items-center ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <label className="text-center me-3 mb-4" htmlFor='form2'>Username</label>
                <MDBInput name="username" onChange={handler} value={userSignup.username} id='form2' type='text' placeholder="Username"  style={{width:"350px"}}/>
              </div>

              <div className="d-flex flex-row align-items-center">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <label className="text-center me-3 mb-4" htmlFor='form3'>Your Email</label>
                <MDBInput name="email" onChange={handler} value={userSignup.email} id='form3' type='email' placeholder="Your Email"  style={{width:"350px"}}/>
              </div>
              <div className="d-flex flex-row align-items-center">
                <MDBIcon fas icon="phone me-3" size='lg'/>
                <label className="text-center me-3 mb-4" htmlFor='form4'>Mobile No.</label>
                <MDBInput  name="mobile" onChange={handler} value={userSignup.mobile} id='form4' type='text' placeholder="Mobile No."  style={{width:"350px"}}/>
              </div>

              <div className="d-flex flex-row align-items-center">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <label className="text-center me-3 mb-4" htmlFor='form5'>Password</label>
                <MDBInput  name="password" onChange={handler} value={userSignup.password} id='form5' type={showPassword? "text":"password"} placeholder="password" style={{width:"350px" }}/>
              </div>

              <div className="d-flex flex-row align-items-center">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <label className="text-center me-3 mb-4" htmlFor='form6'>Confirm</label>
                <MDBInput name="confirm" onChange={handler} value={userSignup.confirm} id='form6' type={showPassword? "text":"password"} placeholder="Confirm password" style={{width:"315px"}}/>
                <MDBIcon fas icon={showPassword ? "eye-slash" : "eye"} size="lg" className="ms-2" onClick={togglePasswordVisibility} style={{ cursor: "pointer" }}/>
              </div>

              <div className='mb-1'>
                { pass_err!=""?<><span style={{color:"red"}}>{pass_err}</span></>:<></>}
              </div>
              <div className="text-center">
                     Already have an account? <Link to='/login' style={{ textDecoration: "none"}}>Loginhere</Link>
              </div>
              <MDBBtn className='mb-4' size='lg' onClick={formSubmit} style={{width:"150px"}}>Register</MDBBtn>
            </MDBCol>

            <MDBCol md='10' lg='5' className='order-1 order-lg-2 d-flex align-items-center' >
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
    </>
  );
}

export default SignupPage;

import React, { useState, useEffect } from 'react';
import NavigationBar from "../../components/navbarUser/Navbar";
import { Link, useNavigate } from "react-router-dom";
import './AddAddressStyle.css';

const AddAddress=()=> {
  const [userDetails, setUserDetails] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    console.log(userDetails);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/add_aadhar_address", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token,data:userDetails}),
    })
    .then((res) => {
        if (res.status !== 200){
        throw res;
        } else {
        return res.json();
        }
    })
    .then((data) => {
      navigate('/Home');
    });
  };
  useEffect(()=>{
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/check_aadhar_address", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token}),
    })
    .then((res) => {
        if (res.status !== 200){
        throw res;
        } else {
        return res.json();
        }
    })
    .then((data) => {
      setUserDetails({...data.data});
      
    });
},[]);
  return (
    <>
    <NavigationBar/>
    <div className='container-fluid'>
      <div className='row justify-content-center align-item-center' style={{height:'80vh'}}>
        <div className='col-6'>
            <form onSubmit={handleSubmit} className='form1' style={{marginTop:"20px"}}>
              <label className='label1'>
                Aadhar ID:
                <input
                  className='input1'
                  type="text"
                  name="aadhar_id"
                  value={userDetails.aadhar_id?userDetails.aadhar_id:""}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label1'>
                Location:
                <input
                  className='input1'
                  type="text"
                  name="user_location"
                  value={userDetails.user_location?userDetails.user_location:""}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label1'>
                Landmark:
                <input
                  className='input1'
                  type="text"
                  name="user_landmark"
                  value={userDetails.user_landmark?userDetails.user_landmark:""}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label1'>
                District:
                <input
                  className='input1'
                  type="text"
                  name="user_district"
                  value={userDetails.user_district?userDetails.user_district:""}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label1'>
                State:
                <input
                  className='input1'
                  type="text"
                  name="user_state"
                  value={userDetails.user_state?userDetails.user_state:""}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label className='label1'>
                Pincode:
                <input
                  className='input1'
                  type="text"
                  name="user_pincode"
                  value={userDetails.user_pincode?userDetails.user_pincode:""}
                  onChange={handleChange}
                />
              </label>
              <br />
              <button className='button1' type="submit">Update Details</button>
            </form>
        </div>

      </div>
    </div>
    </>
  );
}

export default AddAddress;

import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import checkAuth from './api/checkAuth';

import Home from './pages/Admin/Home';
import ActiveProducts from './pages/Admin/ActiveProducts';
import BlockedProducts from './pages/Admin/BlockedProducts';
import ActiveUsers from './pages/Admin/ActiveUsers';
import ActiveSellers from './pages/Admin/ActiveSellers';
import ActiveDeliveryBoys from './pages/Admin/ActiveDeliveryBoys';
import BlockedUsers from './pages/Admin/BlockedUsers';
import BlockedSellers from './pages/Admin/BlockedSellers';
import BlockedDeliveryBoys from './pages/Admin/BlockedDeliveryBoys';

import LoginPage from './pages/login/Login';
import SignupPage from './pages/signup/Signup';
import AboutUs from './pages/AboutUs';
import VerifiyMail from './pages/VerifiyMail';
import Forgot from './pages/Forgot';

import SellerHome from './pages/Seller/Home'
import SellerProduct from './pages/Seller/SellerProducts';
import BuySellerOrder from './pages/Seller/BuySellerOrder';
import RentSellerOrder from './pages/Seller/RentSellerOrder';
import AddAddressSeller from './pages/Seller/AddAddressSeller';

import UserHome from './pages/user/Home';
import CartForBuy from './pages/user/CartForBuy';
import CartForRent from './pages/user/CartForRent';
import AddAddress from './pages/user/AddAddress';
import BuyOrder from './pages/user/BuyOrder';
import RentOrder from './pages/user/RentOrder';

import HomeDelivery from './pages/Delivery/HomeDelivery';
import PendingOrders from './pages/Delivery/PendingOrders';
import AssignedOrders from './pages/Delivery/AssignedOrders';
import DispatchOrders from './pages/Delivery/DispatchOrders';
import OnTheWayOrders from './pages/Delivery/OnTheWayOrders';
import DeliveredOrders from './pages/Delivery/DeliveredOrders';
import PendingOrdersForReturn from './pages/Delivery/PendingOrdersForReturn';

function App() {  
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [isPedding,setIsPendding]=useState(true);
  const [userType,setUserType]=useState();
  const checkAuthorization=async()=>{
    setIsPendding(true);
    let token=localStorage.getItem("token");
    try{
      let result=await checkAuth({token});
      if(result.status===200){
        result.json()
        .then((data)=>{
          setUserType(data.role);
          setIsLoggedIn(true);
          setIsPendding(false);
        })
      }else{
        setIsLoggedIn(false);
        setIsPendding(false);
      }
    }catch(err){
      console.log(err)
      setIsLoggedIn(false);
    }
  }
  useEffect(()=>{
    checkAuthorization();
  },[isLoggedIn])
  return (
    <>
    <BrowserRouter>
      <Routes>
        {
          isPedding?<Route path="*" element={<h4>Loading....</h4>}/>
          :
          <>{
              isLoggedIn && userType==='user'?
              <>
              <Route path="/CartForBuy" element={<CartForBuy/>}/>
              <Route path="/CartForRent" element={<CartForRent/>}/>
              <Route path="/AddAddress" element={<AddAddress/>}/>
              <Route path="/BuyOrder" element={<BuyOrder/>}/>
              <Route path="/RentOrder" element={<RentOrder/>}/>
              <Route path="/VerifiyMail" element={<VerifiyMail/>}/>
              <Route path="*" element={<UserHome/>}/>
              </>
            :
            isLoggedIn && userType==='admin'?
            <>
              <Route path="/BlockedUsers" element={<BlockedUsers/>}/>
              <Route path="/BlockedSellers" element={<BlockedSellers/>}/>
              <Route path="/BlockedDeliveryBoys" element={<BlockedDeliveryBoys/>}/>
              <Route path="/ActiveUsers" element={<ActiveUsers/>}/>
              <Route path="/ActiveSellers" element={<ActiveSellers/>}/>
              <Route path="/ActiveDeliveryBoys" element={<ActiveDeliveryBoys/>}/>
              <Route path="/ActiveProduct" element={<ActiveProducts/>}/>
              <Route path="/BlockedProduct" element={<BlockedProducts/>}/>
              <Route path="/VerifiyMail" element={<VerifiyMail/>}/>
              <Route path="*" element={<Home/>}/>
            </>
            :
            isLoggedIn && userType==='seller'?
            <>
              <Route path="/SellerProduct" element={<SellerProduct/>}/>
              <Route path="/AddAddressSeller" element={<AddAddressSeller/>}/>
              <Route path="/BuySellerOrder" element={<BuySellerOrder/>}/>
              <Route path="/RentSellerOrder" element={<RentSellerOrder/>}/>
              <Route path="/VerifiyMail" element={<VerifiyMail/>}/>
              <Route path="*" element={<SellerHome/>}/>
            </>
            :
            isLoggedIn && userType==='delivery_boy'?
            <>
              <Route path="/PendingOrders" element={<PendingOrders/>}/>
              <Route path="/PendingOrdersForReturn" element={<PendingOrdersForReturn/>}/>
              <Route path="/AssignedOrders" element={<AssignedOrders/>}/>
              <Route path="/DispatchOrders" element={<DispatchOrders/>}/>
              <Route path="/OnTheWayOrders" element={<OnTheWayOrders/>}/>
              <Route path="/DeliveredOrders" element={<DeliveredOrders/>}/>
              <Route path="/VerifiyMail" element={<VerifiyMail/>}/>
              <Route path="*" element={<HomeDelivery/>}/>
            </>
            :
              <>
              <Route path="/Signup" element={<SignupPage/>}/>
              <Route path="/About" element={<AboutUs/>}/>
              <Route path="/VerifiyMail" element={<VerifiyMail/>}/>
              <Route path="/Forgot" element={<Forgot/>}/>
              <Route exact path="*" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
              </>
          }
          </>
        }
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;


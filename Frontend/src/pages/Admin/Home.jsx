import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavigationBar from "../../components/navbarAdmin/Navbar";
import Sidebar from '../../components/navbarAdmin/Sidebar'
// import "./style.module.css";

function Home() {
    const [toggle, setToggle] = useState(true)    
  const Toggle = () => {setToggle(!toggle)} 
  const [AllCount,setAllCount]=useState([]);
  useEffect(()=>{
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/get_all_counts", {
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
        console.log(data);
        if(data.length!=0){
            setAllCount([...data]);
        }
    });
},[]);
  return (
    <div className='container-fluid bg-secondary min-vh-100 '>
    <div className='row '>
      {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'><Sidebar /></div>}
      {toggle &&  <div className='col-4 col-md-2'></div>}
      <div className='col'>
            <div className="px-3">
            <NavigationBar Toggle={Toggle} />

            <div className="container-fluid">
                {AllCount.map((item,index)=>{
                        return(
                            <div className="row g-3 my-2" key={index}>
                            <div className="col-md-4 p-4">
                                <Link to='/ActiveProduct' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_active_cloths}</h3> <p className="fs-5">Active Products</p>
                                    </div>
                                    <i className="bi bi-cart-plus p-3 fs-1" style={{color:"green"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/BlockedProduct' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_blocked_cloths}</h3> <p className="fs-5">Blocked Products</p>
                                    </div>
                                    <i className="bi bi-cart-plus p-3 fs-1" style={{color:"red"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/ActiveUsers' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_active_users}</h3> <p className="fs-5">Active Users</p>
                                    </div>
                                    <i className="bi bi-person p-3 fs-1" style={{color:"green"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/BlockedUsers' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_blocked_users}</h3> <p className="fs-5">Blocked Users</p>
                                    </div>
                                    <i className="bi bi-person p-3 fs-1" style={{color:"red"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/ActiveSellers' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_active_sellers}</h3> <p className="fs-5">Active Sellers</p>
                                    </div>
                                    <i className="bi bi-person p-3 fs-1" style={{color:"green"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/BlockedSellers' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_blocked_sellers}</h3> <p className="fs-5">Blocked Sellers</p>
                                    </div>
                                    <i className="bi bi-person p-3 fs-1" style={{color:"red"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/ActiveDeliveryBoys' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_active_delivery_boys}</h3> <p className="fs-5">Active Deliverey Boys</p>
                                    </div>
                                    <i className="bi bi-person p-3 fs-1" style={{color:"green"}}></i>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4 p-4">
                                <Link to='/BlockedDeliveryBoys' className="Link">
                                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                                    <div>
                                        <h3 className="fs-2">{item.total_blocked_delivery_boys}</h3> <p className="fs-5">Blocked Delivery Boys</p>
                                    </div>
                                    <i className="bi bi-person p-3 fs-1" style={{color:"red"}}></i>
                                    </div>
                                </Link>
                            </div>
                            </div>
                        )
                    })}
                
            </div>
            </div>
      </div>
    </div>
  </div>


   
  );
}
export default Home;

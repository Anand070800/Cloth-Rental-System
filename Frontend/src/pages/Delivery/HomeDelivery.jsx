import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavigationBar from "../../components/navbarDelivery/Navbar";
import Sidebar from '../../components/navbarDelivery/SidebarDelivery'
// import "./style.module.css";

function HomeDelivery() {
    const [toggle, setToggle] = useState(true)    
  const Toggle = () => {setToggle(!toggle)}  
  return (
    <div className='container-fluid bg-secondary min-vh-100 '>
    <div className='row '>
      {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'><Sidebar /></div>}
      {toggle &&  <div className='col-4 col-md-2'></div>}
      <div className='col'>
            <div className="px-3">
            <NavigationBar Toggle={Toggle} />
            <div className="container-fluid">
                <div className="row g-3 my-2">
                <div className="col-md-4 p-4">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">230</h3> <p className="fs-5">Pending</p>
                    </div>
                    <i className="bi bi-cart-plus p-3 fs-1"></i>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">2450</h3> <p className="fs-5">Return Pending</p>
                    </div>
                    <i className="bi bi-currency-dollar p-3 fs-1"></i>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">2250</h3> <p className="fs-5">Assigned Order</p>
                    </div>
                    <i className="bi bi-truck p-3 fs-1"></i>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">20%</h3> <p className="fs-5">Dispatch</p>
                    </div>
                    <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">20%</h3> <p className="fs-5">On The Way</p>
                    </div>
                    <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                    <div>
                        <h3 className="fs-2">20%</h3> <p className="fs-5">Delivered</p>
                    </div>
                    <i className="bi bi-graph-up-arrow p-3 fs-1"></i>
                    </div>
                </div>
                </div>
            </div>
            </div>
      </div>
    </div>
  </div>


   
  );
}
export default HomeDelivery;

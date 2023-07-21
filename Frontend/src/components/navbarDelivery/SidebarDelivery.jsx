import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from "react-bootstrap/Nav";

import "bootstrap/js/dist/dropdown";
import './style.css';

function SidebarDelivery() {
    const Logout=()=>{
        localStorage.clear();
        window.location.reload();
      }
  return (
    <div className="bg-white sidebar p-2" style={{ width: "215px" }}>
      <div className="m-2">
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Cloth-Rental</span>
      </div>
      <hr className="text-dark" />
      <div className="list-group list-group-flush">
        <div className="list-group-item py-2">
          <i className="bi bi-speedometer2 fs-5 me-3"></i>
          <Link to='/' className="Link">Deliverey Portal</Link>
        </div>
        <div className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i> <Link to='/' className="Link">Home</Link>
        </div>

        <div className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i><span><Link to='/PendingOrders' className="Link">Pending</Link></span>
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-table fs-5 me-3"></i><span><Link to='/PendingOrdersForReturn' className="Link">Return Pending</Link></span>
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-clipboard-data fs-5 me-3"></i> <span><Link to='/AssignedOrders' className="Link">Assigned Order</Link></span>
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span><Link to='/DispatchOrders' className="Link">Dispatch</Link></span> 
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span><Link to='/OnTheWayOrders' className="Link">On The Way</Link></span> 
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-people fs-5 me-3"></i>
          <span><Link to='/DeliveredOrders' className="Link">Delivered</Link></span>
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i> <span onClick={Logout}>Logout</span>
        </div>
      </div>
    </div>
  );
}
export default SidebarDelivery;

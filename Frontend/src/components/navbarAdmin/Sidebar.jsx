import React from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/js/dist/dropdown";

import './style.css';

function Sidebar() {
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
          <Link to='/' className="Link">Admin Portal</Link>
        </div>
        <div className="list-group-item py-2 ">
          <i className="bi bi-house fs-5 me-3"></i> <Link to='/' className="Link">Home</Link>
        </div>

        <div className="list-group-item py-2 d-flex align-items-center">
          <i className="bi bi-cart-plus fs-5 me-3"></i>
          <div className="d-inline-flex">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'transparent', border: 'none',color:"black" }}>
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/ActiveProduct" className="Link">
                    ActiveProducts
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/BlockedProduct" className="Link">
                    BlockedProducts
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="list-group-item py-2 d-flex align-items-center">
          <i className="bi bi-people fs-5 me-3"></i>
          <div className="d-inline-flex">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: 'transparent', border: 'none',color:"black" }}>
                Customers
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item ><Link to='/ActiveUsers' className="Link">ActiveUsers</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/ActiveSellers' className="Link">ActiveSellers</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/ActiveDeliveryBoys' className="Link">ActiveDeliveryBoys</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/BlockedUsers' className="Link">BlockedUsers</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/BlockedSellers' className="Link">BlockedSellers</Link></Dropdown.Item>
                <Dropdown.Item ><Link to='/BlockedDeliveryBoys' className="Link">BlockedDeliveryBoys</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="list-group-item py-2">
          <i className="bi bi-power fs-5 me-3"></i> <span onClick={Logout}>Logout</span>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;

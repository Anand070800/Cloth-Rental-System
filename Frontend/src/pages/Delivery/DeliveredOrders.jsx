import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { FaCheck } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';
import NavigationBar from "../../components/navbarDelivery/Navbar";
import Sidebar from '../../components/navbarDelivery/SidebarDelivery'
import "./style.css";

function DeliveredOrders() {
  const [toggle, setToggle] = useState(true)    
  const Toggle = () => {setToggle(!toggle)}  
  const [Orders,setOrders]=useState([]);

//   function OnTheWay(i){
//     let token=localStorage.getItem("token");
//     fetch("http://localhost:3000/on_the_way_order", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({token:token,order_id:Orders[i].order_number}),
//     }).then((res)=>{
//         if(res.status===200){
//             setOrders(
//                 Orders.filter((item,index)=>{
//                     return index!==i;
//                 })
//             )
//         }
//     })
// }
    useEffect(()=>{
        let token=localStorage.getItem("token");
        fetch("http://localhost:3000/get_delivered_orders", {
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
                setOrders([...data]);
            }
        })
        .catch((err) => {
            if(err.status===401){
                err.json()
                .then((data)=>{
                    if(data.error==='unauthorized' || data.error==='/fail'){
                        window.Location.href='/';
                    }else if(data.error==='NotVerified'){
                        window.location.href='/Notverified'
                    }
                })
            }else{
                throw new Error(err.status);
            }
        });
    },[]);
  return (
    <div className='container-fluid bg-secondary min-vh-100 '>
    <div className='row '>
      {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'><Sidebar/></div>}
      {toggle &&  <div className='col-4 col-md-2'></div>}
      <div className='col'>
            <div className="px-3">
                <NavigationBar Toggle={Toggle} />
                <span className="text-white fs-4">All Deliverd Orders</span>
            </div>
            <div className="px-3" style={{height:"82vh",overflowY: 'scroll'}}>
            <table className="table caption-top bg-white rounded mt-2" >
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">image</th>
                    <th scope="col">Order Id</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Customer Number</th>
                    <th scope="col">PickUp Address</th>
                    <th scope="col">Delivered Address</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Orders.map((item,index)=>{
                            return(
                                <>
                                    <tr key={index}>
                                        <td scope="row">{index+1}</td>
                                        <td><img className="mt-2" src={`http://localhost:3000/${item.product_image}`} style={{height: "200px",width: "200px"}}/></td>
                                        <td>{item.order_number}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.cust_name}</td>
                                        <td>{item.cust_mobile_number}</td>
                                        <td>{item.pickup_add}</td>
                                        <td>{item.delivery_add}</td>
                                        <td><FaCheck style={{ color: 'green' }} /><BiCheck style={{ color: 'green' }} /></td>
                                    </tr>
                                </>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
      </div>
    </div>
  </div>

  );
}
export default DeliveredOrders;

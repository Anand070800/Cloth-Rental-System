import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavigationBar from "../../components/navbarDelivery/Navbar";
import Sidebar from '../../components/navbarDelivery/SidebarDelivery'
import "./style.css";

function PendingOrders() {
  const [toggle, setToggle] = useState(true)    
  const Toggle = () => {setToggle(!toggle)}  
  const [Orders,setOrders]=useState([]);

  function AssignMe(i){
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/assigned_delivery_boy", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token:token,order_id:Orders[i].order_id}),
    }).then((res)=>{
        if(res.status===200){
            setOrders(
                Orders.filter((item,index)=>{
                    return index!==i;
                })
            )
        }
    })
}
    useEffect(()=>{
        let token=localStorage.getItem("token");
        fetch("http://localhost:3000/pending_orders", {
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
            // console.log(data);
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
                <span className="text-white fs-4">All Pending Orders</span>
            </div>
            <div className="px-3" style={{height:"82vh",overflowY: 'scroll'}}>
            <table className="table caption-top bg-white rounded mt-2" >
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Order Id</th>
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
                                        <td>{item.order_id}</td>
                                        <td>{item.pickup_address}</td>
                                        <td>{item.delivery_address}</td>
                                        <td><button className="btn btn-danger" onClick={()=>AssignMe(index)}>Assign Me</button></td>
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
export default PendingOrders;

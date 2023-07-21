import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavigationBar from "../../components/navbarDelivery/Navbar";
import Sidebar from '../../components/navbarDelivery/SidebarDelivery'
import "./style.css";

function PendingOrdersForReturn() {
  const [toggle, setToggle] = useState(true)    
  const Toggle = () => {setToggle(!toggle)}  
  const [Orders,setOrders]=useState([]);

  function OrderReturn(id){
    setTimeout(() => {
        fetch("http://localhost:3000/order_returned", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({order_id:id}),
        }).then((res)=>{
            if(res.status===200){
            }
        })
    }, 60000);

  }
  function ReturnApproved(i){
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/returning_request_approved_for_order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token:token,order_id:Orders[i].order_id}),
    }).then((res)=>{
        if(res.status===200){
            OrderReturn(Orders[i].order_id);
            setOrders(
                Orders.filter((item,index)=>{
                    return index!==i;
                })
            )
        }
    })
}
function RentingOver(i){
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/renting_period_over_for_order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token:token,order_id:Orders[i].order_id}),
    }).then((res)=>{
        if(res.status===200){
            OrderReturn(Orders[i].order_id);
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
        fetch("http://localhost:3000/pending_orders_for_return", {
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
                <span className="text-white fs-4">All Return Pending Orders</span>
            </div>
            <div className="px-3" style={{height:"82vh",overflowY: 'scroll'}}>
            <table className="table caption-top bg-white rounded mt-2" >
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">image</th>
                    <th scope="col">Cloth Name</th>
                    <th scope="col">Customer Number</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">PickUp Address</th>
                    <th scope="col">Delivered Address</th>
                    <th scope="col">status</th>
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
                                        <td><img className="mt-2" src={`http://localhost:3000/${item.cloth_image}`} style={{height: "200px",width: "200px"}}/></td>
                                        <td>{item.cloth_name}</td>
                                        <td>{item.customer_mobile_number}</td>
                                        <td>{item.customer_name}</td>
                                        <td>{item.pickup_adress}</td>
                                        <td>{item.delivery_address}</td>
                                        <td>{item.status}</td>
                                        <td>{item.status=="request to return"?<button className="btn btn-info" onClick={()=>ReturnApproved(index)}>Request Approved</button>:<button className="btn btn-info" onClick={()=>RentingOver(index)}>Renting Period Over</button>}</td>
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
export default PendingOrdersForReturn;

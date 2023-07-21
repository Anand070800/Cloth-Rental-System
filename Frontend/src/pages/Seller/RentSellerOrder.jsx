import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavigationBar from "../../components/navbarSeller/Navbar";
import "./Orderstyle.css";

function RentSellerOrder() {
  const [AllProduct,setAllProduct]=useState([]);
//   function blockCloth(i){
//     let token=localStorage.getItem("token");
//     fetch("http://localhost:3000/block_clot", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({token:token,product_id:AllProduct[i].cloth_id}),
//     }).then((res)=>{
//         if(res.status===200){
//             setAllProduct(
//                 AllProduct.filter((item,index)=>{
//                     return index!==i;
//                 })
//             )
//         }
//     })
// }
    useEffect(()=>{
        let token=localStorage.getItem("token");
        fetch("http://localhost:3000/get_seller_order_details_for_rent", {
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
                setAllProduct([...data]);
            }else{
                setPage(page-1);
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
    <>
        <NavigationBar/>
        <div className='container-fluid bg-secondary min-vh-100 '>
        <div className='row '>
        <div className='col'>
                <div className="px-3" style={{height:"95vh",overflowY: 'scroll'}}>
                <table class="table caption-top bg-white rounded mt-2" >
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Customer name</th>
                        <th scope="col">Return Date</th>
                        <th scope="col">Delivery Boys Number</th>
                        <th scope="col">Transection Id</th>
                        <th scope="col">Status</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {
                            AllProduct.map((item,index)=>{
                                return(
                                    <>
                                        <tr key={index}>
                                            <th scope="row">{index+1}</th>
                                            <td><img className="mt-2" src={`http://localhost:3000/${item.ordered_cloth_image}`} style={{height: "200px",width: "200px"}}
                                        /></td>
                                            <td>{item.ordered_cloth_name}</td>
                                            <td>{item.ordered_quantity}</td>
                                            <td>{item.total_amount}</td>
                                            <td>{item.customer_name}</td>
                                            <td>{item.cloth_returning_date.split('T')[0]}</td>
                                            <td>{item.assigned_delivery_boy_mobile_number}</td>
                                            <td>{item.transaction_id}</td>
                                            <td>{item.order_status}</td>
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
    </>

  );
}
export default RentSellerOrder;

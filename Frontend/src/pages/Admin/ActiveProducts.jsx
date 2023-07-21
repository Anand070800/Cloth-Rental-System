import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import NavigationBar from "../../components/navbarAdmin/Navbar";
import Sidebar from '../../components/navbarAdmin/Sidebar'
import "./style.css";

function ActiveProducts() {
  const [toggle, setToggle] = useState(true)    
  const Toggle = () => {setToggle(!toggle)}  
  const [AllProduct,setAllProduct]=useState([]);

  function blockCloth(i){
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/block_cloth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({token:token,product_id:AllProduct[i].cloth_id}),
    }).then((res)=>{
        if(res.status===200){
            setAllProduct(
                AllProduct.filter((item,index)=>{
                    return index!==i;
                })
            )
        }
    })
}
    useEffect(()=>{
        let token=localStorage.getItem("token");
        fetch("http://localhost:3000/active_cloth", {
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
    <div className='container-fluid bg-secondary min-vh-100 '>
    <div className='row '>
      {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'><Sidebar /></div>}
      {toggle &&  <div className='col-4 col-md-2'></div>}
      <div className='col'>
            <div className="px-3">
                <NavigationBar Toggle={Toggle} />
                <span className="text-white fs-4">All Products</span>
            </div>
            <div className="px-3" style={{height:"82vh",overflowY: 'scroll'}}>
            <table class="table caption-top bg-white rounded mt-2" >
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Rent Prices</th>
                    <th scope="col">Sell Prices</th>
                    <th scope="col">Cloth id</th>
                    <th scope="col">Seller Id</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        AllProduct.map((item,index)=>{
                            return(
                                <>
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td><img className="mt-2" src={`http://localhost:3000/${item.image}`} style={{height: "200px",width: "200px"}}
                                    /></td>
                                        <td>{item.cloth_name}</td>
                                        <td>{item.renting_price}</td>
                                        <td>{item.selling_price}</td>
                                        <td>{item.cloth_id}</td>
                                        <td>{item.seller_id}</td>
                                        <td><button className="btn btn-danger" onClick={()=>blockCloth(index)} >block</button></td>
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
export default ActiveProducts;

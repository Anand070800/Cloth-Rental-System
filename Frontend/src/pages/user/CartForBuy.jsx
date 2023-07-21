import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/navbarUser/Navbar"; 
import 'https://checkout.razorpay.com/v1/checkout.js'
const CartForBuy = () => {
  const [products, setPorducts] = useState([]);
  const [maxQuant,setMaxQuant]=useState();
  const [Index,setIndex]=useState();
  const [page,setPage]=useState(1);
  const [totalItems,setTotalItems]=useState(0);
  const [totalPrice,setTotalPrice]=useState(0);
  const navigate=useNavigate();

  function incFun(i){
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/inc_cart_quantity_buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({token,id:products[i].id}),
    })
    .then((res)=>{
        if(res.status===200){
            return res.json();
        }else{
            throw res;
        }
    }).then((data)=>{
        if(products[i].ordered_quantity>=data[0].new_quantity){
          setIndex(i);
          setMaxQuant(`Only ${data[0].current_stock} is Available`);
        }
        else{
            setIndex();
            products[i].ordered_quantity=data[0].new_quantity;
            setTotalPrice(totalPrice+products[i].price);
            setPorducts([...products]);
        }
    }).catch((err)=>{
        throw err;
    })
  }
  function decFun(i){
    let value=products[i].ordered_quantity;
    let token=localStorage.getItem("token");
    if(value>1){
        fetch("http://localhost:3000/desc_cart_quantity_buy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({token,id:products[i].id}),
        })
        .then((res)=>{
            if(res.status===200){
                return res.json();
            }else{
                throw res;
            }
        }).then((data)=>{
            setIndex();
            products[i].ordered_quantity=data[0].new_quantity;
            setTotalPrice(totalPrice-products[i].price);
            setPorducts([...products]);
        }).catch((err)=>{
            throw err;
        })
    }else{
        setIndex(i);
        setMaxQuant(`Quantity Must Be grater then 1`);
    }
  }
  function deleteFun(i){
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/delete_cart_for_buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({token:token,id:products[i].id}),
    }).then((res)=>{
        if(res.status===200){
            setPorducts(
                products.filter((item,index)=>{
                    return index!==i;
                })
            )
            setTotalItems(totalItems-1);
        }
    })
  }
  const pay = async (prices,callback) => {
      let xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:3000/payment");
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              var orderData = JSON.parse(xhr.responseText);
              var options = {
                  "key": "rzp_test_8p9QtGbIoUc92r",
                  "amount": `${prices*100}`,
                  "currency": "INR",
                  "order_id": orderData.id,
                  "handler": function (response) {
                      callback(response.razorpay_payment_id);
                  }
              };
              var rzp1 = new Razorpay(options);
              rzp1.open();
          }
      };
      xhr.send(JSON.stringify({ amount: 50000, currency: "INR" }));
  }

  const checkOut= async()=>{
        let token=localStorage.getItem("token");
        let request = new XMLHttpRequest();
        if (products.length > 0) {
          request.open("POST", "http://localhost:3000/check_aadhar_address", true);
          request.setRequestHeader("Content-Type", "application/json");
          request.onreadystatechange = async function () {
              if (this.readyState == 4 && this.status == 200) {
                  let data=JSON.parse(this.responseText);
                  if(data.filled){
                    await pay(totalPrice,(data)=>{
                        if(data){
                            request.open("POST", "http://localhost:3000/add_order_for_buy", true);
                            request.setRequestHeader("Content-Type", "application/json");
                            request.onreadystatechange = function () {
                                if (this.readyState == 4 && this.status == 200) {
                                    if(this.responseText=="fail"){
                                        alert("Something Went wrong payment return within 24h");
                                    }else{
                                        navigate('/BuyCart');
                                    }
                                }
                            }
                            let obj={token,pay_id:data,cartData:products};
                            request.send(JSON.stringify(obj));
                        }
                    })
                  }else{
                    navigate('/AddAddress');
                  }
              }
          }
          request.send(JSON.stringify({token}));
      } else {
          alert("Add product then CheckOut!!!");
      }
  }

  useEffect(() => {
    let token=localStorage.getItem("token");
    fetch("http://localhost:3000/get_cart_for_buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({token:token}),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        let total=0;
        setTotalItems(data.length);
        if(data.length!=0){
            setPorducts([...data]);
            for(let i=0;i<data.length;i++){
              total+=data[i].price*data[i].ordered_quantity;
            }
            setTotalPrice(total);
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
  }, [totalItems]);

  return (
    <>
      <NavigationBar />
      <div className="container-fluid d-flex justify-content-center">
            <div className="row m-5 pb-2" id="main" style={{backgroundColor: 'white',borderRadius: '1rem',width: '80%',height: '60vh',overflowY: 'scroll'}}>
                <div className="col-12 mt-3 mb-3 font-weight-bold">Shopping Cart</div>
                  {
                    products.map((item, index) =>{
                      return <>
                            <div className="container-fluid mb-2 main_div" key={index}>
                            <div className="row" >
                                <div className="col-4">
                                      <img
                                        className="mt-2"
                                        src={`http://localhost:3000/${item.image}`}
                                        alt="Avtar"
                                        style={{ width: "150px", height: "150px" }}
                                      />
                                </div>
                                <div className="col-4">
                                    <h5>{item.name}</h5>
                                    {
                                      Index===index?<div className="msg mb-2" style={{color:"red"}}>{maxQuant}</div>:<></>
                                    }
                                </div>
                                <div className="col-2 d-flex">
                                    <div className="btn btn_minus  mr-3" style={btns_style} onClick={()=>decFun(index)}>-</div>
                                    <div className="quant">{item.ordered_quantity}</div>
                                    <div className="btn btn_plus ml-3" style={btns_style} onClick={()=>incFun(index)}>+</div>
                                </div>
                                <div className="col-2 text-center">
                                    <div className="price font-weight-bold">Prices: {(item.price).toFixed(2)}</div>
                                    <div className="btn-danger" style={btn_delete_style} onClick={()=>deleteFun(index)} >Remove</div>
                                </div>
                            </div>
                        </div>
                      </>
                    })
                }

            </div>
        </div>
        <div className="container-fluid d-flex justify-content-center">
            <div className="row m-0" style={{borderRadius: '1rem',width: '80%'}}>
                <hr/>
                <div className="col-9"></div>
                <div className="col-2">
                    <div id="items">Total items: {totalItems}</div>
                    <div id="total-amount" className="font-weight-bold">Total Prices:{totalPrice.toFixed(2)}</div>
                </div>
                <div className="col-1">
                    <div id="checkOut" className="btn btn-warning" onClick={checkOut} >Checkout</div>
                </div>
            </div>
        </div>
    </>
  );
};
export default CartForBuy;

const btns_style={
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#d9d9d9',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '20px',
  fontFamily: 'Open Sans',
  fontWeight: '900',
  color: '#202020',
  cursor: 'pointer',
}
const btn_delete_style={borderRadius: '1rem',
  cursor: 'pointer',backgroundColor:'brown',color:'white'}
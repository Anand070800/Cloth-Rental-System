import React, { useRef } from "react";
import { useState, useEffect } from "react";
import NavigationBar from "../../components/navbarUser/Navbar";
const UserHome = () => {
  const [AllProduct, setAllProduct] = useState([]);
  const [page, setPage] = useState(1);
  const [Index,setIndex]=useState();
  const [PopIndex,setPopIndex]=useState();
  const addedSuccessMsg="Added To Cart Successfuly";

  const [popup, setPop] = useState(false);
  const handleClickOpen = (index) => {
    {
      !popup?setPopIndex(index):setPopIndex(-1)
    }
    setPop(!popup);
  };
  const ClosePopup = () => {
    setPop(false);
    setPopIndex(-1);
  };

  const ShowPopupBox=(index)=>{
    console.log("hello",index);
    return(
      <>
      <div style={Popup}>
          <div style={popup_header}>
            <div className="container">
                <h4 onClick={ClosePopup} style={{textAlign:'right',color:'brown'}}>X</h4>
                <div className="row">
                    <div className="col-5">
                        <img src={`http://localhost:3000/${AllProduct[index].cloth_image}`} style={{width:"300px",height:"430px"}}/>
                    </div>
                    <div className="col-7" style={{fontFamily:"Rockwell"}}>
                        <h4 style={{textAlign:"left" ,marginLeft:"25px",wordWrap:'break-word'}}>{AllProduct[index].cloth_name}</h4>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-6">
                                    <div style={{textAlign:"left" ,marginLeft:"30px",fontSize:"20px",fontWeight:'bold',marginTop:"5px"}}>₹ {AllProduct[index].cloth_selling_price}</div>
                                    <button type="button" style={{marginLeft:"10px",marginTop:"10px",width:"185px"}} class="btn btn-warning" onClick={()=>buy_to_cart(index)}>Buy Now</button>
                                </div>
                                <div className="col-6">
                                    <div style={{textAlign:"left" ,marginLeft:"30px",fontSize:"20px",fontWeight:'bold',marginTop:"5px"}}>₹ {AllProduct[index].cloth_renting_price} (/day)</div>
                                    <button type="button" style={{marginTop:"10px",width:"185px"}} class="btn btn-warning" onClick={()=>rent_to_cart(index)}>Rent Now</button>
                                </div>
                            </div>
                            {Index===index?<p className="massage" style={{color:"yellow",background:"gray"}}>{addedSuccessMsg}</p>:<></>}
                            <div className="row mt-3">
                                <h4 style={{textAlign:"left" ,marginLeft:"25px",wordWrap:'break-word'}}>Description:-</h4>
                                <p style={{textAlign:"left",marginLeft:"25px"}}>
                                    {AllProduct[index].cloth_description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  function setMassageTime(time){
    setTimeout(()=>{
      setIndex();
    },time)
  }
  function buy_to_cart(index){
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/add_to_cart_for_buy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, data:AllProduct[index]}),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res;
        } else {
          setIndex(index);
          setMassageTime(800);
          return res.json();
        }
      })
  }
  function rent_to_cart(index){
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/add_to_cart_for_rent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, data:AllProduct[index]}),
    })
      .then((res) => {
        if (res.status !== 200) {
          throw res;
        } else {
          setIndex(index);
          setMassageTime(800);
          return res.json();
        }
      })
  }

  
  useEffect(() => {
    let token = localStorage.getItem("token");
    fetch("http://localhost:3000/get_user_cloths", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, data: { limit: 100, page: page } }),
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
        if (data.length != 0) {
          setAllProduct([...data]);
        } else {
          setPage(page - 1);
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          err.json().then((data) => {
            if (data.error === "unauthorized" || data.error === "/fail") {
              window.Location.href = "/";
            } else if (data.error === "NotVerified") {
              window.location.href = "/Notverified";
            }
          });
        } else {
          throw new Error(err.status);
        }
      });
  }, [page]);

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row row-cols-md-3 mt-2 justify-content-center align-items-center">
          {AllProduct.map((item, index) => {
            return (
              <div key={index} className="mt-2 mb-2 ml-3">
                <div className="product__item">
                  <div className="product__img">
                    <img
                      src={`http://localhost:3000/${item.cloth_image}`}
                      alt="product image"
                      style={{ transform: "none",width: "100%", height: "250px"}}
                    />
                  </div>
                  <div className="p-2  product__info">
                    <h3 className="product__name">
                      <h6 href="/shop/27">{item.cloth_name} </h6>
                    </h3>
                    <span>{item.cloth_description.substring(0, 40)}</span>
                    {/* popup logic */}
                            {popup && PopIndex==index ? (
                                <>
                                {ShowPopupBox(index)}
                                </>
                              ) : (
                                  <></>
                              )}
                            {/* <p>This Simple popup in react js....</p> */}
                            <span onClick={()=>handleClickOpen(index)} style={{color:"blue"}}>...more</span>
                        {/* popup logic end */}
                  </div>
                  <div className="product__card-bottom d-flex align-items-center justify-content-between">
                    <div className="col-6">
                      <span className="Buy">
                        <b>Sell_Price:</b> ₹{item.cloth_selling_price}
                      </span>
                    </div>
                    <div className="col-6">
                      <span className="rent" style={{ textAlign: "right" }}>
                        <b>Rent_Price:</b> ₹{item.cloth_renting_price}
                      </span>
                    </div>
                  </div>
                  {
                      Index===index?<p className="massage" style={{color:"yellow",background:"gray"}}>{addedSuccessMsg}</p>:<></>
                  }
                  <div className="product__card-bottom d-flex align-items-center justify-content-between">
                    <div className="col-6">
                      <button className="buy" onClick={()=>buy_to_cart(index)} style={{width:'100px'}}>Buy Now</button>
                    </div>
                    <div className="col-6">
                      <button className="buy" onClick={()=>rent_to_cart(index)} style={{width:'100px'}}>Rent Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default UserHome;
// const App = {
//   textAlign: "center",
// };

// const main = {
//   backgroundColor: "rgba(39,145,216,0.274)",
//   height: "100%",
//   width: "100%",
//   position: "absolute",
//   top: 0,
// };

const Popup = {
  height: "500px",
  width: "50%",
  backgroundColor: "white",
  position: "fixed",
  top: "20%",
  right: "25%",
  border:'1px solid gray',
  borderRadius:'8px'
};

const popup_header = {
  display: "flex",
  justifyContent: "space-between",
  padding: "0 30px 0 15px"
//   borderBottom: "1px solid black",
};

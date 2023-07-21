import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../../components/navbarSeller/Navbar";
const Home = () => {
    const updateMessage='Added successfully'
    const errorMessage='Some thing went wrong.. try again'
    const Catogeryoptions = ["Tops","Bottoms","Dresses","Wedding","Party","Outerwear", "Activewear","Swimwear","Underwear","Accessories","Footwear"];
    const Sectionoptions = ["Womens","clothing","Men clothing","Children clothing","Shoes and accessories","Formal wear","Casual wear","Swimwear","Athleisure","Intimates"];
    const [Index,setIndex]=useState();
    const imgRef=useRef();
    const navigate=useNavigate();
    const [productData,setProductData]=useState({
        image: "",
        name: "",
        rent: "",
        sell_price:"",
        category:"Tops",
        section:"Womens",
        gender:"male",
        description: "",
        seller: "",
        stock:""
    })
    const handler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setProductData({...productData,[name]:value})
      }
    const imageHandler=(event) => {
        const name=event.target.name;
        const value=event.target.files[0];
        setProductData({...productData,[name]:value});
    }
    function setMassageTime(time){
        setTimeout(()=>{
            setIndex();
        },time)
      }
    const submitProduct=(e)=>{
        e.preventDefault();
        let token=localStorage.getItem("token");
        let request = new XMLHttpRequest();
        console.log("hello");
        request.open("POST", "http://localhost:3000/check_aadhar_address", true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = async function () {
            if (this.readyState == 4 && this.status == 200) {
                let data=JSON.parse(this.responseText);
                if(data.filled){
                    const formData = new FormData();
                    formData.append('image',productData.image);
                    formData.append('name',productData.name);
                    formData.append('rent',productData.rent);
                    formData.append('sell_price',productData.sell_price);
                    formData.append('category',productData.category);
                    formData.append('section',productData.section);
                    formData.append('gender',productData.gender);
                    formData.append('description',productData.description);
                    formData.append('seller',productData.seller);
                    formData.append('stock',productData.stock);
                    formData.append('token',token);
                    fetch('http://localhost:3000/add_new_cloth', {
                    method: 'POST',
                    body: formData
                    }).then((res)=>{
                        if(res.status===200){
                            setIndex(0);
                        }else{
                            setIndex(1);
                        }
                        setProductData({
                            image: "",
                            name: "",
                            rent: "",
                            sell_price:"",
                            category:"",
                            section:"",
                            gender:"male",
                            description: "",
                            seller: "",
                            stock:""
                        })
                        imgRef.current.value='';
                        setMassageTime(800);
                    })
                }else{
                  navigate('/AddAddressSeller');
                }
            }
        }
        request.send(JSON.stringify({token}));
    }
    useEffect(() => {
        let token=localStorage.getItem("token");
        let request = new XMLHttpRequest();
        console.log("hello");
        request.open("POST", "http://localhost:3000/check_aadhar_address", true);
        request.setRequestHeader("Content-Type", "application/json");
        request.onreadystatechange = async function () {
            if (this.readyState == 4 && this.status == 200) {
                let data=JSON.parse(this.responseText);
                if(data.filled){
                    
                }else{
                  navigate('/AddAddressSeller');
                }
            }
        }
        request.send(JSON.stringify({token}));
      }, []);
    
    return <>
    <NavigationBar/>
    <div className="container-fluid">
        <div className="row justify-content-center align-items-center" style={{height:"90vh"}}>
            <div className="col-6 " style={{backgroundColor: "aqua"}}>
                    <form action="" encType="multipart/form-data" onSubmit={submitProduct}>
                            <div className="row text-center my-2">
                                <h4 style={{color: "brown"}}>Add Product</h4>
                            </div>
                            <label htmlFor="product_name" style={{fontSize: "large"}}>Product Name :</label>
                            <input className="mx-2 mb-2"
                                type="text" name="name" id="product_name" placeholder="Enter Product Name"
                                style={{width: "50%"}} value={productData.name} onChange={handler} required/><br/>
                            <label htmlFor="prices_rent" style={{fontSize: "large"}}>Rent_Price ₹ :</label>
                            <input className="mx-5 mb-2"
                                type="number" min="0"  step="0.01" name="rent" id="prices_rent" placeholder="Prices"
                                style={{width: "50%"}} value={productData.rent} onChange={handler} required /><br/>

                            <label htmlFor="prices_Sell" style={{fontSize: "large"}}>Sell_price ₹ :</label>
                            <input className="mx-5 mb-2"
                                type="number" min="0"  step="0.01" name="sell_price" id="prices_Sell" placeholder="Prices"
                                style={{width: "50%"}} value={productData.sell_price} onChange={handler} required /><br/>

                            <label htmlFor="stock" style={{fontSize: "large"}}>Stock :</label><input className="mx-5 mb-2"
                                type="number" min="0"  step="1" name="stock" id="stock" placeholder="Quantity"
                                style={{width: "50%"}} value={productData.stock} onChange={handler} required/><br/>

                            <label htmlFor="category" style={{fontSize: "large"}}>category :</label>
                            <select onChange={handler} name="category" placeholder="Please choose one category" required>
                                    <option >---setect category---</option>
                                    {Catogeryoptions.map((option, index) => {
                                        return <option key={index} value={option}>
                                            {option}
                                        </option>
                                    })}
                            </select>
                            <br/>
                            <label htmlFor="section" style={{fontSize: "large"}}>section :</label>
                            <select onChange={handler} name="section" placeholder="Please choose one Section" required>
                                    <option >---setect section---</option>
                                    {Sectionoptions.map((option, index) => {
                                        return <option key={index}  value={option} >
                                            {option}
                                        </option>
                                    })}
                                </select>
                            <br/>
                            <label  style={{fontSize: "large"}}>Gender :</label>
                            <input type="radio" name="gender" onChange={handler} value="male" checked={productData.gender==="male"} required/>
                            <label htmlFor="html">Male</label>
                            <input type="radio"  name="gender" onChange={handler} value="female" checked={productData.gender==="female"} required/>
                            <label htmlFor="css">Female</label><br/>

                            <label style={{fontSize: "large"}}>Descripation :</label>
                            <textarea className="mx-3 mb-2"
                                name="description" id="description" style={{width: "50%",height: "20%"}}
                                value={productData.description} onChange={handler}
                                required></textarea>
                            <br/>
                            <label style={{fontSize: "large"}}>Add Product Img :</label><input className="mx-2" type="file"
                                name="image" id="image" accept="image/*" style={{width: "50%",height: "20%"}} ref={imgRef} onChange={imageHandler} required /><br/>
                            <div className="row justify-content-center mt-1" id="show" style={{color: "red"}}></div><br/>

                            { Index==1?<><div className="d-flex justify-content-center"><span style={{background:'red',color:'yellow'}}>{errorMessage}</span></div><br/></>:''}
                            { Index==0?<><div className="d-flex justify-content-center"><span style={{background:'green',color:'yellow'}}>{updateMessage}</span></div><br/></>:''}
                            
                            <div className="row justify-content-center">
                                <div className="col-1">
                                    <input className="btn btn-warning" type="submit"
                                        value="Submit"/>
                                </div>
                            </div>
                            <br/>
                    </form>                
            </div>
        </div>
    </div>
    </>
};
export default Home;

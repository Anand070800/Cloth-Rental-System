import React, { useEffect, useState ,useRef} from "react";
import NavigationBar from "../../components/navbarSeller/Navbar";

const SellerProduct=()=>{
    const [AllProduct,setAllProduct]=useState([]);
    const [updateImage,setUpdateImage]=useState("");
    const [page,setPage]=useState(1);
    const imgRef=useRef();
    const Catogeryoptions = ["Tops","Bottoms","Dresses","Wedding","Party","Outerwear", "Activewear","Swimwear","Underwear","Accessories","Footwear"];
    const Sectionoptions = ["Women","clothing","Men clothing","Children clothing","Shoes and accessories","Formal wear","Casual wear","Swimwear","Athleisure","Intimates"];
    const [deleteItem,setdeleteItem]=useState(1);
    function handler(e,index){
        const name=e.target.name;
        const value=e.target.value;
        AllProduct[index][name]=value;
        console.log(name,value);
        console.log(AllProduct);
        setAllProduct([...AllProduct])
    }
    function nextPage(){
        setPage(page+1);
    }
    function prevPage(){
        if(page>1){
            setPage(page-1);
        }
    }
    useEffect(()=>{
        let token=localStorage.getItem("token");
        fetch("http://localhost:3000/get_seller_cloths", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({token,data:{limit: 10, page: page }}),
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
    },[page,deleteItem]);

    const updateProduct=(e,index)=>{
        e.preventDefault();
        let token=localStorage.getItem("token");
        fetch('http://localhost:3000/update_cloth_details', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({token,data:AllProduct[index]}),
        }).then((res)=>{
            console.log(res.status);
        })
    }
    const imageHandler=(event,index) => {
        const value=event.target.files[0];
        setUpdateImage(value);
        // console.log(updateImage);
    }
    const updateimage=(e,index)=>{
        e.preventDefault();
        let token=localStorage.getItem("token");
        const formData = new FormData();
        formData.append('image',updateImage);
        formData.append("cloth_id",AllProduct[index].cloth_id);
        formData.append('token',token);
        fetch('http://localhost:3000/update_cloth_image', {
        method: 'POST',
        body: formData
        }).then((res) => {
            if (res.status !== 200){
            throw res;
            } else {
            return res.json();
            }
        })
        .then((data) => {
            AllProduct[index].cloth_image=data.data;
            setAllProduct([...AllProduct]);
        })
    }
    const deleteProduct=(index)=>{
        let token=localStorage.getItem("token");
        fetch('http://localhost:3000/delete_cloth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({token,cloth_id:AllProduct[index].cloth_id}),
        }).then((res)=>{
            console.log(res.status);
            setdeleteItem(deleteItem+1);
        })
    }
    return (
        <>
        <NavigationBar/>
            <div className="container-fluid" id="main">
            {
                AllProduct.map((item,index)=>{
                return( <form key={index} onSubmit={(Event)=>updateProduct(Event,index)} >
                        <div className="row justify-content-center align-items-center border mt-2 p-2 bg-dark">
                            <div className="col-sm-4 d-flex flex-column justify-content-center">
                                    <img
                                    className="mt-2"
                                    src={`http://localhost:3000/${item.cloth_image}`}
                                    alt="Avtar"
                                    style={{height: "300px",width: "370px"}}
                                    />
                                    <br/>
                                    <div>
                                    <input type="file" name="cloth_image" id="image" accept="image/*" ref={imgRef} onChange={(event)=>imageHandler(event,index)}/>
                                    <button onClick={(event)=>updateimage(event,index)} >update</button>
                                    </div>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="product_name" className="text-white" style={{fontSize: "large"}}>Product
                                    Name:</label><input className="P_name mb-1 mx-2" type="text" name="cloth_name" id="product_name"
                                    placeholder="Enter Product Name" style={{width: "50%"}} value={item.cloth_name} onChange={(Event)=>handler(Event,index)} required/><br/>

                                <label htmlFor="rent" className="text-white" style={{fontSize: "large"}}>Rent Price ₹ :</label><input
                                    className="P_prices mb-1 mx-5" type="number" min="0" step="0.01" name="cloth_renting_price" id="rent"
                                    placeholder="Prices" style={{width: "50%"}} value={item.cloth_renting_price} onChange={(Event)=>handler(Event,index)} required /><br/>

                                <label htmlFor="sell_price" className="text-white" style={{fontSize: "large"}}>Sell Price ₹ :</label>
                                <input
                                    className="P_prices mb-1 mx-5" type="number" min="0" step="0.01" name="cloth_selling_price" id="sell_price"
                                    placeholder="Prices" style={{width: "50%"}} value={item.cloth_selling_price} onChange={(Event)=>handler(Event,index)} required /><br/>
                            
                                <label htmlFor="category" className="text-white" style={{fontSize: "large"}}>Category:</label>
                                <select id="category" className="P_seller mb-1 mx-3" onChange={(Event)=>handler(Event,index)} name="cloth_category" placeholder="Please choose one catogery">
                                    <option key={index} value={item.cloth_category}>{item.cloth_category}</option>
                                    {Catogeryoptions.map((option, index) => {
                                        return <option key={index} value={option}>
                                            {option}
                                        </option>
                                    })}
                                </select>
                            <br/>

                                <label htmlFor="section" className="text-white" style={{fontSize: "large"}}>Section:</label>
                                <select id="section" className="P_seller mb-1 mx-3" onChange={(Event)=>handler(Event,index)} name="cloth_section" placeholder="Please choose one Section">
                                    <option key={index} value={item.cloth_section}>{item.cloth_section}</option>
                                    {Sectionoptions.map((option, index) => {
                                        return <option key={index} value={option} >
                                            {option}
                                        </option>
                                    })}
                                </select>
                            <br/>
                                <label htmlFor="gender" className="text-white"  style={{fontSize: "large"}}>Gender:</label>
                                    <input className="mx-2" type="radio" name="cloth_gender" onChange={(Event)=>handler(Event,index)} value="male" checked={item.cloth_gender==='male'}/>
                                    <label className="text-white">Male</label>
                                    <input className="mx-2" type="radio" name="cloth_gender" onChange={(Event)=>handler(Event,index)} value="female" checked={item.cloth_gender==='female'}/>
                                    <label className="text-white">Female</label>
                                <br/>

                                <label htmlFor="stock" className="text-white" style={{fontSize: "large"}}>Stock :</label><input className="P_quantity mb-2 mx-4"
                                    type="number" min="0"  step="1" name="cloth_stock" id="stock" placeholder="Stock"
                                    style={{width: "15%"}} value={item.cloth_stock} onChange={(Event)=>handler(Event,index)} required /><br/>

                                <label className="text-white" style={{fontSize: "large"}}>Descripation :</label>
                                <textarea className="P_desc mt-2 mx-1" name="cloth_description" id="description"
                                    style={{width: "50%",height: "20%"}} value={item.cloth_description} onChange={(Event)=>handler(Event,index)} required></textarea>
                            </div>
                            <div className="col-sm-1 mx-3">
                                <div className="P_button row justify-content-center"><input className="btn btn-success" type="submit"
                                        value="Update" />
                                    <div className="btn btn-danger mt-3 delete" onClick={()=>deleteProduct(index)}>Delete</div>
                                </div>
                            </div>
                        </div>
                    </form>
                )
                })
            }
            <div className="row justify-content-evenly my-2">
                <div className="col-1">
                    <button className="btn btn-warning" onClick={prevPage}>Prev</button>
                </div>
                <div className="col-1">
                    <button className="btn btn-warning" onClick={nextPage}>Next</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default SellerProduct;
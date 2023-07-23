const express = require("express")
const app = express();
const port = 3000;
const cors=require("cors");
const jwt=require('jsonwebtoken')
app.use(cors());
const {initDb}=require('./Database/Postgres/client');
initDb();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Razorpay=require("razorpay");

app.use(express.static("uploads"));
app.use(express.static("uploads_file"));
const multer = require("multer");
const uploads = multer({ dest: "uploads/" })
const uploads_file = multer({ dest: "uploads_file/" })
// routes for temprary
const {query}=require('./Database/Postgres/send_query')
const signup_routes=require('./routes/signup_routes');
const login_routes=require('./routes/login_routes');
const verifyOtp=require('./routes/verifiyOtp_routes');
const check_aadhar_address=require('./routes/check_aadhar_address_routes');
const add_aadhar_address=require('./routes/add_aadhar_address_routes');
const add_profile_picture=require('./routes/add_profile_picture_routes');

app.use('/signup',signup_routes)
app.use('/login',login_routes);
app.use('/verifyOtp',verifyOtp);
app.use('/check_aadhar_address',check_aadhar_address);
app.use('/add_aadhar_address',add_aadhar_address);
app.use('/add_profile_picture',add_profile_picture);

// Routes for user
const get_cloths_for_user_routes=require('./routes/users/get_cloths_for_user_routes');
const add_to_cart_for_buy=require("./routes/users/add_to_cart_for_buy_routes");
const remove_from_cart_for_buy=require("./routes/users/remove_from_cart_for_buy_routes");
const add_to_cart_for_rent=require('./routes/users/add_to_cart_for_rent_routes');
const remove_from_cart_for_rent=require("./routes/users/remove_from_cart_for_rent_routes");
const get_cart_for_buy=require('./routes/users/get_cart_for_buy_routes');
const inc_cart_quantity_buy=require('./routes/users/inc_cart_quantity_buy_routes');
const desc_cart_quantity_buy=require('./routes/users/desc_cart_quantity_buy_routes');
const delete_cart_for_buy=require('./routes/users/delete_cart_for_buy_routes');

const get_cart_for_rent=require('./routes/users/get_cart_for_rent_routes');
const inc_cart_quantity_rent=require('./routes/users/inc_cart_quantity_rent_routes');
const desc_cart_quantity_rent=require('./routes/users/desc_cart_quantity_rent_routes');
const delete_cart_for_rent=require('./routes/users/delete_cart_for_rent_routes');
const update_cart_for_rent_date=require('./routes/users/update_cart_for_rent_date_routes');
const add_order_for_buy=require('./routes/users/add_order_for_buy_routes');
const add_order_for_rent=require('./routes/users/add_order_for_rent_routes');
const get_user_order_details_for_buy=require('./routes/users/get_user_order_details_for_buy_routes');
const get_user_order_details_for_rent=require('./routes/users/get_user_order_details_for_rent_routes');
const request_to_return_order=require('./routes/users/request_to_return_order_routes');

app.use('/get_user_cloths',get_cloths_for_user_routes);
app.use('/add_to_cart_for_buy',add_to_cart_for_buy);
// app.use('/remove_from_cart_for_buy',remove_from_cart_for_buy);
app.use('/add_to_cart_for_rent',add_to_cart_for_rent);
// app.use('/remove_from_cart_for_rent',remove_from_cart_for_rent);
app.use('/get_cart_for_buy',get_cart_for_buy); 
app.use('/inc_cart_quantity_buy',inc_cart_quantity_buy); 
app.use('/desc_cart_quantity_buy',desc_cart_quantity_buy);
app.use('/delete_cart_for_buy',delete_cart_for_buy);
app.use('/get_cart_for_rent',get_cart_for_rent);
app.use('/inc_cart_quantity_rent',inc_cart_quantity_rent); 
app.use('/desc_cart_quantity_rent',desc_cart_quantity_rent);
app.use('/delete_cart_for_rent',delete_cart_for_rent);
app.use('/update_cart_for_rent_date',update_cart_for_rent_date);
app.use('/add_order_for_buy',add_order_for_buy);
app.use('/add_order_for_rent',add_order_for_rent);
app.use('/get_user_order_details_for_buy',get_user_order_details_for_buy);
app.use('/get_user_order_details_for_rent',get_user_order_details_for_rent);
app.use('/request_to_return_order',request_to_return_order);
// Routes for seller

const get_cloths_for_seller_routes=require('./routes/sellers/get_cloths_for_seller_routes');
const Add_new_cloth=require('./routes/sellers/Add_new_cloth_routes');
const delete_cloth=require('./routes/sellers/delete_cloth_routes');
const update_cloth_details=require('./routes/sellers/update_cloth_details_routes');
const update_cloth_image=require('./routes/sellers/update_cloth_image_routes');
const get_seller_order_details_for_buy=require('./routes/sellers/get_seller_order_details_for_buy_routes');
const get_seller_order_details_for_rent=require('./routes/sellers/get_seller_order_details_for_rent_routes');
app.use('/get_seller_cloths',get_cloths_for_seller_routes);
app.use('/add_new_cloth',Add_new_cloth);
app.use('/delete_cloth',delete_cloth);
app.use('/update_cloth_details',update_cloth_details);
app.use('/update_cloth_image',update_cloth_image);
app.use('/get_seller_order_details_for_buy',get_seller_order_details_for_buy);
app.use('/get_seller_order_details_for_rent',get_seller_order_details_for_rent);

// Routes for delivery boys
const pending_orders=require('./routes/delivery/pending_orders_routes');
const pending_orders_for_return=require('./routes/delivery/pending_orders_for_return_routes');
// const pending_orders_for_buy=require('./routes/delivery/pending_orders_for_buy_routes');
// const pending_orders_for_rent=require('./routes/delivery/pending_orders_for_rent_routes');
const assigned_delivery_boy=require('./routes/delivery/assigned_delivery_boy_routes');
const get_assigned_orders=require('./routes/delivery/get_assigned_orders_routes');
const dispatch_order=require('./routes/delivery/dispatch_order_routes');
const get_dispatched_orders=require('./routes/delivery/get_dispatched_orders_routes');
const on_the_way_order=require('./routes/delivery/on_the_way_order_routes');
const get_on_the_way_orders=require('./routes/delivery/get_on_the_way_orders_routes');
const delivered_order=require('./routes/delivery/delivered_order_routes');
const get_delivered_orders=require('./routes/delivery/get_delivered_orders_routes');

const returning_request_approved_for_order=require('./routes/delivery/returning_request_approved_for_order_routes');
const renting_period_over_for_order=require('./routes/delivery/renting_period_over_for_order_routes');
const order_returned=require('./routes/delivery/order_returned_routes');

app.use('/pending_orders',pending_orders);
app.use('/pending_orders_for_return',pending_orders_for_return);
// app.use('/pending_orders_for_buy',pending_orders_for_buy);
// app.use('/pending_orders_for_rent',pending_orders_for_rent);
app.use('/assigned_delivery_boy',assigned_delivery_boy);
app.use('/get_assigned_orders',get_assigned_orders);
app.use('/dispatch_order',dispatch_order);
app.use('/get_dispatched_orders',get_dispatched_orders);
app.use('/on_the_way_order',on_the_way_order);
app.use('/get_on_the_way_orders',get_on_the_way_orders);
app.use('/delivered_order',delivered_order);
app.use('/get_delivered_orders',get_delivered_orders);

app.use('/returning_request_approved_for_order',returning_request_approved_for_order);
app.use('/renting_period_over_for_order',renting_period_over_for_order);
app.use('/order_returned',order_returned);

//Routes for Admin
const block_seller=require('./routes/Admin/block_seller_routes');
const unblock_seller=require('./routes/Admin/unblock_seller_routes');
const block_user=require('./routes/Admin/block_user_routes');
const unblock_user= require("./routes/Admin/unblock_user_routes");
const block_delivery_boy=require("./routes/Admin/block_delivery_boy_routes");
const unblock_delivery_boy=require("./routes/Admin/unblock_delivery_boy_routes");
const block_cloth=require('./routes/Admin/block_cloth_routes');
const unblock_cloth=require('./routes/Admin/unblock_cloth_routes');
const active_cloth=require('./routes/Admin/active_cloth_routes');
const blocked_cloth=require('./routes/Admin/blocked_cloth_routes');
const active_user=require('./routes/Admin/active_user_routes');
const active_seller=require('./routes/Admin/active_seller_routes');
const active_delivery_boys=require('./routes/Admin/active_delivery_boys_routes');
const blocked_user=require('./routes/Admin/blocked_user_routes');
const blocked_seller=require('./routes/Admin/blocked_seller_routes');
const blocked_delivery_boys=require('./routes/Admin/blocked_delivery_boys_routes');
const get_all_counts=require('./routes/Admin/get_all_counts_routes')


app.use('/block_seller',block_seller);
app.use('/unblock_seller',unblock_seller);
app.use('/block_user',block_user);
app.use('/unblock_user',unblock_user)
app.use('/block_delivery_boy',block_delivery_boy);
app.use('/unblock_delivery_boy',unblock_delivery_boy);
app.use('/block_cloth',block_cloth);
app.use('/unblock_cloth',unblock_cloth);
app.use('/active_cloth',active_cloth);
app.use('/blocked_cloth',blocked_cloth);
app.use('/active_user',active_user);
app.use('/active_seller',active_seller);
app.use('/active_delivery_boys',active_delivery_boys);
app.use('/blocked_user',blocked_user);
app.use('/blocked_seller',blocked_seller);
app.use('/blocked_delivery_boys',blocked_delivery_boys); 
app.use('/get_all_counts',get_all_counts);








app.post('/checkAuthFront',(req,res)=>{
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,(err,result)=>{
            if(err){
                res.status(401).json('fail');
            }else if(result ){
                if(result.status==='blocked' || result.emailVerified===false){
                    res.status(401).js({error:'Your accout is blocked'});
                }else{
                    res.status(200).json({name:result.name,role:result.role});
                }
            }
        });
    }else{
        res.status(401).json('fail');
    }
})
const sendEmail=require('./controllers/sendEmail');
const {otp}=require('./controllers/otp');
app.post('/resendOtp',(req,res)=>{
    if(req.body.token){
        jwt.verify(req.body.token,process.env.ACCESS_TOKEN,(err,result)=>{
            if(err){
                res.status(401).json('fail');
            }else if(result ){
                otp(result.id,(otp_number)=>{
                    sendEmail({email:result.email,otp:otp_number},(err,status)=>{
                        if(err){
                            console.log("something wrong at resend otp");
                        }else{
                            res.status(200).json({success:"otpVerifiy"});
                           
                        }
                    })
                });
            }
        });
    }else{
        res.status(401).json('fail');
    }
})
app.post('/forgot',async(req,res)=>{
    console.log(req.body);
   let data=await query(`SELECT * FROM GET_LOGIN_DETAIL('${req.body.Email.toLowerCase()}')`);
   if(data.length>0){
    const token=jwt.sign({
        id:data[0].user_id,
        emailVerified:false,
        name:data[0].user_name,
        username:data[0].user_username,
        role:data[0].user_role,
        email:req.body.Email.toLowerCase(),
        status:data[0].user_status},process.env.ACCESS_TOKEN);
        res.status(200).json({token,name:data[0].user_name,username:data[0].user_username,success:"success"});
    }else{
        res.status(200).json({error:'Invalid email'});
    }
})
app.post("/payment", (req,res)=>{
    let {amount} = req.body;
    let instance = new Razorpay({ key_id: 'rzp_test_8p9QtGbIoUc92r', key_secret: 'REilsv8uvjJf0OU9mGyLKHXG' })
    let order = instance.orders.create({
        amount: amount*100,
        currency: "INR",
      });
    res.status(200).json({
        success:true,
        order,
        amount
    });
});

app.listen(port, () => {
    console.log("server is started now..... at port 3000");
})
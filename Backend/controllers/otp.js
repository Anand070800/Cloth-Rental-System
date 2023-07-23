const {query}=require('../Database/Postgres/send_query')
const otp=async(id,callback)=>{
    const min = 111111;
    const max = 999999;
    const x = Math.floor(Math.random() * (max - min + 1)) + min;
    let data;
    data=await query(`call delete_otp_data(${id})`);
    data=await query(`call add_otp_data(${id},'${x}')`); 
    setTimeout(async()=>{
        data=await query(`call delete_otp_data(${id})`);
    },60000) 
    callback(`'${x}'`); 
}
module.exports ={otp};
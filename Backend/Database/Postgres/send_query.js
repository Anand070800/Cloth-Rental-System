const express = require("express")
const {client} =require('./client');

const query=async (query_text)=>{
    try{
        const data=await client.query(query_text);
        return data.rows;
    }catch(err){
        // console.log(err.stack)
        return {error:err}
    }
}
module.exports={query}
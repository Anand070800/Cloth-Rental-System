const checkAuth=async (payload)=>{
    let result=await fetch("http://localhost:3000/checkAuthFront", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload),
      })
    // console.log(result);
    return result;
}
export default checkAuth;
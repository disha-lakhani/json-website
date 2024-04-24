const postData=(url,data)=>{

   
    fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    window.location.href="/pages/product.html"
}
export default postData
const updatedata=(data)=>{
    fetch(`http://localhost:3000/cart/${data.id}`,{
        method:"PATCH",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
}

export default updatedata
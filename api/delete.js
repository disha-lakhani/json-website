const deletedata=(id)=>{
    fetch(`http://localhost:3000/cart/${id}`,{
        method:"DELETE"
    })
    // .catch((error)=>{
    //     console.log("error message");
    // })
}

export default deletedata
import postData from "../api/post.js";
import navBar from "../component/navbar.js";

document.getElementById("navbar").innerHTML=navBar()


const AddProduct=(e)=>{
    e.preventDefault()

    let data={
        title:document.getElementById("title").value,
        img:document.getElementById("img").value,
        price:document.getElementById("price").value,
        Category:document.getElementById("Category").value
    }
    postData("http://localhost:3000/product",data)
}
document.getElementById("data").addEventListener("submit",AddProduct)
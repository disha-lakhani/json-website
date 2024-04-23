

import navBar from "../component/navbar.js";
import display from "../component/ui.js";
import getData from "../api/get.js";



document.getElementById("navbar").innerHTML=navBar()

const get=async()=>{
    let data=await getData("http://localhost:3000/product")
  
    display(data,"box")
    console.log(data)
    
}
get()


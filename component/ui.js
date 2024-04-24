import updatedata from "../api/patch.js"
import postData from "../api/post.js"
import deleteproduct from "../api/deleteproduct.js"

const isExitcart=(data)=>{
    fetch(`http://localhost:3000/cart/${data.id}`)
    .then((res)=>res.json())
    .then((res)=>{
        res.qnt+=1
        updatedata(res)
    })

    .catch((error)=>{
        postData("http://localhost:3000/cart",data)
    })
} 










const display = (data,id) => {
  
    document.getElementById(id).innerHTML = ""
    data.map((ele) => {

        
        let title = document.createElement("h2")
        title.innerHTML = ele.title
        let img = document.createElement("img")
        img.src = ele.img
        let price = document.createElement("price")
        price.innerHTML = "Price:" + ele.price

        let Category = document.createElement("p")
        Category.innerHTML ="Category:" + ele.Category

        let btn=document.createElement("button")
        btn.innerHTML="BUY"
        btn.addEventListener("click",()=>{
            isExitcart({...ele,qty:1})
        })
        let btn1=document.createElement("button")
        btn1.innerHTML="DELETE"
        btn1.addEventListener("click",()=>{
            deleteproduct(ele.id)
        })

        let div = document.createElement("div")
        div.append(img,title, price, Category,btn,btn1)
      
       
       
        div.setAttribute("class","box1")
        img.setAttribute("class","images")
        btn1.setAttribute("class","dlt")
        btn.setAttribute("class","buy")

        document.getElementById(id).append(div)



    })

    

}
export default display
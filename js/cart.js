import deletedata from "../api/delete.js";
import getData from "../api/get.js";
import updatedata from "../api/patch.js";
import navBar from "../component/navbar.js";
document.getElementById("navbar").innerHTML=navBar()



const handleqty=(opr,data)=>{
    if(opr=="+"){
        data.qty+=1
        updatedata(data)
    }
    else{
        if(data.qty>=2){
            data.qty-=1
            updatedata(data)
        }
        else{
            deletedata(data.id)
        }
    }
}




let total=0

const uimaker=(data,id)=>{
    document.getElementById(id).innerHTML=""
    data.map((ele)=>{
        total+=ele.price*ele.qty
        

       
      
      
        let title=document.createElement("h4")
        title.innerHTML=ele.title
        let td1=document.createElement("td")
        td1.append(title)
        td1.setAttribute("class","title")


        let img=document.createElement("img")
        img.src=ele.img
        let td2=document.createElement("td")
        td2.append(img)
        img.setAttribute("class","image")
       

        let btn1=document.createElement("button")
        btn1.innerHTML="-"
        btn1.addEventListener("click",()=>handleqty("-",ele))

        let qty=document.createElement("button")
        qty.innerHTML=ele.qty
        let btn2=document.createElement("button")
        btn2.innerHTML="+"
        btn2.addEventListener("click",()=>handleqty("+",ele))
        let td3=document.createElement("td")
        td3.append(btn1,qty,btn2)


        let td4=document.createElement("td")
        td4.innerHTML=ele.price*ele.qty
        


        let btn3=document.createElement("button")
        btn3.innerHTML="DELETE"
        btn3.addEventListener("click",()=>{
            deletedata(ele.id)
        })

        let td5=document.createElement("td") 
        td5.append(btn3)

        let tr=document.createElement("tr")
        tr.append(td1,td2,td3,td4,td5)

        document.getElementById(id).append(tr)


    })
    let btn4=document.createElement("button")
        let p=document.createElement("p")
        p.innerHTML=total
        // p.setAttribute("class","text")

        btn4.innerHTML="checkout"
        // btn4.setAttribute("class","text")

    document.getElementById("checkout").append(p,btn4)
}



let get=async()=>{
    let data=await getData("http://localhost:3000/cart")
    uimaker(data,"tbody")
}

get()

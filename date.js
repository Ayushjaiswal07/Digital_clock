let a= new Date();
let h= a.getHours()
let m= a.getMinutes()
let s=a.getSeconds()
let d=a.getDate()
let mo=a.getMonth()
let y=a.getFullYear()

// console.log(h, m, s, d)

let bc= document.body
bc.style.backgroundImage="url('bg2.gif')"
bc.style.backgroundRepeat= "repeat"
bc.style.backgroundPosition="center"
bc.style.backgroundPositionY="0.01em"
bc.style.backgroundSize="65em"

let div=document.getElementsByTagName("div")[0]
div.style.color="#e267c8"





let radisplay=setInterval(func=()=>{
    a=new Date()
    h=a.getHours()
    s=a.getSeconds()
    m=a.getMinutes()
    d=a.getDate()
    mo=a.getMonth()
    y=a.getFullYear()
    
    document.getElementsByTagName("u")[0].innerHTML=`${d}/${mo+1}/${y}`

    document.getElementsByClassName("h")[0].innerHTML=`${h}`

    document.getElementsByClassName("m")[0].innerHTML=`${m}`

    document.getElementsByClassName("s")[0].innerHTML=`${s}`  

    // css class toggel
    
    document.getElementsByTagName("div")[2].classList.toggle("b2")

    document.getElementsByTagName("div")[4].classList.toggle("b2")


    document.getElementsByTagName("section")[0].classList.toggle("d2")
   
},1000)
 


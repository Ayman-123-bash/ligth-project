let box = document.querySelector("#light")
let button1 = document.querySelector("#btnON")
let button2= document.querySelector("#btnOFF")

button1.addEventListener("click",function(){
    box.style.backgroundColor = "yellow"
})

button2.addEventListener("click", function(){
    box.style.backgroundColor = "transparent"
})
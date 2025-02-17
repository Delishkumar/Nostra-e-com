var pop = document.getElementById("popup")
var butn = document.getElementById("close")

butn.addEventListener("click",function(){
  pop.style.display="none"
})



var slidemenu = document.querySelector(".slideoption")
var menubutn = document.getElementById("menubutn")
var cut = document.getElementById("cut") 
menubutn.addEventListener("click",function(){
    slidemenu.style.display="flex"
})
cut.addEventListener("click",function(){
    slidemenu.style.display="none"
})





var pop = document.getElementById("pup")
var butn = document.getElementById("clo")

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

const sbutn = document.getElementById("sbutn")
let inputbox = document.getElementById("search")
var con = document.querySelector(".shirts")
var divlist = con.querySelectorAll("div")

sbutn.addEventListener("click",function(){
  var entervalue = search.value.toUpperCase()
  for(count = 0; count<divlist.length; count = count+1){

    var h6text = divlist[count].querySelector("h6").textContent
    if(h6text.toUpperCase().indexOf(entervalue)<0){
     divlist[count].style.display="none"
    }
    else{
       divlist[count].style.display="inline"
    }
  }
})
  

document.getElementsByName("check").forEach( checkbox => { 
  var checkvalue = checkbox.value.toUpperCase()
  var container = document.querySelector(".shirts")
var divlists = container.querySelectorAll("div")

checkbox.addEventListener("click",function(){
  for(i = 0; i<divlists.length; i = i+1){
    var h6list = divlists[i].querySelector("h6").textContent
    if(checkbox.checked){
      console.log("clicked")
      if(h6list.toUpperCase().indexOf(checkvalue)>0){
          divlists[i].style.display="inline"

      }
    else{
      divlists[i].style.display="none"
    }
  
    }
    else{
      console.log("uncheck")
     divlist[i].style.display="inline"
    }
  }

})
  
  
});

    
   
    
    
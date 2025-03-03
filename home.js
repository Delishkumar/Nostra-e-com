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

let index = 0;
function autoSlide() {
    const slides = document.querySelector('.landscope');
    index = (index + 1) % 3; // Change image index
     slides.style.transform = `translateX(-${index * 20}%)`
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds

function startCountdown(durationInSeconds) {
  let timeLeft = durationInSeconds;

  function updateTimer() {
      if (timeLeft <= 0) {
          document.getElementById("countdown").innerHTML = "🚀 Offer Expired!";
          clearInterval(timer);
          return;
      }
      const hour = Math.floor(timeLeft/3600)
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;

      document.getElementById("countdown").innerHTML =
          `${hour}h ; ${minutes}m ;${seconds}s`;

      timeLeft--;
  }

  updateTimer(); // Initial call to avoid delay
  let timer = setInterval(updateTimer, 1000);
}

// Start countdown for 1 hour (3600 seconds)
startCountdown(3600);





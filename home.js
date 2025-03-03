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

function startCountdown(endTime) {
  function updateTimer() {
      const now = new Date().getTime();
      const timeLeft = endTime - now;

      if (timeLeft <= 0) {
          document.getElementById("countdown").innerHTML = "🚀 Offer Expired!";
          clearInterval(timer);
          return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML =
          `${days}d ;${hours}h ;${minutes}m ;${seconds}s`;
  }

  updateTimer(); // Call initially to avoid delay
  let timer = setInterval(updateTimer, 1000);
}

// Set offer expiry date (YYYY, MM (0-11), DD, HH, MM, SS)
const offerEndTime = new Date(2025, 2, 10, 23, 59, 59).getTime(); // March 10, 2025, 11:59:59 PM
startCountdown(offerEndTime);





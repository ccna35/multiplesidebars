const sliderImages = document.querySelectorAll(".welcome-img");
const sliderCircles = document.querySelectorAll(".circles span");

let index = 0;

// Slider logic
setInterval(() => {
  if (index === sliderImages.length) index = 0;
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  sliderImages[index].classList.add("active");
  // Slider's circles logic
  sliderCircles.forEach((circle) => {
    circle.style.borderColor = "white";
    if (sliderImages[index].dataset.slide === circle.dataset.slide) {
      circle.style.borderColor = "#c12f6c";
    }
  });
  index++;
}, 3000);

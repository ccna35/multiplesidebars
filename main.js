const sliderImages = document.querySelectorAll(".welcome-img");
const sliderCircles = document.querySelectorAll(".circles span");

let index = 0;

setInterval(() => {
  if (index === sliderImages.length) index = 0;
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  sliderImages[index].classList.add("active");
  index++;
}, 3000);

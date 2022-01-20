const sliderImages = document.querySelectorAll(".welcome-img");
const sliderCircles = document.querySelectorAll(".circles span");

let index = 0;

setInterval(() => {
  if (index === sliderImages.length) index = 0;
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });
  //   console.log(index);
  sliderImages[index].classList.add("active");
  index++;
}, 5000);

// console.log(sliderImages[index]);

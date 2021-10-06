// Video solution
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
let activeSlide = 0;

setBgToBody();

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) activeSlide = 0;

  setBgToBody();
  setActiveSlide();
});

leftBtn.addEventListener('click', () => {
  activeSlide--;

  if (activeSlide < 0) activeSlide = slides.length - 1;

  setBgToBody();
  setActiveSlide();
});

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
}

// My own solution
// const leftBtn = document.getElementById('left');
// const rightBtn = document.getElementById('right');
// const slideImage = document.querySelectorAll('.slide');

// let counter = 0;

// rightBtn.addEventListener('click', () => {
//   sliderImage('right');
// });
// leftBtn.addEventListener('click', () => {
//   sliderImage('left');
// });

// function sliderImage(way) {
//   if (way === 'right') {
//     counter++;
//     if (counter > slideImage.length - 1) counter = 0;
//   } else {
//     counter--;
//     if (counter < 0) counter = slideImage.length - 1;
//   }

//   // remove active from every slide
//   slideImage.forEach((img) => img.classList.remove('active'));

//   // add the active to the right slide
//   slideImage[counter].classList.add('active');

//   // change the background with the right image
//   document.body.style.backgroundImage =
//     slideImage[counter].style.backgroundImage;
// }

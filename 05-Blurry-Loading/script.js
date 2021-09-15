// Udemy Solution
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

// let int = setInterval(blurring, 30);

function blurring() {
  load++;

  console.log(load);
}

// My Way
// const loadText = document.querySelector('.loading-text');
// const bg = document.querySelector('.bg');

// let load = 70;

// let int = setInterval(blurring, 30);

// function blurring() {
//   load--;
//   bg.style.filter = `blur(${load}px)`;
//   loadText.textContent = `${load}%`;
//   console.log(load);
//   if (load === 0) {
//     clearInterval(int);
//     loadText.style.fontSize = '0px';
//   }
// }

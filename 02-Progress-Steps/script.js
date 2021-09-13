// Couse Solution
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});
prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width = `${
    ((actives.length - 1) / (circles.length - 1)) * 100
  }%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}

// // My Way
// const progress = document.querySelector('.progress');
// const circles = document.querySelectorAll('.circle');
// const prevBtn = document.querySelector('#prev');
// const nextBtn = document.querySelector('#next');

// let progressWidth = null;
// nextBtn.addEventListener('click', nextClick);
// prevBtn.addEventListener('click', prevClick);

// function nextClick() {
//   progressWidth += 33;
//   if (progressWidth === 99) {
//     nextBtn.setAttribute('disabled', true);
//   }
//   prevBtn.disabled = false;
//   progress.style.width = `${progressWidth}%`;

//   if (progressWidth === 33) {
//     circles[1].classList.add('active');
//   }
//   if (progressWidth === 66) {
//     circles[2].classList.add('active');
//   }
//   if (progressWidth === 99) {
//     circles[3].classList.add('active');
//   }
// }
// function prevClick() {
//   console.log(progressWidth);
//   progressWidth -= 33;
//   if (progressWidth === 0) {
//     prevBtn.disabled = true;
//   }
//   nextBtn.disabled = false;
//   progress.style.width = `${progressWidth}%`;
//   console.log(progressWidth);
//   if (progressWidth === 0) {
//     circles[1].classList.remove('active');
//   }
//   if (progressWidth === 33) {
//     circles[2].classList.remove('active');
//   }
//   if (progressWidth === 66) {
//     circles[3].classList.remove('active');
//   }
// }

// My own way
// let totalWater = 0;
// const smallCups = document.querySelectorAll('.cup-small');
// const liters = document.getElementById('liters');
// const bigCup = document.getElementById('percentage');
// const remained = document.getElementById('remained');

// liters.innerHTML = `2L`;

// smallCups.forEach((cup) => cup.addEventListener('click', fillSmallCups));

// function fillSmallCups() {
//   if (this.classList.contains('full')) {
//     this.classList.remove('full');
//     totalWater -= 0.25;
//   } else {
//     this.classList.add('full');
//     totalWater += 0.25;
//   }

//   udpateBigCup();
// }

// function udpateBigCup() {
//   liters.innerHTML = `${2 - totalWater}L`;
//   let percentage = totalWater / 2;
//   bigCup.style.height = `${percentage * 100}%`;
//   bigCup.innerHTML = `${percentage === 0 ? '' : `${percentage.toFixed(2)}%`}`;

//   console.log(percentage);
//   percentage === 1
//     ? (remained.style.display = 'none')
//     : (remained.style.display = 'flex');
// }

// Video Solution

const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => higlightCups(index));
});

function higlightCups(index) {
  if (
    smallCups[index].classList.contains('full') &&
    !smallCups[index].nextElementSibling.classList.contains('full')
  ) {
    index--;
  }

  smallCups.forEach((cup, index2) => {
    if (index2 <= index) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerHTML = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`;
  }
}

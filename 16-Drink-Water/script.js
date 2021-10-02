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

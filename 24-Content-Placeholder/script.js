const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const nameEl = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsTexts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
  header.innerHTML = `<img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />`;

  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML = ` Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, reprehenderit.`;
  profileImg.innerHTML = ` <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
  nameEl.innerHTML = 'John Doe';
  date.innerHTML = 'Oct 08, 2020';

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgsTexts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

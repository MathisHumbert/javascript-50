const btns = document.querySelectorAll('.faq-toggle');

btns.forEach((btn) => btn.addEventListener('click', displayQuestions));

function displayQuestions() {
  this.parentElement.classList.toggle('active');
}

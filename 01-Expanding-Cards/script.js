const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((panel) => panel.addEventListener('click', handleDisplay));

function handleDisplay() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    panels.forEach((panel) => panel.classList.remove('active'));
    this.classList.add('active');
  }
}

const target = document.getElementById('TOP');
const changeElement1 = document.getElementById('header');
window.addEventListener('scroll', () => {
  const rect = target.getBoundingClientRect();
  if (rect.top <= 100) {
    changeElement1.classList.add('visible');
  } else {
    changeElement1.classList.remove('visible');
  }
});
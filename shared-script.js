// ===== HAMBURGER MENU =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => { navLinks.classList.toggle('active'); });

// ===== STATS COUNTER =====
const stats = document.querySelectorAll('.stat p');
stats.forEach(stat => {
  const updateCount = () => {
    const target = +stat.parentElement.dataset.target;
    const count = +stat.innerText;
    const increment = target / 200; // speed
    if(count < target){
      stat.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else { stat.innerText = target.toLocaleString(); }
  };
  updateCount();
});

// ===== SCROLL ANIMATION =====
const scrollElements = document.querySelectorAll('.show-on-scroll');
const elementInView = (el, dividend=1) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight / dividend);
};
const displayScrollElement = (el) => { el.style.opacity = 1; el.style.transform = 'translateY(0)'; };
const hideScrollElement = (el) => { el.style.opacity = 0; el.style.transform = 'translateY(50px)'; };

const handleScrollAnimation = () => {
  scrollElements.forEach(el => {
    if(elementInView(el,1.25)) displayScrollElement(el);
    else hideScrollElement(el);
  });
};
window.addEventListener('scroll', handleScrollAnimation);

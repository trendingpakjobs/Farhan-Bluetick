// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger?.addEventListener('click', ()=>{ navLinks.classList.toggle('show'); });

// Stats auto-count
const stats = document.querySelectorAll('.stat p');
const speed = 200;
stats.forEach(stat=>{
  const updateCount = () => {
    const target = +stat.parentElement.dataset.target;
    const count = +stat.innerText.replace(/\D/g,'');
    const increment = Math.ceil(target/speed);
    if(count<target){
      stat.innerText = count + increment >= target ? target : count + increment;
      setTimeout(updateCount,30);
    } else { stat.innerText = target.toLocaleString(); }
  }
  updateCount();
});

// Scroll animations
const cards = document.querySelectorAll('.show-on-scroll');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){ entry.target.classList.add('show'); }
  });
},{threshold:0.2});
cards.forEach(card=>observer.observe(card));

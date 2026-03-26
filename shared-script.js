// Hamburger toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Stats counter
const stats = document.querySelectorAll(".stat p");
stats.forEach(stat => {
  const updateCount = () => {
    const target = +stat.parentElement.dataset.target;
    const count = +stat.innerText;
    const increment = target / 200; // speed

    if(count < target) {
      stat.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      stat.innerText = target.toLocaleString();
    }
  };
  updateCount();
});

// Scroll animations for cards
const cards = document.querySelectorAll(".card");
const showOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom) {
      card.classList.add("active");
    }
  });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

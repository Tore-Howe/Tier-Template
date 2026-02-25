function openMenu(){
    document.body.classList.add("menu--open");
}

function closeMenu(){
    document.body.classList.remove("menu--open");
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});



const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("reveal--active");
    }
  });
}, {
  threshold: 0.18
});

reveals.forEach(el => observer.observe(el));
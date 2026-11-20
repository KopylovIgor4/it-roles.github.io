// Появление блоков при прокрутке
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(".reveal")
  .forEach((element) => observer.observe(element));

// Мобильное меню
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.textContent = nav.classList.contains("open") ? "×" : "☰";
    menuButton.setAttribute(
      "aria-expanded",
      nav.classList.contains("open") ? "true" : "false"
    );
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const btnNavEl = document.querySelector(".btn-mobile-nav");
const mainHeaderEl = document.querySelector(".main-header");
const allLinks = document.querySelectorAll("a:link");
const sectionHeroEl = document.querySelector(".hero");
const sectionTestimonialsEl = document.querySelector(".section-testimonials");

btnNavEl.addEventListener("click", () => {
  mainHeaderEl.classList.toggle("nav-opened");
});

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
      if (mainHeaderEl.getAttribute("class").includes("nav-opened")) {
        mainHeaderEl.classList.remove("nav-opened");
      }
    } else {
      window.location.href = `/${href}`;
    }
  });
});

// const obs = new IntersectionObserver(
//   (entries) => {
//     const entry = entries[0];
//     console.log(entry);
//     if (entry.isIntersecting) {
//       mainHeaderEl.style.background = "white";
//     } else {
//       mainHeaderEl.style.background = "#fdf2e9";
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "1px",
//   }
// );
// obs.observe(sectionHeroEl);
// obs.observe(sectionTestimonialsEl);

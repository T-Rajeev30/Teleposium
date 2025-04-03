var t1 = gsap.timeline({
  repeat: 0,
  yoyo: true,
  duration: 1.5,
  ease: "power2.inOut",
});

// Define animations
t1.to("#top", { top: "-50%" }, "a")
  .to("#bottom", { bottom: "-50%" }, "a")
  .to("#top-h1", { top: "60%" }, "a")
  .to("#bottom-h1", { bottom: "-30%" }, "a");

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    // Check if navbar exists to avoid errors
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElement = document.querySelector(this.getAttribute("href"));
    if (targetElement) {
      // Check if target element exists
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

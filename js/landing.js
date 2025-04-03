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

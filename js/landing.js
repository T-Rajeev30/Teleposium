var t1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});

// Define animations
t1.to("#top", { top: "-50%" }, "a")
  .to("#bottom", { bottom: "-50%" }, "a")
  .to("#top-h1", { top: "60%" }, "a")
  .to("#bottom-h1", { bottom: "-30%" }, "a");

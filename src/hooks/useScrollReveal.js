import { useEffect } from "react";

// Port of the original scroll-reveal script: fades in .reveal / .fade-reveal elements via animate.css.
export default function useScrollReveal(dep) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal, .fade-reveal")).filter(
      (el) => !el.classList.contains("animate__animated"),
    );
    if (!els.length) return;

    const fire = (el) => {
      el.style.animationDelay = el.style.getPropertyValue("--d") || "0s";
      el.style.opacity = "";
      el.classList.add(
        "animate__animated",
        el.classList.contains("fade-reveal") ? "animate__fadeIn" : "animate__fadeInUp",
      );
    };

    els.forEach((el) => {
      el.style.opacity = "0";
    });
    if (!("IntersectionObserver" in window)) {
      els.forEach(fire);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            fire(en.target);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [dep]);
}

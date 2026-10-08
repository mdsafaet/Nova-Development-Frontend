import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Soft spring: one gentle overshoot, then settles (damping ratio ~0.8).
export const bounce = { type: "spring", stiffness: 180, damping: 20, mass: 0.9 };

// Fade + rise when scrolled into view.
export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Endless gentle up/down drift. Only runs while on screen, so off-screen cards cost nothing.
export default function Float({ children, className = "", distance = 8, duration = 6, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "120px" });
  const reduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
      animate={reduce || !inView ? { y: 0 } : { y: [0, -distance, 0] }}
      transition={
        reduce || !inView
          ? { duration: 0.4 }
          : { duration, delay, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {children}
    </motion.div>
  );
}

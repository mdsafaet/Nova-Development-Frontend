import { motion, useReducedMotion } from "framer-motion";

// Springy, slightly under-damped = the "bounce" used on hover / tap.
export const bounce = { type: "spring", stiffness: 320, damping: 12, mass: 0.7 };

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

// Endless gentle up/down drift. Wrap a card in this, and put the hover bounce on the card itself.
export default function Float({ children, className = "", distance = 8, duration = 6, delay = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      animate={reduce ? undefined : { y: [0, -distance, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

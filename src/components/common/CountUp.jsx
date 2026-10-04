import { useEffect, useState } from "react";
export default function CountUp({ value, duration = 1000, suffix = "", ...props }) {
  const [current, setCurrent] = useState(value);
  useEffect(() => {
    if (duration <= 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setCurrent(value); return; }
    let frame;
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      setCurrent(Math.round(value * progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);
  return <span {...props}>{current.toLocaleString("en-US")}{suffix}</span>;
}

import { useEffect, useRef, useState } from "react";
import { img } from "@/assets/images";

// Give each pillar its own photo by replacing `image` (e.g. img.environment).
const pillars = [
  {
    icon: "fa-people-group",
    title: "Community Development",
    text: "Public spaces, local partnerships and programmes that strengthen the neighbourhoods we build in.",
    image: img.community,
    pos: "15% 50%",
  },
  {
    icon: "fa-leaf",
    title: "Environmental Stewardship",
    text: "Green design, responsible sourcing and lower-impact construction across every project.",
    image: img.community,
    pos: "50% 30%",
  },
  {
    icon: "fa-graduation-cap",
    title: "Education & Youth",
    text: "Scholarships, skills training and mentoring that open doors for the next generation.",
    image: img.community,
    pos: "80% 60%",
  },
  {
    icon: "fa-recycle",
    title: "Sustainable Development",
    text: "Long-term planning that balances growth with the resources future residents will need.",
    image: img.community,
    pos: "40% 80%",
  },
];

const stats = [
  { end: 12, suffix: "K+", label: "People reached" },
  { end: 38, suffix: "", label: "Community initiatives" },
  { end: 17, suffix: "", label: "Years of commitment" },
];

function useCountUp(end, duration = 2200) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }

    let raf;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
          setCount(Math.round(end * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [end, duration]);

  return [ref, count];
}

function Counter({ end, suffix = "" }) {
  const [ref, count] = useCountUp(end);
  return (
    <strong ref={ref}>
      {count}
      {suffix && <span className="csrz-suffix">{suffix}</span>}
    </strong>
  );
}

export default function Responsibility() {
  const [active, setActive] = useState(0);

  return (
    <section id="csr" className="csrz-section">
      <div className="container">
        {/* Heading */}
        <div className="csrz-head">
          <div>
            <div className="nova-section-label reveal">
              <span>CSR Activities</span>
            </div>
            <h2 className="nova-display-title reveal" style={{ "--d": ".1s" }}>
              Development with <span>responsibility.</span>
            </h2>
          </div>
          <p className="csrz-head-text reveal" style={{ "--d": ".2s" }}>
            Our responsibility extends beyond the boundaries of our developments. We invest in
            people, communities and the environments around us.
          </p>
        </div>

        {/* Expanding panels */}
        <div className="csrz-panels fade-reveal" style={{ "--d": ".25s" }}>
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className={`csrz-panel ${active === i ? "is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              tabIndex={0}
            >
              <img src={p.image} alt={p.title} style={{ objectPosition: p.pos }} />
              <div className="csrz-panel-shade" />
              <span className="csrz-panel-num">0{i + 1}</span>
              <span className="csrz-panel-vtitle">{p.title}</span>

              <div className="csrz-panel-body">
                <span className="csrz-panel-icon">
                  <i className={`fa-solid ${p.icon}`} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <a href="#" className="csrz-panel-link">
                  Learn more <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Stats strip */}
        <div className="csrz-strip fade-reveal" style={{ "--d": ".2s" }}>
          {stats.map((s) => (
            <div className="csrz-strip-item" key={s.label}>
              <Counter end={s.end} suffix={s.suffix} />
              <span>{s.label}</span>
            </div>
          ))}

          <a href="#" className="csrz-strip-cta">
            <span className="csrz-cta-text">
              <small>Annual report</small>
              <strong>Read the CSR report</strong>
            </span>
            <span className="csrz-cta-icon">
              <i className="fa-solid fa-arrow-right csrz-cta-a1" />
              <i className="fa-solid fa-arrow-right csrz-cta-a2" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
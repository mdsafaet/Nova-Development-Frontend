import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Tilt from "react-parallax-tilt";
import { img } from "@/assets/images";

const metrics = [
  { icon: "fa-chart-simple", tag: "01 — Portfolio", prefix: "$", end: 1.2, decimals: 1, suffix: "B", text: "Gross development value" },
  { icon: "fa-arrow-trend-up", tag: "02 — Returns", end: 18, suffix: "%", text: "Target net IRR — risk-adjusted" },
  { icon: "fa-handshake", tag: "03 — Partners", end: 120, suffix: "+", text: "Institutional & private partners" },
  { icon: "fa-shield-halved", tag: "04 — Governance", end: 100, suffix: "%", text: "Audited & board-governed" },
];

const trust = [
  { icon: "fa-building-columns", text: "Institutional & private capital" },
  { icon: "fa-shield-halved", text: "Governance first" },
  { icon: "fa-earth-asia", text: "4 markets" },
];

const why = ["Risk-adjusted structuring", "Design & engineering discipline", "Long-term stewardship"];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] },
});

function Metric({ m, index, active, onActivate }) {
  const [run, setRun] = useState(0); // bump = count again

  const activate = () => {
    onActivate(index);
    setRun((r) => r + 1);
  };

  return (
    <motion.button
      type="button"
      className={`iv-metric${active ? " is-active" : ""}`}
      onMouseEnter={activate}
      onFocus={() => onActivate(index)}
      onClick={activate}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      {...reveal(0.3 + index * 0.1)}
    >
      {active && (
        <motion.span
          layoutId="iv-active-bg"
          className="iv-metric-bg"
          transition={{ type: "spring", stiffness: 320, damping: 30 }}
        />
      )}
      <span className="iv-metric-top">
        <i className={`fa-solid ${m.icon}`} />
        <span className="iv-metric-tag">{m.tag}</span>
      </span>
      <span className="iv-metric-num">
        {m.prefix && <sup>{m.prefix}</sup>}
        <CountUp
          key={run}
          start={0}
          end={m.end}
          decimals={m.decimals || 0}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
        {m.suffix}
      </span>
      <span className="iv-metric-text">{m.text}</span>
    </motion.button>
  );
}

export default function Investors() {
  const [active, setActive] = useState(0);

  return (
    <section id="investors" className="iv-section">
      <span className="iv-glow iv-glow-a" />
      <span className="iv-glow iv-glow-b" />

      <div className="container position-relative">
        <div className="iv-grid">
          {/* ---------- visual ---------- */}
          <motion.div className="iv-visual" {...reveal(0.1)}>
            <Tilt
              className="iv-tilt"
              tiltMaxAngleX={7}
              tiltMaxAngleY={9}
              glareEnable
              glareMaxOpacity={0.18}
              glareBorderRadius="1.5rem"
              scale={1.02}
              transitionSpeed={1800}
            >
              <div className="iv-frame">
                <img src={img.investor} alt="Business handshake — investor partnership" loading="lazy" />
                <div className="iv-frame-shade" />
                <div className="iv-badge">
                  <span className="iv-pulse" /> Deal-ready governance · Audited &amp; Transparent
                </div>
              </div>

              <div className="iv-float-wrap">
                <motion.div
                  className="iv-float"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <small className="iv-eyebrow">Proven exits</small>
                  <div className="iv-float-num">
                    <CountUp start={0} end={32} duration={2.2} enableScrollSpy scrollSpyOnce />
                    <span>+</span> <em>Exits</em>
                  </div>
                  <p>Successful, on-time exits across market cycles — phased capital discipline.</p>
                  <div className="iv-float-stats">
                    <span><strong>Escrow</strong> Protected</span>
                    <span><strong>On-Time</strong> Delivery</span>
                  </div>
                </motion.div>
              </div>
            </Tilt>

            <motion.ul className="iv-trust" {...reveal(0.4)}>
              {trust.map((t) => (
                <li key={t.text}>
                  <i className={`fa-solid ${t.icon}`} /> {t.text}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* ---------- copy ---------- */}
          <div className="iv-copy">
            <motion.div className="iv-label" {...reveal(0)}>
              <span className="iv-label-line" />
              <span>Investors</span>
            </motion.div>

            <motion.h2 className="iv-title" {...reveal(0.1)}>
              Capital with a <span>long-term view.</span>
            </motion.h2>

            <motion.p className="iv-lead" {...reveal(0.2)}>
              Nova combines disciplined capital allocation, market intelligence and development expertise to
              create resilient long-term value — built for investors who measure returns in decades, not
              quarters.
            </motion.p>

            <div className="iv-metrics">
              {metrics.map((m, i) => (
                <Metric key={m.tag} m={m} index={i} active={active === i} onActivate={setActive} />
              ))}
            </div>

            <motion.ul className="iv-why" {...reveal(0.7)}>
              {why.map((w) => (
                <li key={w}>
                  <i className="fa-solid fa-check" /> {w}
                </li>
              ))}
            </motion.ul>

            <motion.div className="iv-actions" {...reveal(0.8)}>
              <Link to="/investors" className="btn btn-gold text-uppercase">
                Investor information <span>↗</span>
              </Link>
              <a href="#" className="iv-secondary">
                Download investment deck <span>↗</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { LuChevronRight } from "react-icons/lu";
import { img } from "@/assets/images";
import Float, { bounce } from "@/components/company-profile/Float";

const stats = [
  { end: 12, suffix: "K+", label: "People", note: "Reached" },
  { end: 38, label: "Initiatives", note: "Community-led" },
  { end: 17, label: "Years", note: "Of commitment" },
  { end: 4, pad: true, label: "Markets", note: "One standard" },
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const format = (n, pad) => (pad ? String(Math.round(n)).padStart(2, "0") : String(Math.round(n)));

export default function Hero() {
  return (
    <section className="csx csx-hero" style={{ backgroundImage: `url('${img.community}')` }}>
      <div className="csx-hero-overlay" />
      <div className="csx-gridlines" />

      <div className="csx-wrap csx-hero-inner">
        <motion.nav aria-label="Breadcrumb" {...rise(0)}>
          <ol className="csx-crumbs">
            <li><Link to="/">Home</Link><LuChevronRight aria-hidden="true" /></li>
            <li aria-current="page">CSR</li>
          </ol>
        </motion.nav>

        <div className="csx-hero-layout">
          <div>
            <motion.h1 {...rise(0.15)}>
              Development with
              <span>responsibility.</span>
            </motion.h1>

            <motion.p className="csx-hero-lead" {...rise(0.3)}>
              Beyond boundaries — we invest in people, communities and the environments around us. 17 years of
              commitment.
            </motion.p>
          </div>

          <ul className="csx-stats">
            {stats.map((s, i) => (
              <motion.li key={s.label} {...rise(0.45 + i * 0.1)}>
                <Float className="csx-float" distance={8} duration={5 + i * 0.5} delay={i * 0.5}>
                  <motion.div className="csx-glass csx-stat" whileHover={{ y: -10 }} transition={bounce}>
                    <strong>
                      <CountUp
                        start={0}
                        end={s.end}
                        duration={2.4}
                        enableScrollSpy
                        scrollSpyOnce
                        formattingFn={(n) => format(n, s.pad)}
                      />
                      {s.suffix && <sup>{s.suffix}</sup>}
                    </strong>
                    <span>{s.label}</span>
                    <em>{s.note}</em>
                  </motion.div>
                </Float>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

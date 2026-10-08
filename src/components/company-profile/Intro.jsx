import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuArrowUpRight, LuMapPin } from "react-icons/lu";
import { img } from "@/assets/images";
import Float, { bounce, Reveal } from "./Float";

const milestones = [
  { year: "2009", title: "Founded in Dhaka", text: "A small, dedicated core team sets out to make land development more disciplined." },
  { year: "2016", title: "Dubai platform", text: "Expansion into luxury residential and investment-led development." },
  { year: "2019", title: "North America", text: "Our integrated model extends to New York." },
  { year: "Today", title: "Four markets", text: "Dubai, Bangladesh, USA and UK — one consistent global standard." },
];

export default function Intro() {
  return (
    <section className="cpx cpx-story">
      <div className="cpx-wrap">
        <div className="cpx-story-grid">
          <Reveal>
            <div className="cpx-story-copy">
              <div className="cpx-head">
                <b>02</b>
                <i />
                <span>Our Story</span>
              </div>

              <p className="cpx-kicker">Established 2009</p>
              <h2 className="cpx-title">
                Discipline, transparency
                <span>&amp; future‑focused.</span>
              </h2>

              <p className="cpx-lead">
                Founded in Dhaka in 2009 with a simple ambition: make land development more disciplined.
              </p>
              <p className="cpx-text">
                A small yet dedicated core team laid the foundation for a platform that now operates across Dubai,
                Bangladesh, USA and UK.
              </p>
              <p className="cpx-text">
                In 2016 we established our Dubai platform, expanding into luxury residential and investment-led
                development. By 2019 we entered North America, extending our integrated model to New York.
              </p>

              <div className="cpx-actions">
                <Link to="/#brand-story" className="cpx-btn cpx-btn--primary">
                  View brand story <LuArrowUpRight />
                </Link>
                <Link to="/chairman" className="cpx-btn cpx-btn--outline">
                  Chairman message <LuArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="cpx-visual">
              <div className="cpx-visual-img">
                <img src={img.projectFeatured} alt="Nova Meadows master-planned estate" loading="lazy" decoding="async" />
              </div>

              <Float className="cpx-visual-badge" distance={9} duration={5}>
                <motion.div className="cpx-glass cpx-badge" whileHover={{ y: -6, rotate: -2 }} transition={bounce}>
                  <strong>17</strong>
                  <span>Years building</span>
                </motion.div>
              </Float>

              <Float className="cpx-visual-card" distance={7} duration={4.5} delay={0.6}>
                <motion.div className="cpx-glass-light cpx-project" whileHover={{ y: -8, scale: 1.02 }} transition={bounce}>
                  <div className="cpx-project-ico"><LuMapPin /></div>
                  <div>
                    <strong>Nova Meadows</strong>
                    <span>Dhaka · Bangladesh</span>
                  </div>
                  <em>Featured</em>
                </motion.div>
              </Float>
            </div>
          </Reveal>
        </div>

        <div className="cpx-timeline">
          {milestones.map((m, i) => (
            <Reveal key={m.year} delay={i * 0.08}>
              <motion.div className="cpx-mile" whileHover={{ y: -8 }} transition={bounce}>
                <div className="cpx-mile-year">{m.year}</div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

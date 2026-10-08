import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { LuChevronRight, LuArrowUpRight } from "react-icons/lu";
import { FiArrowDownRight } from "react-icons/fi";
import ReactCountryFlag from "react-country-flag";
import { img } from "@/assets/images";
import Float, { bounce } from "./Float";

const markets = [
  { code: "AE", city: "Dubai", country: "United Arab Emirates" },
  { code: "BD", city: "Dhaka", country: "Bangladesh" },
  { code: "US", city: "New York", country: "United States" },
  { code: "GB", city: "London", country: "United Kingdom" },
];

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="cpx cpx-hero" style={{ backgroundImage: `url('${img.newsletter}')` }}>
      <div className="cpx-hero-overlay" />
      <div className="cpx-gridlines" />

      <div className="cpx-wrap cpx-hero-inner">
        <motion.nav aria-label="Breadcrumb" {...rise(0)}>
          <ol className="cpx-crumbs">
            <li><Link to="/">Home</Link><LuChevronRight aria-hidden="true" /></li>
            <li>Company<LuChevronRight aria-hidden="true" /></li>
            <li aria-current="page">Company Profile</li>
          </ol>
        </motion.nav>

        <div className="cpx-hero-layout">
          <div>
            <motion.p className="cpx-kicker cpx-kicker--light" {...rise(0.1)}>Nova Development</motion.p>

            <motion.h1 {...rise(0.2)}>
              We develop places
              <span>that outlive us.</span>
            </motion.h1>

            <motion.p className="cpx-hero-lead" {...rise(0.35)}>
              Nova Development is a global land and real estate group creating master-planned communities,
              residences and commercial destinations across four markets.
            </motion.p>

            <motion.div className="cpx-actions" {...rise(0.45)}>
              <a href="#capabilities" className="cpx-btn cpx-btn--primary">
                Our capabilities <LuArrowUpRight />
              </a>
              <Link to="/portfolio" className="cpx-btn cpx-btn--ghost">
                View portfolio <LuArrowUpRight />
              </Link>
              <a href="#company-profile" className="cpx-scroll" aria-label="Scroll to company profile">
                <motion.span
                  animate={reduce ? undefined : { y: [0, 6, 0] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FiArrowDownRight />
                </motion.span>
              </a>
            </motion.div>
          </div>

          <div className="cpx-hero-side">
            <Float distance={10} duration={5.5}>
              <motion.div className="cpx-glass cpx-presence" whileHover={{ y: -8, scale: 1.02 }} transition={bounce}>
                <div className="cpx-presence-head">
                  <span className="cpx-ping" aria-hidden="true" />
                  Global presence
                </div>
                <ul className="cpx-markets">
                  {markets.map((m) => (
                    <li key={m.code}>
                      <span className="cpx-flag">
                        <ReactCountryFlag
                          svg
                          countryCode={m.code}
                          title={m.country}
                          aria-label={m.country}
                          style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </span>
                      <div>
                        <strong>{m.city}</strong>
                        <span>{m.country}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Float>

            <Float distance={7} duration={4.5} delay={0.8}>
              <motion.div className="cpx-glass cpx-since" whileHover={{ y: -6, scale: 1.03 }} transition={bounce}>
                <strong>2009</strong>
                <span>Established<br />Dhaka, Bangladesh</span>
              </motion.div>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
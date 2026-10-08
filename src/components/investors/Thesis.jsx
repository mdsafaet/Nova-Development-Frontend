import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuCheck,
  LuLandmark,
} from "react-icons/lu";

import { img } from "@/assets/images";
import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const checks = [
  "Risk-adjusted structuring — phased capital, escrow protection",
  "Engineering discipline — on time, on standard, every market",
  "Long-term stewardship — places that compound value for decades",
];

export default function Thesis() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="thesis"
      className="nvi-thesis"
    >
      <div className="container">
        <Reveal>
          <div className="nvi-section-head">
            <span>01</span>
            <i />
            <strong>
              Investment Thesis
            </strong>
          </div>
        </Reveal>

        <div className="nvi-thesis-grid">
          <div className="nvi-thesis-copy">
            <Reveal>
              <p className="nvi-kicker">
                Why investors choose Nova
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvi-title">
                De-risk growth.
                <span>
                  Deliver legacy.
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="nvi-lead">
                Land, capital, design and
                stewardship — integrated to
                create resilient, long-term
                value across market cycles.
              </p>
            </Reveal>

            <Reveal>
              <p className="nvi-body">
                Nova combines market
                intelligence, rigorous
                diligence and design
                excellence to structure
                investments that perform for
                owners and delight residents
                — from land assembly and
                entitlements to engineering,
                delivery and community
                management.
              </p>
            </Reveal>

            <div className="nvi-check-list">
              {checks.map(
                (item, index) => (
                  <Reveal key={item}>
                    <div className="nvi-check-item">
                      <span>
                        <LuCheck />
                      </span>

                      <p>{item}</p>

                      <small>
                        0{index + 1}
                      </small>
                    </div>
                  </Reveal>
                )
              )}
            </div>

            <Reveal>
              <div className="nvi-actions">
                <Link
                  to="/contact"
                  className="nvi-btn nvi-btn--primary"
                >
                  Investor enquiries
                  <LuArrowUpRight />
                </Link>

                <Link
                  to="/portfolio"
                  className="nvi-btn nvi-btn--outline"
                >
                  Explore portfolio
                  <LuArrowUpRight />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="nvi-thesis-visual">
            <Reveal>
              <div className="nvi-image-frame">
                <img
                  src={
                    img.projectCommercial
                  }
                  alt="Investor thesis — disciplined development"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Float delay={0.4}>
              <motion.aside
                className="nvi-image-float-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -10 }
                }
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                }}
              >
                <span className="nvi-floating-icon">
                  <LuLandmark />
                </span>

                <div>
                  <small>
                    Thesis · Discipline
                  </small>

                  <strong>
                    45+ projects · 3,200
                    acres · 17 years
                  </strong>
                </div>
              </motion.aside>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
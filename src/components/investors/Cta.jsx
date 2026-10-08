import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuDownload,
  LuLandmark,
  LuTrendingUp,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

export default function Cta() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="nvi-ir">
      <div className="container">
        <div className="nvi-ir-shell">
          <div className="nvi-ir-copy">
            <Reveal>
              <div className="nvi-ir-label">
                <span>Investor Relations</span>
                <i />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="nvi-ir-title">
                Partner with
                <span>long-term capital.</span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="nvi-ir-description">
                Request the investment deck or speak with our investor relations team.
              </p>
            </Reveal>

            <Reveal>
              <div className="nvi-ir-actions">
                <Link
                  to="/contact"
                  className="nvi-ir-btn nvi-ir-btn--primary"
                >
                  Speak to IR
                  <LuArrowUpRight />
                </Link>

                <a
                  href="#"
                  className="nvi-ir-btn nvi-ir-btn--ghost"
                  aria-label="Download investment deck"
                >
                  Download deck
                  <LuDownload />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="nvi-ir-visual">
            <Float delay={0.15}>
              <motion.article
                className="nvi-ir-card nvi-ir-card--main"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -10 }
                }
                transition={bounce}
              >
                <div className="nvi-ir-card-icon">
                  <LuLandmark />
                </div>

                <span className="nvi-ir-card-label">
                  Investor Relations
                </span>

                <strong>
                  Long-term
                  <br />
                  partnership
                </strong>

                <p>
                  Disciplined capital,
                  transparent governance and
                  long-term stewardship.
                </p>
              </motion.article>
            </Float>

            <Float
              delay={0.55}
              distance={6}
              duration={6.5}
            >
              <motion.div
                className="nvi-ir-mini-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -8 }
                }
                transition={bounce}
              >
                <span>
                  <LuTrendingUp />
                </span>

                <div>
                  <small>Capital focus</small>
                  <strong>
                    Long-term value
                  </strong>
                </div>

                <LuArrowUpRight />
              </motion.div>
            </Float>
          </div>

          <div className="nvi-ir-orbit nvi-ir-orbit--one" />
          <div className="nvi-ir-orbit nvi-ir-orbit--two" />
        </div>
      </div>
    </section>
  );
}
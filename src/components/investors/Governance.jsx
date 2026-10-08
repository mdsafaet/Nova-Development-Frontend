import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuFileCheck2,
  LuUsers,
  LuLandmark,
  LuChartNoAxesCombined,
  LuShieldCheck,
} from "react-icons/lu";

import { img } from "@/assets/images";
import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const governanceItems = [
  {
    icon: LuFileCheck2,
    title: "Audited",
    description:
      "Financials & delivery",
  },
  {
    icon: LuUsers,
    title: "Board",
    description:
      "Independent oversight",
  },
  {
    icon: LuLandmark,
    title: "Escrow",
    description:
      "Protected capital",
  },
  {
    icon: LuChartNoAxesCombined,
    title: "Reporting",
    description:
      "Quarterly, transparent",
  },
];

export default function Governance() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="governance"
      className="nvi-governance"
    >
      <div className="container">
        <Reveal>
          <div className="nvi-section-head">
            <span>03</span>
            <i />
            <strong>
              Governance
            </strong>
          </div>
        </Reveal>

        <div className="nvi-governance-grid">
          <div className="nvi-governance-visual">
            <Reveal>
              <div className="nvi-governance-image">
                <img
                  src={
                    img.projectFeatured
                  }
                  alt="Governance — transparency"
                  loading="lazy"
                />

                <div className="nvi-governance-image-overlay" />
              </div>
            </Reveal>

            <Float delay={0.3}>
              <motion.div
                className="nvi-governance-badge"
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
                <LuShieldCheck />

                <div>
                  <span>
                    Governance · Trust
                  </span>

                  <strong>
                    Audited &amp;
                    board-governed
                  </strong>
                </div>
              </motion.div>
            </Float>
          </div>

          <div className="nvi-governance-copy">
            <Reveal>
              <p className="nvi-kicker">
                How we protect capital
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvi-title">
                Transparency is
                <span>
                  our structure.
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="nvi-lead">
                Deal-ready governance from
                day one — transparent
                reporting, board oversight
                and protected capital flows.
              </p>
            </Reveal>

            <div className="nvi-governance-cards">
              {governanceItems.map(
                (
                  {
                    icon: Icon,
                    title,
                    description,
                  },
                  index
                ) => (
                  <Float
                    key={title}
                    delay={
                      index * 0.35
                    }
                  >
                    <motion.article
                      className="nvi-governance-card"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -8 }
                      }
                      transition={{
                        type:
                          "spring",
                        stiffness: 180,
                        damping: 20,
                      }}
                    >
                      <Icon />

                      <strong>
                        {title}
                      </strong>

                      <span>
                        {description}
                      </span>
                    </motion.article>
                  </Float>
                )
              )}
            </div>

            <Reveal>
              <p className="nvi-governance-foot">
                Every project is
                ring-fenced,
                escrow-managed and
                reported with the same
                standard across UAE,
                Bangladesh, USA and UK —
                so partners see the same
                discipline, every market.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
import CountUp from "react-countup";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuChartNoAxesCombined,
  LuTrendingUp,
  LuHandshake,
  LuShieldCheck,
  LuLandmark,
  LuClock3,
  LuEarth,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const metrics = [
  {
    number: "01",
    category: "Portfolio",
    icon: LuChartNoAxesCombined,
    prefix: "$",
    value: 1.2,
    decimals: 1,
    suffix: "B",
    description:
      "Gross development value across land, residential and commercial",
  },
  {
    number: "02",
    category: "Returns",
    icon: LuTrendingUp,
    value: 18,
    suffix: "%",
    description:
      "Target net IRR — risk-adjusted, phased exits",
  },
  {
    number: "03",
    category: "Partners",
    icon: LuHandshake,
    value: 120,
    suffix: "+",
    description:
      "Institutional, private and family offices across 4 markets",
  },
  {
    number: "04",
    category: "Governance",
    icon: LuShieldCheck,
    value: 100,
    suffix: "%",
    description:
      "Audited, board-governed, escrow-protected delivery",
  },
];

export default function Metrics() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="metrics"
      className="nvi-metrics"
    >
      <div className="container">
        <Reveal>
          <div className="nvi-section-head nvi-section-head--dark">
            <span>02</span>
            <i />
            <strong>
              Performance
            </strong>
          </div>
        </Reveal>

        <div className="nvi-metrics-heading">
          <div>
            <Reveal>
              <p className="nvi-kicker nvi-kicker--light">
                Investor metrics
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvi-title nvi-title--dark">
                Built for
                <span>
                  resilient returns.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <p className="nvi-metrics-intro">
              Investor-focused metrics —
              distinct from operating
              profile, audited and
              transparent.
            </p>
          </Reveal>
        </div>

        <div className="nvi-metric-grid">
          {metrics.map(
            (
              {
                number,
                category,
                icon: Icon,
                prefix,
                value,
                decimals,
                suffix,
                description,
              },
              index
            ) => (
              <Float
                key={category}
                delay={index * 0.4}
              >
                <motion.article
                  className="nvi-metric-card"
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
                  <div className="nvi-metric-top">
                    <span>
                      <Icon />
                    </span>

                    <small>
                      {number} —{" "}
                      {category}
                    </small>
                  </div>

                  <strong className="nvi-metric-value">
                    {prefix}

                    <CountUp
                      end={value}
                      decimals={
                        decimals || 0
                      }
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />

                    {suffix}
                  </strong>

                  <p>
                    {description}
                  </p>

                  <div className="nvi-metric-line" />
                </motion.article>
              </Float>
            )
          )}
        </div>

        <Reveal>
          <div className="nvi-proof-bar">
            <div>
              <LuLandmark />
              <span>
                Escrow protected
              </span>
            </div>

            <div>
              <LuClock3 />
              <span>
                32+ on-time exits
              </span>
            </div>

            <div>
              <LuEarth />
              <span>
                Dubai · Dhaka · New York
                · London
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
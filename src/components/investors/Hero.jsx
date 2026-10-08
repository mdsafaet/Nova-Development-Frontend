import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";

import {
  LuArrowDown,
  LuChartNoAxesCombined,
  LuHandshake,
  LuShieldCheck,
  LuLandmark,
} from "react-icons/lu";

import { img } from "@/assets/images";
import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const stats = [
  {
    icon: LuLandmark,
    prefix: "$",
    value: 1.2,
    decimals: 1,
    suffix: "B",
    label: "GDV",
    description: "Gross development value",
  },
  {
    icon: LuChartNoAxesCombined,
    value: 18,
    suffix: "%",
    label: "IRR Target",
    description: "Risk-adjusted, net",
  },
  {
    icon: LuHandshake,
    value: 120,
    suffix: "+",
    label: "Partners",
    description: "Institutional & private",
  },
  {
    icon: LuShieldCheck,
    value: 100,
    suffix: "%",
    label: "Audited",
    description: "Board-governed",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToThesis = () => {
    document
      .getElementById("thesis")
      ?.scrollIntoView({
        behavior: reduceMotion
          ? "auto"
          : "smooth",
      });
  };

  return (
    <section
      className="nvi-hero"
      style={{
        backgroundImage: `url('${img.investor}')`,
      }}
    >
      <div className="nvi-hero-overlay" />

      <div className="container nvi-hero-container">
        <Reveal>
          <nav
            className="nvi-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">Home</Link>

            <span aria-hidden="true">
              /
            </span>

            <strong>Investors</strong>
          </nav>
        </Reveal>

        <div className="nvi-hero-layout">
          <div className="nvi-hero-copy">
            <Reveal>
              <div className="nvi-section-head nvi-section-head--dark">
                <span>00</span>
                <i />
                <strong>
                  Investor Platform
                </strong>
              </div>
            </Reveal>

            <Reveal>
              <p className="nvi-kicker nvi-kicker--light">
                Long-term capital
              </p>
            </Reveal>

            <Reveal>
              <h1 className="nvi-hero-title">
                Capital with a
                <span>
                  long-term view.
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="nvi-hero-lead">
                Disciplined allocation,
                audited governance and
                long-term stewardship —
                built for investors who
                measure returns in decades,
                not quarters.
              </p>
            </Reveal>

            <motion.button
              type="button"
              className="nvi-scroll-button"
              onClick={scrollToThesis}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8 }
              }
              whileTap={{
                y: 1,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              aria-label="Scroll to investment thesis"
            >
              <LuArrowDown />
            </motion.button>
          </div>

          <div className="nvi-hero-stats">
            {stats.map(
              (
                {
                  icon: Icon,
                  prefix,
                  value,
                  decimals,
                  suffix,
                  label,
                  description,
                },
                index
              ) => (
                <Float
                  key={label}
                  delay={index * 0.35}
                >
                  <motion.article
                    className="nvi-hero-stat"
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
                    <div className="nvi-hero-stat-top">
                      <Icon />

                      <span>
                        0{index + 1}
                      </span>
                    </div>

                    <strong>
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

                    <h2>{label}</h2>

                    <p>
                      {description}
                    </p>
                  </motion.article>
                </Float>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
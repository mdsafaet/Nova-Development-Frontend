import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "react-countup";

import {
  LuArrowDown,
  LuBuilding2,
  LuEarth,
  LuLandPlot,
  LuShieldCheck,
  LuTimer,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const stats = [
  {
    icon: LuBuilding2,
    value: 45,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: LuLandPlot,
    value: 3200,
    label: "Acres",
  },
  {
    icon: LuEarth,
    value: 4,
    prefix: "0",
    label: "Markets",
  },
  {
    icon: LuTimer,
    value: 17,
    label: "Years",
  },
];

export default function PortfolioHero() {
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    document
      .getElementById("portfolio-projects")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });
  };

  return (
    <section
      className="nvp-hero"
      style={{
        backgroundImage: `url('${img.projectFeatured}')`,
      }}
    >
      <div className="nvp-hero-overlay" />

      <div className="container nvp-hero-container">
        <Reveal>
          <nav
            className="nvp-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">Home</Link>

            <span>/</span>

            <strong>Portfolio</strong>
          </nav>
        </Reveal>

        <div className="nvp-hero-grid">
          <div className="nvp-hero-copy">
            <Reveal>
              <div className="nvp-section-head nvp-section-head--dark">
                <span>00</span>

                <i />

                <strong>
                  Development Portfolio
                </strong>
              </div>
            </Reveal>

            <Reveal>
              <p className="nvp-kicker nvp-kicker--light">
                Global portfolio
              </p>
            </Reveal>

            <Reveal>
              <h1>
                Portfolio built
                <span>for legacy.</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="nvp-hero-lead">
                45+ projects · 3,200 acres · 4 markets —
                one standard of design, engineering,
                governance and stewardship. Filter by
                typology to explore more developments.
              </p>
            </Reveal>

            <Reveal>
              <div className="nvp-hero-badges">
                <span>
                  <LuShieldCheck />
                  Audited &amp; board-governed
                </span>

                <span>
                  <LuEarth />
                  Dubai · Dhaka · New York · London
                </span>
              </div>
            </Reveal>

            <motion.button
              type="button"
              className="nvp-scroll"
              onClick={scrollToProjects}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8 }
              }
              whileTap={{ y: 1 }}
              transition={bounce}
              aria-label="Scroll to portfolio projects"
            >
              <LuArrowDown />
            </motion.button>
          </div>

          <div className="nvp-hero-stats">
            {stats.map(
              (
                {
                  icon: Icon,
                  value,
                  prefix,
                  suffix,
                  label,
                },
                index
              ) => (
                <Float
                  key={label}
                  delay={index * 0.35}
                  duration={6 + index * 0.2}
                >
                  <motion.article
                    className="nvp-hero-stat"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -10 }
                    }
                    transition={bounce}
                  >
                    <div className="nvp-hero-stat-top">
                      <Icon />

                      <span>
                        0{index + 1}
                      </span>
                    </div>

                    <strong>
                      {prefix}

                      <CountUp
                        end={value}
                        separator=","
                        duration={2}
                        enableScrollSpy
                        scrollSpyOnce
                      />

                      {suffix}
                    </strong>

                    <p>{label}</p>
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
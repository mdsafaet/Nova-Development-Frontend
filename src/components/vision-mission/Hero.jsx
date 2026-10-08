import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import {
  LuArrowDown,
  LuEye,
  LuTarget,
  LuGem,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const heroCards = [
  {
    number: "01",
    title: "Vision",
    description: "What we believe",
    icon: LuEye,
  },
  {
    number: "02",
    title: "Mission",
    description: "How we deliver",
    icon: LuTarget,
  },
  {
    number: "04",
    title: "Values",
    description: "What guides us",
    icon: LuGem,
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToVision = () => {
    document
      .getElementById("vision")
      ?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
      });
  };

  return (
    <section
      className="nvv-hero"
      style={{
        backgroundImage: `url('${img.missionBg}')`,
      }}
    >
      <div className="nvv-hero-overlay" />

      <div className="container nvv-hero-container">
        <Reveal>
          <nav
            className="nvv-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Company</span>
            <span>/</span>

            <strong>
              Corporate Vision &amp; Mission
            </strong>
          </nav>
        </Reveal>

        <div className="nvv-hero-grid">
          <div className="nvv-hero-copy">
            <Reveal>
              <div className="nvv-section-head nvv-section-head--dark">
                <span>00</span>
                <i />
                <strong>
                  Corporate Direction
                </strong>
              </div>
            </Reveal>

            <Reveal>
              <p className="nvv-kicker nvv-kicker--light">
                Purpose &amp; direction
              </p>
            </Reveal>

            <Reveal>
              <h1>
                Corporate Vision
                <span>&amp; Mission</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="nvv-hero-lead">
                To become a trusted global development
                platform known for places of lasting
                value — commercially sound,
                thoughtfully designed and meaningful
                to the people who inherit them.
              </p>
            </Reveal>

            <motion.button
              type="button"
              className="nvv-scroll"
              onClick={scrollToVision}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8 }
              }
              whileTap={{ y: 1 }}
              transition={bounce}
              aria-label="Scroll to vision"
            >
              <LuArrowDown />
            </motion.button>
          </div>

          <div className="nvv-hero-cards">
            {heroCards.map(
              (
                {
                  number,
                  title,
                  description,
                  icon: Icon,
                },
                index
              ) => (
                <Float
                  key={title}
                  delay={index * 0.4}
                >
                  <motion.article
                    className="nvv-hero-card"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -10 }
                    }
                    transition={bounce}
                  >
                    <div className="nvv-hero-card-top">
                      <Icon />
                      <span>{number}</span>
                    </div>

                    <strong>{title}</strong>

                    <p>{description}</p>
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
import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowDownRight,
  LuBuilding2,
  LuGlobe,
  LuLandmark,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const heroHighlights = [
  {
    icon: LuBuilding2,
    title: "Master-planned communities",
  },
  {
    icon: LuLandmark,
    title: "Residences & commercial destinations",
  },
  {
    icon: LuGlobe,
    title: "Global real estate group",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="nvm-hero">
      <div className="nvm-hero-orb nvm-hero-orb--one" />
      <div className="nvm-hero-orb nvm-hero-orb--two" />

      <div className="nvm-shell">
        <Reveal>
          <nav
            className="nvm-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <span>
              Company
            </span>

            <span aria-hidden="true">
              /
            </span>

            <span>
              Profile
            </span>
          </nav>
        </Reveal>

        <div className="nvm-hero-grid">
          <div className="nvm-hero-copy">
            <Reveal delay={0.05}>
              <div className="nvm-section-head nvm-section-head--dark">
                <span>
                  01
                </span>

                <i />

                <strong>
                  Managing Director
                </strong>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="nvm-kicker nvm-kicker--dark">
                Leadership &amp; stewardship
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <h1>
                We develop places
                <span>
                  that outlive us.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="nvm-hero-intro">
                Nova Development is a global land
                &amp; real estate group creating
                master-planned communities,
                residences, and commercial
                destinations — governed by an
                uncompromised standard of design,
                engineering, and stewardship.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <a
                href="#managing-director-message"
                className="nvm-scroll-link"
              >
                Read the message

                <LuArrowDownRight />
              </a>
            </Reveal>
          </div>

          <div className="nvm-hero-highlights">
            {heroHighlights.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <Float
                    key={item.title}
                    distance={7}
                    duration={
                      5.8 + index * 0.45
                    }
                    delay={
                      index * 0.25
                    }
                  >
                    <motion.div
                      className="nvm-hero-card"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -9,
                            }
                      }
                      transition={bounce}
                    >
                      <span className="nvm-hero-card-icon">
                        <Icon />
                      </span>

                      <span>
                        {item.title}
                      </span>
                    </motion.div>
                  </Float>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
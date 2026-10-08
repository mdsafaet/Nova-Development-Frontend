import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";


const stats = [
  {
    value: "06",
    label: "Stories",
    note: "2026",
  },
  {
    value: "04",
    label: "Markets",
    note: "Covered",
  },
  {
    value: "24h",
    label: "Press",
    note: "Response",
  },
];


export default function NewsroomHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="nvn-hero"
      style={{
        "--nvn-hero-image": `url('${img.contactHero}')`,
      }}
    >
      <div className="nvn-hero-overlay" />

      <div className="nvn-shell nvn-hero-inner">
        <Reveal>
          <nav
            className="nvn-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">
              Home
            </Link>

            <span aria-hidden="true">
              /
            </span>

            <span>
              Newsroom
            </span>
          </nav>
        </Reveal>


        <Reveal delay={0.08}>
          <div className="nvn-section-label nvn-section-label--dark">
            <span>
              01
            </span>

            <i />

            <strong>
              Newsroom
            </strong>
          </div>
        </Reveal>


        <div className="nvn-hero-copy">
          <Reveal delay={0.12}>
            <h1>
              The latest
              <span>
                from Nova.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p>
              Press releases, project milestones
              and market insights — one place,
              four markets.
            </p>
          </Reveal>
        </div>


        <div className="nvn-stat-grid">
          {stats.map((stat, index) => (
            <Float
              key={stat.label}
              distance={7}
              duration={6 + index * 0.35}
              delay={index * 0.25}
            >
              <motion.div
                className="nvn-stat-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -9 }
                }
                transition={bounce}
              >
                <strong>
                  {stat.value}
                </strong>

                <span>
                  {stat.label}
                </span>

                <small>
                  {stat.note}
                </small>
              </motion.div>
            </Float>
          ))}
        </div>
      </div>
    </section>
  );
}
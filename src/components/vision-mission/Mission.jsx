import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuSearch,
  LuPenTool,
  LuHardHat,
  LuLeaf,
  LuTarget,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const missionItems = [
  {
    icon: LuSearch,
    title: "Acquire",
    description:
      "Diligence & master planning",
  },
  {
    icon: LuPenTool,
    title: "Design",
    description:
      "Architecture & engineering",
  },
  {
    icon: LuHardHat,
    title: "Deliver",
    description:
      "Build & govern",
  },
  {
    icon: LuLeaf,
    title: "Steward",
    description:
      "Operate & care",
  },
];

export default function Mission() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="mission"
      className="nvv-mission"
    >
      <div className="container">
        <Reveal>
          <div className="nvv-section-head">
            <span>03</span>
            <i />
            <strong>Mission</strong>
          </div>
        </Reveal>

        <div className="nvv-mission-grid">
          <div className="nvv-mission-visual">
            <Reveal>
              <div className="nvv-mission-image">
                <img
                  src={img.investor}
                  alt="Mission — discipline to delivery, governance and execution"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Float delay={0.35}>
              <motion.aside
                className="nvv-image-card"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -10 }
                }
                transition={bounce}
              >
                <span className="nvv-image-card-icon">
                  <LuTarget />
                </span>

                <div>
                  <small>
                    Mission · Delivery
                  </small>

                  <strong>
                    Discipline from land to
                    stewardship
                  </strong>
                </div>
              </motion.aside>
            </Float>
          </div>

          <div className="nvv-mission-copy">
            <Reveal>
              <p className="nvv-kicker">
                How we deliver
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvv-title">
                Turn opportunity
                <span>
                  into enduring value.
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="nvv-lead">
                We acquire intelligently, design
                responsibly and deliver with
                discipline — bringing together
                land, capital, people and expertise.
              </p>
            </Reveal>

            <Reveal>
              <p className="nvv-body">
                Operationalized through rigorous
                diligence, transparent governance
                and engineering excellence: from
                land assembly and entitlements to
                construction and long-term
                stewardship. We de-risk growth for
                investors while delivering places
                that perform for owners and delight
                residents.
              </p>
            </Reveal>

            <div className="nvv-mission-cards">
              {missionItems.map(
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
                    delay={index * 0.35}
                  >
                    <motion.article
                      className="nvv-mission-card"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : { y: -8 }
                      }
                      transition={bounce}
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
          </div>
        </div>
      </div>
    </section>
  );
}
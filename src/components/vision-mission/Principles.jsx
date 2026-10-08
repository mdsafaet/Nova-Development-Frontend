import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuSearch,
  LuPenTool,
  LuHardHat,
  LuLandmark,
  LuArrowUpRight,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const principles = [
  {
    number: "01",
    icon: LuSearch,
    title: "Land & Master Planning",
    description:
      "Intelligent acquisition, diligence and entitlements — building resilient neighborhoods.",
  },
  {
    number: "02",
    icon: LuPenTool,
    title: "Design & Engineering",
    description:
      "Architecture and engineering discipline — on time, on standard, every market.",
  },
  {
    number: "03",
    icon: LuHardHat,
    title: "Delivery & Governance",
    description:
      "Construction stewardship with transparent, board-governed delivery.",
  },
  {
    number: "04",
    icon: LuLandmark,
    title: "Capital & Stewardship",
    description:
      "Phased capital, escrow protection and long-term community management.",
  },
];

export default function Principles() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="principles"
      className="nvv-principles"
    >
      <div className="container">
        <Reveal>
          <div className="nvv-section-head">
            <span>05</span>
            <i />
            <strong>
              How We Execute
            </strong>
          </div>
        </Reveal>

        <div className="nvv-principles-heading">
          <Reveal>
            <p className="nvv-kicker">
              End-to-end discipline
            </p>
          </Reveal>

          <Reveal>
            <h2 className="nvv-title">
              Four disciplines —
              <span>
                end to end.
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="nvv-principles-grid">
          {principles.map(
            (
              {
                number,
                icon: Icon,
                title,
                description,
              },
              index
            ) => (
              <Float
                key={title}
                delay={index * 0.38}
              >
                <motion.article
                  className="nvv-principle-card"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -10 }
                  }
                  transition={bounce}
                >
                  <div className="nvv-principle-top">
                    <span className="nvv-principle-icon">
                      <Icon />
                    </span>

                    <small>
                      {number}
                    </small>
                  </div>

                  <h3>{title}</h3>

                  <p>
                    {description}
                  </p>

                  <span
                    className="nvv-principle-arrow"
                    aria-hidden="true"
                  >
                    <LuArrowUpRight />
                  </span>
                </motion.article>
              </Float>
            )
          )}
        </div>
      </div>
    </section>
  );
}
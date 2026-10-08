import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuShieldCheck,
  LuAward,
  LuLeaf,
  LuHandshake,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const values = [
  {
    number: "01",
    icon: LuShieldCheck,
    title: "Integrity",
    description:
      "Do the right thing at every stage — transparent governance, audited delivery, accountable partnerships.",
  },
  {
    number: "02",
    icon: LuAward,
    title: "Excellence",
    description:
      "Set a higher standard for design, engineering and delivery in every market — one Nova standard.",
  },
  {
    number: "03",
    icon: LuLeaf,
    title: "Stewardship",
    description:
      "Think beyond today’s development — resilient, sustainable, community-first places that age well.",
  },
  {
    number: "04",
    icon: LuHandshake,
    title: "Partnership",
    description:
      "Build lasting relationships with investors, partners and communities — returns measured in decades.",
  },
];

export default function Values() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="values"
      className="nvv-values"
    >
      <div className="container">
        <Reveal>
          <div className="nvv-section-head nvv-section-head--dark">
            <span>04</span>
            <i />
            <strong>Core Values</strong>
          </div>
        </Reveal>

        <div className="nvv-values-heading">
          <div>
            <Reveal>
              <p className="nvv-kicker nvv-kicker--light">
                What guides us
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvv-title nvv-title--dark">
                Guided by
                <span>
                  what endures.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <p>
              Four principles inherited from the
              Chairman’s office — filter every
              decision, every acre, every
              partnership.
            </p>
          </Reveal>
        </div>

        <div className="nvv-values-grid">
          {values.map(
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
                delay={index * 0.4}
              >
                <motion.article
                  className="nvv-value-card"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -10 }
                  }
                  transition={bounce}
                >
                  <div className="nvv-value-top">
                    <Icon />
                    <span>
                      {number}
                    </span>
                  </div>

                  <strong>
                    {title}
                  </strong>

                  <p>
                    {description}
                  </p>

                  <div className="nvv-value-line" />
                </motion.article>
              </Float>
            )
          )}
        </div>
      </div>
    </section>
  );
}
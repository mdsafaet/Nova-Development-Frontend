import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuCheck,
  LuEye,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const points = [
  "Legacy over short-term — places that appreciate in every sense",
  "Design-led, community-first — people at the centre of every plan",
  "One standard across Dubai · Dhaka · New York · London",
];

export default function Vision() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="vision"
      className="nvv-vision"
    >
      <div className="container">
        <Reveal>
          <div className="nvv-section-head nvv-section-head--dark">
            <span>02</span>
            <i />
            <strong>Vision</strong>
          </div>
        </Reveal>

        <div className="nvv-vision-grid">
          <div className="nvv-vision-copy">
            <Reveal>
              <p className="nvv-kicker nvv-kicker--light">
                What we believe
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvv-title nvv-title--dark">
                Build the places
                <span>
                  people believe in.
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="nvv-lead nvv-lead--dark">
                We envision a future where
                development is measured not only by
                financial performance, but by the
                lasting value it creates.
              </p>
            </Reveal>

            <Reveal>
              <p className="nvv-body nvv-body--dark">
                Resilient neighborhoods. Sustainable
                infrastructure. Places that foster
                belonging. Investments that compound
                in social, environmental and economic
                value over decades — not short-term
                gains.
              </p>
            </Reveal>

            <div className="nvv-checks nvv-checks--dark">
              {points.map((point, index) => (
                <Reveal key={point}>
                  <div className="nvv-check">
                    <span>
                      <LuCheck />
                    </span>

                    <p>{point}</p>

                    <small>
                      0{index + 1}
                    </small>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="nvv-vision-visual">
            <Reveal>
              <div className="nvv-vision-image">
                <img
                  src={img.community}
                  alt="Vision — places of lasting value, community-first neighborhoods"
                  loading="lazy"
                />

                <div className="nvv-image-shade" />
              </div>
            </Reveal>

            <Float delay={0.35}>
              <motion.aside
                className="nvv-image-card nvv-image-card--dark"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -10 }
                }
                transition={bounce}
              >
                <span className="nvv-image-card-icon">
                  <LuEye />
                </span>

                <div>
                  <small>
                    Vision · Legacy
                  </small>

                  <strong>
                    45+ projects · 3,200 acres · 4 markets
                  </strong>
                </div>
              </motion.aside>
            </Float>
          </div>
        </div>
      </div>
    </section>
  );
}
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuBuilding2,
  LuGlobe,
  LuShieldCheck,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const leadershipValues = [
  {
    icon: LuBuilding2,
    label: "Design-led development",
  },
  {
    icon: LuShieldCheck,
    label: "Long-term stewardship",
  },
  {
    icon: LuGlobe,
    label: "One global standard",
  },
];

export default function Top() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="nvm-office">
      <div className="nvm-shell">
        <Reveal>
          <div className="nvm-section-head">
            <span>
              02
            </span>

            <i />

            <strong>
              Leadership
            </strong>
          </div>
        </Reveal>

        <div className="nvm-office-grid">
          <div className="nvm-office-heading">
            <Reveal>
              <p className="nvm-kicker">
                Managing Director&apos;s Office
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2>
                Leadership with
                <span>
                  a long view.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15}>
              <p>
                Managing Director&apos;s Office —
                Nova Development
              </p>
            </Reveal>
          </div>

          <div className="nvm-leadership-stack">
            {leadershipValues.map(
              (item, index) => {
                const Icon = item.icon;

                return (
                  <Float
                    key={item.label}
                    distance={6}
                    duration={
                      6 + index * 0.35
                    }
                    delay={
                      index * 0.22
                    }
                  >
                    <motion.article
                      className="nvm-leadership-card"
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -8,
                            }
                      }
                      transition={bounce}
                    >
                      <span className="nvm-leadership-icon">
                        <Icon />
                      </span>

                      <span className="nvm-leadership-number">
                        0{index + 1}
                      </span>

                      <strong>
                        {item.label}
                      </strong>
                    </motion.article>
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
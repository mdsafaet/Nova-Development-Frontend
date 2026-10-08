import CountUp from "react-countup";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuGlobe,
  LuScale,
  LuSparkles,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const pillars = [
  {
    icon: LuSparkles,
    endValue: 100,
    suffix: "%",
    title: "Excellence",
    description:
      "Uncompromising standards in design, structural engineering, and client service.",
  },
  {
    icon: LuScale,
    endValue: 100,
    suffix: "%",
    title: "Integrity",
    description:
      "Total operational accountability, transparency, and ethical governance.",
  },
  {
    icon: LuGlobe,
    endValue: 4,
    suffix: "",
    title: "Global Markets",
    description:
      "Delivering master-planned communities and iconic destinations across regions.",
  },
];

function MetricPillar({
  pillar,
  index,
  reduceMotion,
}) {
  const Icon = pillar.icon;

  return (
    <Float
      distance={7}
      duration={
        5.8 + index * 0.45
      }
      delay={
        index * 0.2
      }
    >
      <motion.article
        className="nvm-pillar"
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -9,
              }
        }
        transition={bounce}
      >
        <div className="nvm-pillar-top">
          <span className="nvm-pillar-icon">
            <Icon />
          </span>

          <span className="nvm-pillar-index">
            0{index + 1}
          </span>
        </div>

        <strong className="nvm-pillar-number">
          <CountUp
            end={pillar.endValue}
            suffix={pillar.suffix}
            duration={2}
            enableScrollSpy
            scrollSpyOnce
          />
        </strong>

        <h3>
          {pillar.title}
        </h3>

        <p>
          {pillar.description}
        </p>
      </motion.article>
    </Float>
  );
}

export default function Message() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="nvm-message"
      id="managing-director-message"
    >
      <div className="nvm-shell">
        <Reveal>
          <div className="nvm-section-head nvm-section-head--dark">
            <span>
              03
            </span>

            <i />

            <strong>
              Message
            </strong>
          </div>
        </Reveal>

        <div className="nvm-message-layout">
          <div className="nvm-message-heading">
            <Reveal>
              <p className="nvm-kicker nvm-kicker--dark">
                A message from leadership
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2>
                Building beyond
                <span>
                  the transaction.
                </span>
              </h2>
            </Reveal>
          </div>

          <div className="nvm-letter">
            <Reveal delay={0.12}>
              <blockquote>
                “We understand that real estate is
                not merely about properties; it’s
                about aspirations, dreams, and
                creating spaces where life unfolds
                with absolute distinction.”
              </blockquote>
            </Reveal>

            <Reveal>
              <p>
                Our unwavering commitment is to
                bring those dreams to life and
                provide you with the highest level
                of service and satisfaction. Every
                master plan, every acre, and every
                partnership is guided by long-term
                thinking — ensuring what we build
                today remains relevant,
                sustainable, and cherished
                tomorrow.
              </p>
            </Reveal>

            <Reveal>
              <p>
                Throughout our journey, we have
                upheld three fundamental pillars:{" "}
                <strong>
                  Excellence, Integrity, and
                  Community
                </strong>
                . These pillars form the bedrock of
                our corporate governance. We
                believe that by consistently
                delivering architectural
                excellence, operating with total
                transparency, and nurturing
                communities, we craft a lasting
                legacy.
              </p>
            </Reveal>

            <Reveal>
              <p>
                The real estate landscape is in
                constant evolution. As Chairman, I
                assure you that we remain at the
                forefront of this
                transformation—leveraging advanced
                engineering and sustainable
                technologies to ensure your
                investment journey is completely
                seamless.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="nvm-pillars">
          {pillars.map(
            (pillar, index) => (
              <MetricPillar
                key={pillar.title}
                pillar={pillar}
                index={index}
                reduceMotion={reduceMotion}
              />
            )
          )}
        </div>

        <Reveal>
          <motion.div
            className="nvm-impact"
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -8,
                  }
            }
            transition={bounce}
          >
            <div>
              <span className="nvm-impact-label">
                Global Impact
              </span>

              <p>
                45+ projects · 3,200 acres ·
                4 markets — One unified standard.
              </p>
            </div>

            <div className="nvm-impact-right">
              <span>
                Design
              </span>

              <i />

              <span>
                Engineering
              </span>

              <i />

              <span>
                Stewardship
              </span>

              <LuArrowUpRight />
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
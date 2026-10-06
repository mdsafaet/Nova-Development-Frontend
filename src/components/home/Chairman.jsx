// src/pages/Chairman.jsx
// or src/components/home/Chairman.jsx

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Globe2,
  Landmark,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import "@/styles/chairman.css";

const principles = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "Decisions made for long-term trust.",
  },
  {
    icon: Sparkles,
    title: "Design-led",
    text: "Thoughtful spaces with lasting relevance.",
  },
  {
    icon: Landmark,
    title: "Stewardship",
    text: "Building value beyond the handover.",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Chairman() {
  return (
    <section
      id="chairman-message"
      className="chairman-modern"
    >
      <div className="chairman-modern__background">
        <div className="chairman-modern__grid" />

        <motion.div
          className="chairman-modern__orb chairman-modern__orb--one"
          animate={{
            x: [0, 50, 0],
            y: [0, -40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="chairman-modern__orb chairman-modern__orb--two"
          animate={{
            x: [0, -35, 0],
            y: [0, 45, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="chairman-modern__container">

        <motion.div
          className="chairman-modern__top"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={reveal}
        >
          <div className="chairman-modern__eyebrow">
            <span className="chairman-modern__eyebrow-dot" />

            Chairman's Message
          </div>

          <div className="chairman-modern__location">
            <Globe2 size={15} />

            <span>
              Dubai · Dhaka · New York · London
            </span>
          </div>
        </motion.div>

        <div className="chairman-modern__layout">

          <div className="chairman-modern__statement">

            <motion.span
              className="chairman-modern__index"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              01 / Leadership
            </motion.span>

            <motion.h2
              className="chairman-modern__title"
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Development is not
              <span>
                what we build.
              </span>

              <em>
                It is what we leave behind.
              </em>
            </motion.h2>

            <motion.div
              className="chairman-modern__line"
              initial={{
                scaleX: 0,
              }}
              whileInView={{
                scaleX: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.1,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
            />

            <motion.div
              className="chairman-modern__quote"
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
            >
              <span className="chairman-modern__quote-mark">
                “
              </span>

              <p>
                Every Nova project begins with a responsibility
                to the people, communities and cities that will
                inherit it.
              </p>
            </motion.div>
          </div>

          <div className="chairman-modern__side">

            <motion.div
              className="chairman-modern__message"
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
            >
              <span className="chairman-modern__message-label">
                Our responsibility
              </span>

              <p>
                Our ambition has never been simply to create
                buildings or acquire land.
              </p>

              <p>
                We aim to create places with enduring value —
                commercially sound, thoughtfully designed and
                meaningful to the people who experience them.
              </p>
            </motion.div>

            <div className="chairman-modern__principles">
              {principles.map(
                (
                  principle,
                  index
                ) => {
                  const Icon =
                    principle.icon;

                  return (
                    <motion.div
                      key={
                        principle.title
                      }
                      className="chairman-modern__principle"
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay:
                          0.15 +
                          index *
                            0.1,
                      }}
                      whileHover={{
                        y: -6,
                      }}
                    >
                      <div className="chairman-modern__principle-icon">
                        <Icon
                          size={18}
                          strokeWidth={
                            1.6
                          }
                        />
                      </div>

                      <div>
                        <strong>
                          {
                            principle.title
                          }
                        </strong>

                        <p>
                          {
                            principle.text
                          }
                        </p>
                      </div>
                    </motion.div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <motion.div
          className="chairman-modern__bottom"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
        >
          <div className="chairman-modern__identity">
            <div className="chairman-modern__signature-line" />

            <div>
              <strong>
                Chairman's Office
              </strong>

              <span>
                Nova Development Group
              </span>
            </div>
          </div>

          <motion.a
            href="#brand-story"
            className="chairman-modern__cta"
            whileHover={{
              x: 4,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <span>
              Discover our story
            </span>

            <span className="chairman-modern__cta-icon">
              <ArrowUpRight
                size={18}
              />
            </span>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
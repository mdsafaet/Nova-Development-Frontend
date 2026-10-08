import { Link } from "react-router-dom";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowDown,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const cards = [
  {
    icon: LuMail,
    title: "Group enquiries",
    text: "info@novadevelopmentglobal.com",
  },
  {
    icon: LuPhone,
    title: "Head office",
    text: "+971 6 538 8233",
  },
  {
    icon: LuMapPin,
    title: "Dubai",
    text: "Al Tallah 2 - Ajman - United Arab Emirates",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToContact = () => {
    document
      .getElementById("contact-enquiry")
      ?.scrollIntoView({
        behavior: reduceMotion
          ? "auto"
          : "smooth",
      });
  };

  return (
    <section
      className="nvc-hero"
      style={{
        backgroundImage: `url('${img.contactHero}')`,
      }}
    >
      <div className="nvc-hero-overlay" />

      <div className="container nvc-hero-container">
        <Reveal>
          <nav
            className="nvc-breadcrumb"
            aria-label="Breadcrumb"
          >
            <Link to="/">Home</Link>

            <span>/</span>

            <span>Company</span>

            <span>/</span>

            <strong>
              Company Profile
            </strong>
          </nav>
        </Reveal>

        <div className="nvc-hero-grid">
          <div className="nvc-hero-copy">
            <Reveal>
              <div className="nvc-section-head nvc-section-head--dark">
                <span>00</span>
                <i />
                <strong>
                  Contact Nova
                </strong>
              </div>
            </Reveal>

            <Reveal>
              <p className="nvc-kicker nvc-kicker--light">
                Global enquiries
              </p>
            </Reveal>

            <Reveal>
              <h1>
                We develop places
                <span>
                  that outlive us.
                </span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="nvc-hero-lead">
                Nova Development is a global
                land &amp; real estate group
                creating master-planned
                communities, residences and
                commercial destinations —
                with one standard of design,
                engineering, governance and
                stewardship across four
                markets.
              </p>
            </Reveal>

            <motion.button
              type="button"
              className="nvc-scroll"
              onClick={scrollToContact}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8 }
              }
              whileTap={{ y: 1 }}
              transition={bounce}
              aria-label="Scroll to contact form"
            >
              <LuArrowDown />
            </motion.button>
          </div>

          <div className="nvc-hero-cards">
            {cards.map(
              (
                {
                  icon: Icon,
                  title,
                  text,
                },
                index
              ) => (
                <Float
                  key={title}
                  delay={index * 0.4}
                >
                  <motion.article
                    className="nvc-hero-card"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -10 }
                    }
                    transition={bounce}
                  >
                    <div className="nvc-hero-card-top">
                      <Icon />

                      <span>
                        0{index + 1}
                      </span>
                    </div>

                    <strong>
                      {title}
                    </strong>

                    <p>{text}</p>
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
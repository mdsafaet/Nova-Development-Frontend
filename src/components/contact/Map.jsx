import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuMapPin,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

export default function Map() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section className="nvc-map">
      <div className="container">
        <Reveal>
          <div className="nvc-section-head">
            <span>03</span>
            <i />
            <strong>
              Head Office
            </strong>
          </div>
        </Reveal>

        <div className="nvc-map-shell">
          <iframe
            src="https://maps.google.com/maps?q=Boulevard%20Plaza%20Downtown%20Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="Boulevard Plaza Downtown Dubai map"
          />

          <Float delay={0.3}>
            <motion.div
              className="nvc-map-card"
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -10 }
              }
              transition={bounce}
            >
              <span className="nvc-map-icon">
                <LuMapPin />
              </span>

              <div>
                <small>
                  Nova Development
                </small>

                <strong>
                  Boulevard Plaza ·
                  Downtown Dubai
                </strong>

                <p>
                  Head Office · Level 24
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Boulevard+Plaza+Downtown+Dubai"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Boulevard Plaza in Google Maps"
              >
                <LuArrowUpRight />
              </a>
            </motion.div>
          </Float>
        </div>
      </div>
    </section>
  );
}
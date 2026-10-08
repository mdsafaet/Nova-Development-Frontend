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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.9324186160616!2d55.50560587506008!3d25.371354424625277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7004280cf35%3A0x6fc1eac5e6eeb4b9!2sSmart%20Home%20Real%20Estate%20L.L.C!5e1!3m2!1sen!2sbd!4v1791474421335!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{
              border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Tallah 2 Ajman United Arab Emirates map"
          />

          <Float delay={0.3}>
            <motion.div
              className="nvc-map-card"
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -10,
                    }
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
                  Al Tallah 2 - Ajman -
                  United Arab Emirates
                </strong>

                <p>
                  Head Office
                </p>
              </div>

              <a
                href="https://www.google.com/maps/place/25%C2%B022'17.6%22N+55%C2%B030'29.6%22E/@25.371553,55.508211,786m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d25.371553!4d55.508211?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Al Tallah 2 in Google Maps"
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
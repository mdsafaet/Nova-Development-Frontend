import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LuArrowUpRight } from "react-icons/lu";
import ReactCountryFlag from "react-country-flag";
import { img } from "@/assets/images";
import Float, { bounce, Reveal } from "@/components/company-profile/Float";

const cities = [
  { code: "AE", city: "Dubai", country: "United Arab Emirates" },
  { code: "BD", city: "Dhaka", country: "Bangladesh" },
  { code: "US", city: "New York", country: "United States" },
  { code: "GB", city: "London", country: "United Kingdom" },
];

export default function Community() {
  return (
    <section id="community" className="csx csx-community">
      <div className="csx-orb csx-orb--tr" />

      <div className="csx-wrap">
        <div className="csx-head">
          <b>04</b>
          <i />
          <span>Our Promise</span>
        </div>

        <div className="csx-split-grid csx-split-grid--alt">
          <Reveal>
            <div className="csx-media">
              <div className="csx-media-img">
                <img src={img.projectFeatured} alt="Places that outlive us" loading="lazy" decoding="async" />
              </div>
              <Float className="csx-media-cap" distance={7} duration={5}>
                <motion.div className="csx-glass csx-cap" whileHover={{ y: -8 }} transition={bounce}>
                  <span>Stewardship · Legacy</span>
                  <strong>Places that outlive us</strong>
                </motion.div>
              </Float>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="csx-copy">
              <p className="csx-kicker">Why it matters</p>
              <h2 className="csx-title">
                We build for
                <span>those who come next.</span>
              </h2>
              <p className="csx-lead">
                Every master plan is a promise to future residents, neighbours and ecosystems.
              </p>
              <p className="csx-text">
                That promise is what makes a development endure — not just commercially, but socially and
                environmentally. It&apos;s the same standard across Dubai, Dhaka, New York and London.
              </p>

              <ul className="csx-cities" aria-label="Our markets">
                {cities.map((c) => (
                  <li key={c.code}>
                    <span className="csx-flag">
                      <ReactCountryFlag
                        svg
                        countryCode={c.code}
                        title={c.country}
                        aria-label={c.country}
                        style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </span>
                    {c.city}
                  </li>
                ))}
              </ul>

              <div className="csx-actions">
                <Link to="/contact" className="csx-btn csx-btn--primary">
                  Partner with us <LuArrowUpRight />
                </Link>
                <Link to="/portfolio" className="csx-btn csx-btn--outline">
                  See our places <LuArrowUpRight />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

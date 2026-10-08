import ReactCountryFlag from "react-country-flag";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuBuilding2,
  LuMapPin,
  LuArrowUpRight,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const markets = [
  {
    code: "AE",
    country: "UAE",
    city: "Dubai",
    address:
      "Head office · Boulevard Plaza 24F · Operating",
    focus:
      "Luxury residential & commercial",
  },
  {
    code: "BD",
    country: "Bangladesh",
    city: "Dhaka",
    address:
      "Gulshan 2 · Nova Land Tower · Operating",
    focus:
      "Land estates & master-planning",
  },
  {
    code: "US",
    country: "USA",
    city: "New York",
    address:
      "One World Trade Center 62F · Expanding",
    focus:
      "Commercial & capital advisory",
  },
  {
    code: "GB",
    country: "UK",
    city: "London",
    address:
      "Canary Wharf · Entering",
    focus:
      "Residential & mixed-use",
  },
];

export default function Markets() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      id="markets"
      className="nvi-markets"
    >
      <div className="container">
        <Reveal>
          <div className="nvi-section-head nvi-section-head--dark">
            <span>04</span>
            <i />
            <strong>
              Global Platform
            </strong>
          </div>
        </Reveal>

        <div className="nvi-markets-heading">
          <div>
            <Reveal>
              <p className="nvi-kicker nvi-kicker--light">
                Four markets
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvi-title nvi-title--dark">
                Four markets.
                <span>
                  One standard.
                </span>
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <p>
              Local expertise, global
              discipline — design,
              engineering, governance and
              stewardship held to one Nova
              standard.
            </p>
          </Reveal>
        </div>

        <div className="nvi-market-grid">
          {markets.map(
            (
              {
                code,
                country,
                city,
                address,
                focus,
              },
              index
            ) => (
              <Float
                key={city}
                delay={index * 0.4}
              >
                <motion.article
                  className="nvi-market-card"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -10 }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 20,
                  }}
                >
                  <div className="nvi-market-top">
                    <div
                      className="nvi-flag"
                      aria-label={`${country} flag`}
                    >
                      <ReactCountryFlag
                        countryCode={
                          code
                        }
                        svg
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                        aria-label={
                          country
                        }
                      />
                    </div>

                    <span>
                      0{index + 1}
                    </span>
                  </div>

                  <div className="nvi-market-location">
                    <LuMapPin />

                    <div>
                      <small>
                        {country}
                      </small>

                      <h3>
                        {city}
                      </h3>
                    </div>
                  </div>

                  <div className="nvi-market-details">
                    <p>{address}</p>

                    <span>
                      <LuBuilding2 />
                      {focus}
                    </span>
                  </div>

                  <div
                    className="nvi-market-arrow"
                    aria-hidden="true"
                  >
                    <LuArrowUpRight />
                  </div>
                </motion.article>
              </Float>
            )
          )}
        </div>
      </div>
    </section>
  );
}
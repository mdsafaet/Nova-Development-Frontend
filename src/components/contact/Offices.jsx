import ReactCountryFlag from "react-country-flag";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuClock3,
  LuGlobe,
  LuMail,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const offices = [
  {
    number: "01",
    code: "AE",
    city: "Dubai",
    label: "Head Office",
    suffix: "— HQ",

    hours: "",

    address: [
      "Level 24, Boulevard Plaza",
      "Downtown Dubai",
      "United Arab Emirates",
    ],

    phone: "+971 6 538 8233",

    email: "",

    website:
      "https://novadevelopmentglobal.com",
  },

  {
    number: "02",
    code: "BD",
    city: "Dhaka",
    label: "Bangladesh Office",
    suffix: "",

    hours: "",

    address: [
      "Rupayan Shopping Square, 10th Floor, Unit-A & B",
      "Plot No. C-2, Block-G, Sayem Sobhan Anvir Road",
      "Bashundhara Residential Area, Dhaka-1229",
      "Bangladesh",
    ],

    phone: "+09606 707 707",

    email: "",

    website:
      "https://novadevelopmentglobal.com",
  },

  {
    number: "03",
    code: "US",
    city: "New York",
    label: "Americas Office",
    suffix: "",

    hours: "",

    address: [],

    phone: "",

    email: "",

    website: "",
  },

  {
    number: "04",
    code: "GB",
    city: "London",
    label: "UK Office",
    suffix: "",

    hours: "",

    address: [
      "1st Floor, 195 Vallance Road",
      "London E1 5HS",
      "United Kingdom",
    ],

    phone: "020 3299 6900",

    email: "",

    website:
      "https://novadevelopmentglobal.com",
  },
];


/* =========================================================
   HELPERS
========================================================= */

const getPhoneHref = (phone) => {
  if (!phone) return "";

  return `tel:${phone.replace(
    /[^\d+]/g,
    ""
  )}`;
};

const getDirections = (address) => {
  if (!address?.length) return "";

  const cleanAddress = address
    .filter(Boolean)
    .join(", ");

  if (!cleanAddress) return "";

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    cleanAddress
  )}`;
};


/* =========================================================
   OFFICE CARD
========================================================= */

function OfficeCard({
  office,
  index,
  reduceMotion,
}) {
  const directions =
    getDirections(
      office.address
    );

  const phoneHref =
    getPhoneHref(
      office.phone
    );

  const hasAddress =
    office.address?.some(
      (line) =>
        line?.trim()
    );

  return (
    <Float
      delay={index * 0.4}
    >
      <motion.article
        className={`nvc-office-card ${
          index === 0
            ? "nvc-office-card--active"
            : ""
        }`}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -10,
              }
        }
        transition={bounce}
      >
        <div className="nvc-office-top">
          <span>
            {office.number}
          </span>

          <div
            className="nvc-flag"
            aria-label={`${office.city} flag`}
          >
            <ReactCountryFlag
              countryCode={
                office.code
              }
              svg
              title={
                office.city
              }
              aria-label={
                office.city
              }
              style={{
                width: "100%",
                height: "100%",
                objectFit:
                  "cover",
              }}
            />
          </div>
        </div>

        {office.hours && (
          <div className="nvc-office-hours">
            <LuClock3 />

            <span>
              {office.hours}
            </span>
          </div>
        )}

        <p className="nvc-office-label">
          {office.label}
        </p>

        <h3>
          {office.city}

          {office.suffix && (
            <span>
              {office.suffix}
            </span>
          )}
        </h3>

        {(hasAddress ||
          office.phone) && (
          <address>
            {hasAddress && (
              <div className="nvc-address-row">
                <LuMapPin />

                <span>
                  {office.address
                    .filter(Boolean)
                    .map(
                      (
                        line,
                        lineIndex
                      ) => (
                        <span
                          key={`${office.city}-${lineIndex}`}
                          className="nvc-address-line"
                        >
                          {line}
                        </span>
                      )
                    )}
                </span>
              </div>
            )}

            {office.phone && (
              <a
                href={
                  phoneHref
                }
              >
                <LuPhone />

                <span>
                  {
                    office.phone
                  }
                </span>
              </a>
            )}
          </address>
        )}

        {(directions ||
          office.email ||
          office.website) && (
          <div className="nvc-office-actions">
            {directions && (
              <a
                href={
                  directions
                }
                target="_blank"
                rel="noopener noreferrer"
                className="nvc-office-primary"
              >
                Directions

                <LuArrowUpRight />
              </a>
            )}

            {office.email && (
              <a
                href={`mailto:${office.email}`}
              >
                <LuMail />

                Email
              </a>
            )}

            {office.website && (
              <a
                href={
                  office.website
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuGlobe />

                Website
              </a>
            )}
          </div>
        )}
      </motion.article>
    </Float>
  );
}


/* =========================================================
   OFFICES
========================================================= */

export default function Offices() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section className="nvc-offices">
      <div className="container">
        <Reveal>
          <div className="nvc-section-head nvc-section-head--dark">
            <span>
              02
            </span>

            <i />

            <strong>
              Corporate Offices
            </strong>
          </div>
        </Reveal>

        <div className="nvc-offices-heading">
          <div>
            <Reveal>
              <p className="nvc-kicker nvc-kicker--light">
                Global presence
              </p>
            </Reveal>

            <Reveal>
              <h2 className="nvc-title nvc-title--dark">
                Four markets.

                <span>
                  One standard.
                </span>
              </h2>
            </Reveal>
          </div>


        </div>

        <div className="nvc-office-grid">
          {offices.map(
            (
              office,
              index
            ) => (
              <OfficeCard
                key={
                  office.city
                }
                office={
                  office
                }
                index={
                  index
                }
                reduceMotion={
                  reduceMotion
                }
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
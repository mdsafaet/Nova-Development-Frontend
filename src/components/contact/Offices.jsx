import ReactCountryFlag from "react-country-flag";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuClock3,
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
    hours:
      "Sun–Thu 9am–6pm · GST",
    address:
      "Level 24, Boulevard Plaza, Downtown Dubai, UAE",
    phone: "+971 4 555 8800",
    phoneHref: "tel:+97145558800",
    directions:
      "https://maps.google.com/?q=Boulevard+Plaza+Downtown+Dubai",
    email:
      "mailto:dubai@novaland.group",
  },
  {
    number: "02",
    code: "BD",
    city: "Dhaka",
    label: "Bangladesh Office",
    hours:
      "Sun–Thu 9am–6pm · BST",
    address:
      "Nova Land Tower, Gulshan Avenue, Gulshan 2, Dhaka 1212",
    phone: "+880 2 5566 1200",
    phoneHref: "tel:+880255661200",
    directions:
      "https://maps.google.com/?q=Gulshan+Avenue+Dhaka",
    email:
      "mailto:dhaka@novaland.group",
  },
  {
    number: "03",
    code: "US",
    city: "New York",
    label: "Americas Office",
    hours:
      "Mon–Fri 9am–5pm · ET",
    address:
      "One World Trade Center, Floor 62, New York, NY 10007, USA",
    phone: "+1 212 555 0198",
    phoneHref: "tel:+12125550198",
    directions:
      "https://maps.google.com/?q=One+World+Trade+Center+New+York",
    email:
      "mailto:newyork@novaland.group",
  },
  {
    number: "04",
    code: "GB",
    city: "London",
    label: "UK Office",
    hours:
      "Mon–Fri 9am–5pm · GMT",
    address:
      "One Canada Square, Canary Wharf, London E14 5AB, UK",
    phone: "+44 20 7946 0958",
    phoneHref: "tel:+442079460958",
    directions:
      "https://maps.google.com/?q=One+Canada+Square+London",
    email:
      "mailto:london@novaland.group",
  },
];

export default function Offices() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section className="nvc-offices">
      <div className="container">
        <Reveal>
          <div className="nvc-section-head nvc-section-head--dark">
            <span>02</span>
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

          <Reveal>
            <p>
              Visit, call or get
              directions — same governance
              and response standards.
            </p>
          </Reveal>
        </div>

        <div className="nvc-office-grid">
          {offices.map(
            (
              office,
              index
            ) => (
              <Float
                key={office.city}
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
                      : { y: -10 }
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
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                  </div>

                  <div className="nvc-office-hours">
                    <LuClock3 />

                    <span>
                      {office.hours}
                    </span>
                  </div>

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

                  <address>
                    <div className="nvc-address-row">
                      <LuMapPin />

                      <span>
                        {office.address}
                      </span>
                    </div>

                    <a
                      href={
                        office.phoneHref
                      }
                    >
                      <LuPhone />

                      {office.phone}
                    </a>
                  </address>

                  <div className="nvc-office-actions">
                    <a
                      href={
                        office.directions
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="nvc-office-primary"
                    >
                      Directions
                      <LuArrowUpRight />
                    </a>

                    <a
                      href={
                        office.email
                      }
                    >
                      <LuMail />
                      Email
                    </a>
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
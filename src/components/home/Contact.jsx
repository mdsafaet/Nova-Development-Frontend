import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";

import "@/styles/contact.css";

const offices = [
  {
    id: "dubai",
    label: "Head Office",
    primary: true,
    city: "Dubai",
    country: "United Arab Emirates",
    code: "AE",
    timeZone: "Asia/Dubai",
    address: [
      "Building No: 0405, Al Tallah 2",
      "Ajman",
      "United Arab Emirates",
    ],
    phone: "+09606 707 707",
  },
  {
    id: "dhaka",
    label: "Bangladesh Office",
    city: "Dhaka",
    country: "Bangladesh",
    code: "BD",
    timeZone: "Asia/Dhaka",
    address: [
      "Rupayan Shopping Square, 10th Floor, Unit-A & B",
      "Plot No. C-2, Block-G, Sayem Sobhan Anvir Road",
      "Bashundhara Residential Area, Dhaka-1229",
      "Bangladesh",
    ],
    phone: "+",
  },
  {
    id: "new-york",
    label: "Americas Office",
    city: "New York",
    country: "United States",
    code: "US",
    timeZone: "America/New_York",
    address: [
      "",
      "",
      "New York, NY 10007",
      "USA",
    ],
    phone: "+",
  },
  {
    id: "london",
    label: "UK Office",
    city: "London",
    country: "United Kingdom",
    code: "GB",
    timeZone: "Europe/London",
    address: [
      "",
      "",
      "London E14 5AB",
      "United Kingdom",
    ],
    phone: "+",
  },
];

const toTel = (phone) =>
  `tel:${phone.replace(/[^\d+]/g, "")}`;

const mapsUrl = (office) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office.address.join(", ")
  )}`;

function LocalTime({ timeZone }) {
  const getTime = () =>
    new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(new Date());

  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const updateTime = () => {
      setTime(getTime());
    };

    updateTime();

    const interval = setInterval(
      updateTime,
      30000
    );

    return () =>
      clearInterval(interval);
  }, [timeZone]);

  return (
    <span className="contact-office-time">
      {time}
    </span>
  );
}

function OfficeCard({
  office,
  index,
}) {
  return (
    <article
      className={`contact-office-card ${
        office.primary
          ? "contact-office-card--primary"
          : ""
      }`}
    >
      <div className="contact-office-card__top">
        <span className="contact-office-number">
          {String(index + 1).padStart(
            2,
            "0"
          )}
        </span>

        <div className="contact-office-flag">
          <ReactCountryFlag
            svg
            countryCode={office.code}
            title={office.country}
            aria-label={office.country}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="contact-office-card__heading">
        <span className="contact-office-label">
          {office.label}
        </span>

        <h3>
          {office.city}
        </h3>

        <p>
          {office.country}
        </p>
      </div>

      <div className="contact-office-address">
        <MapPin
          size={16}
          strokeWidth={1.6}
        />

        <address>
          {office.address.map(
            (line) => (
              <span key={line}>
                {line}
              </span>
            )
          )}
        </address>
      </div>

      <div className="contact-office-card__bottom">
        <div className="contact-office-meta">
          <div className="contact-office-local">
            <Clock3
              size={14}
              strokeWidth={1.6}
            />

            <span>
              Local time
            </span>

            <LocalTime
              timeZone={
                office.timeZone
              }
            />
          </div>
        </div>

        <a
          href={toTel(
            office.phone
          )}
          className="contact-office-phone"
        >
          <Phone
            size={15}
            strokeWidth={1.6}
          />

          <span>
            {office.phone}
          </span>
        </a>

        <a
          href={mapsUrl(office)}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-office-directions"
        >
          <span>
            Get directions
          </span>

          <ArrowUpRight
            size={15}
            strokeWidth={1.7}
          />
        </a>
      </div>
    </article>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact-global"
    >
<div
  className="contact-global__bg"
  aria-hidden="true"
>
  <span className="contact-orb contact-orb--1" />
  <span className="contact-orb contact-orb--2" />
  <span className="contact-orb contact-orb--3" />

  {Array.from({ length: 24 }).map((_, index) => (
    <span
      key={index}
      className={`contact-star contact-star--${index + 1}`}
    />
  ))}
</div>

      <div className="contact-global__container">
        <div className="contact-global__header">

          <div className="contact-global__header-left">
            <div className="contact-global__eyebrow">
              <span />

              Contact &amp;
              Corporate Offices
            </div>

            <h2>
              Let's build{" "}
              <em>
                what comes next.
              </em>
            </h2>
          </div>

          <div className="contact-global__header-right">
            <p>
              Speak with our team
              about projects,
              partnerships,
              investment
              opportunities or
              corporate enquiries.
            </p>

            <div className="contact-global__presence">
              <span>
                04
              </span>

              <p>
                Offices across
                four global markets
              </p>
            </div>
          </div>

        </div>

        <div className="contact-office-grid">
          {offices.map(
            (
              office,
              index
            ) => (
              <OfficeCard
                key={
                  office.id
                }
                office={
                  office
                }
                index={
                  index
                }
              />
            )
          )}
        </div>

        <div className="contact-global__footer">
          <span>
            Nova Development
            Group
          </span>

          <span>
            Dubai · Dhaka ·
            New York · London
          </span>
        </div>
      </div>
    </section>
  );
}
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowUpRight,
  LuCalendarDays,
  LuMapPin,
} from "react-icons/lu";

import Float, {
  bounce,
} from "@/components/company-profile/Float";

// One project card used by the portfolio archive grid.
export default function ProjectCard({
  project: p,
}) {
  const reduceMotion =
    useReducedMotion();

  const countryCode =
    p.flag?.toUpperCase();

  return (
    <motion.article
      className={`portfolio-card ${p.category}`}
      data-category={p.category}
      data-market={p.market}
      data-title={p.title}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -8,
            }
      }
      transition={bounce}
    >
      <div className="portfolio-card-img">
        <img
          src={p.image}
          alt={p.alt}
          loading="lazy"
        />

        <div className="portfolio-card-top">
          <span className="portfolio-badge">
            <i />
            {p.badge}
          </span>
        </div>

        {countryCode && (
          <Float
            distance={6}
            duration={6}
            delay={0.25}
            className="portfolio-card-flag-float"
          >
            <span
              className="portfolio-card-flag"
              aria-label={
                p.marketName
              }
            >
              <ReactCountryFlag
                countryCode={
                  countryCode
                }
                svg
                aria-label={
                  p.marketName
                }
                title={
                  p.marketName
                }
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </span>
          </Float>
        )}
      </div>

      <div className="portfolio-card-body">
        <span className="eyebrow text-gold">
          {p.eyebrow}
        </span>

        <h3>
          {p.name}
        </h3>

        <p>
          {p.text}
        </p>

        <div className="portfolio-card-foot">
          <div className="meta">
            <span>
              <LuMapPin />
              {p.location}
            </span>

            <span>
              <LuCalendarDays />
              {p.year}
            </span>
          </div>

          <span
            className="arrow"
            aria-hidden="true"
          >
            <LuArrowUpRight />
          </span>
        </div>

        <Link
          to="/portfolio-single"
          className="portfolio-card-link"
          aria-label={p.label}
        />
      </div>
    </motion.article>
  );
}
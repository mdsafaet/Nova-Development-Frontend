import CountUp from "react-countup";
import {
  ArrowUpRight,
  Building2,
  Compass,
  DraftingCompass,
  Globe2,
} from "lucide-react";

import "@/styles/intro.css";

const stats = [
  {
    end: 17,
    label: ["Years of", "experience"],
    icon: Compass,
    delay: ".3s",
  },
  {
    end: 45,
    plus: true,
    label: ["Projects", "delivered"],
    icon: Building2,
    delay: ".4s",
  },
  {
    end: 3200,
    label: ["Acres", "developed"],
    icon: DraftingCompass,
    delay: ".5s",
  },
  {
    end: 4,
    pad: true,
    label: ["Global", "markets"],
    icon: Globe2,
    delay: ".6s",
  },
];

const standard = [
  "Design",
  "Engineering",
  "Governance",
  "Stewardship",
];

const pad2 = (n) =>
  String(Math.round(n)).padStart(2, "0");

export default function Intro() {
  return (
    <section
      id="company-profile"
      className="np-section"
    >
      <div className="np-bg" aria-hidden="true">
        <span className="np-orb np-orb--1" />
        <span className="np-orb np-orb--2" />
      </div>

      <div className="np-container">
        {/* SECTION LABEL */}
        <div className="np-label reveal">
          <span className="np-label-index">
            01
          </span>

          <span className="np-label-line" />

          <span className="np-label-text">
            Company Profile
          </span>
        </div>

        {/* INTRO */}
        <div className="np-intro">
          <div className="np-intro-left">
            <p className="np-eyebrow reveal">
              Who we are
            </p>

            <h2
              className="np-title reveal"
              style={{ "--d": ".1s" }}
            >
              We develop places{" "}
              <em>that outlive us.</em>
            </h2>
          </div>

          <div className="np-intro-right">
            <p
              className="np-lead reveal"
              style={{ "--d": ".2s" }}
            >
              Nova Development is a global
              land and real estate
              development group creating
              communities, residences and
              commercial destinations across
              four markets.
            </p>

            <p
              className="np-body reveal"
              style={{ "--d": ".3s" }}
            >
              From land acquisition and
              master planning to construction,
              investment and long-term
              stewardship, our approach
              combines local market knowledge
              with one consistent global
              standard.
            </p>

            <a
              href="#brand-story"
              className="np-link reveal"
              style={{ "--d": ".4s" }}
            >
              <span>
                Discover Nova
              </span>

              <span className="np-link-icon">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.6}
                />
              </span>
            </a>
          </div>
        </div>

        {/* STATS */}
<div className="np-stats-floating">
  {stats.map((stat, index) => {
    const Icon = stat.icon;

    return (
      <article
        key={stat.label.join(" ")}
        className={`np-stat-card np-stat-card--${index + 1} reveal`}
        style={{ "--d": stat.delay }}
      >
        <div className="np-stat-card__icon">
          <Icon
            size={20}
            strokeWidth={1.5}
          />
        </div>

        <div className="np-stat-card__value">
          <CountUp
            start={0}
            end={stat.end}
            duration={2.6}
            separator=","
            formattingFn={stat.pad ? pad2 : undefined}
            enableScrollSpy
            scrollSpyOnce
          />

          {stat.plus && <sup>+</sup>}
        </div>

        <p className="np-stat-card__label">
          {stat.label[0]}
          <span>{stat.label[1]}</span>
        </p>

        <span className="np-stat-card__glow" />
        <span className="np-stat-card__line" />
      </article>
    );
  })}
</div>

        {/* OUR STANDARD */}
        <div
          className="np-pillars reveal"
          style={{ "--d": ".7s" }}
        >
          <div className="np-pillars-heading">
            <span className="np-pillars-tag">
              Our standard
            </span>

            <p>
              One consistent standard across
              every market and every project.
            </p>
          </div>

          <ul className="np-pillars-list">
            {standard.map(
              (item, index) => (
                <li
                  key={item}
                  className="np-pillar"
                >
                  <span className="np-pillar-n">
                    0{index + 1}
                  </span>

                  <span className="np-pillar-t">
                    {item}
                  </span>

                  <span className="np-pillar-dot" />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
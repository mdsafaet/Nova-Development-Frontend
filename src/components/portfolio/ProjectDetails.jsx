import { useState } from "react";
import { Link } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  LuArrowLeft,
  LuArrowUpRight,
  LuCalendarDays,
  LuCheck,
  LuLayers3,
  LuMapPin,
  LuPhone,
  LuRuler,
  LuShieldCheck,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";

const gallery = [
  img.projectFeatured,
  img.project1,
  img.project5,
  img.projectMixed,
];

const features = [
  "Schools, mosques & neighbourhood retail within walkable catchments",
  "Central park spine with native planting & stormwater landscape",
  "Trunk roads, utilities & drainage delivered before plot handover",
  "Stewardship reserve & community governance from day one",
];

const projectStats = [
  {
    value: "560",
    label: "Acres",
  },
  {
    value: "04",
    label: "Phases",
  },
  {
    value: "32%",
    label: "Open space",
  },
  {
    value: "2025",
    label: "Launch",
  },
];

const facts = [
  {
    label: "Status",
    value: "Ongoing — Phase 02",
  },
  {
    label: "Location",
    value: "Dhaka, Bangladesh",
  },
  {
    label: "Typology",
    value: "Land Development",
  },
  {
    label: "Scale",
    value: "560 acres",
  },
  {
    label: "Year",
    value: "2025",
  },
  {
    label: "Governance",
    value: "Audited · Board-led",
  },
];

const relatedProjects = [
  {
    image: img.project1,
    countryCode: "BD",
    market: "Bangladesh",
    type: "Land Development · 420 acres",
    title: "Nova Meadows",
    description:
      "Planned 420-acre estate in Dhaka's eastern corridor — resilient neighborhoods.",
    location: "Dhaka",
    year: "2024",
  },
  {
    image: img.project5,
    countryCode: "BD",
    market: "Bangladesh",
    type: "Land Development · 310 acres",
    title: "Purbachal Hills",
    description:
      "Master-planned hillside community — entitlements and stewardship.",
    location: "Purbachal",
    year: "2022",
  },
  {
    image: img.project7,
    countryCode: "AE",
    market: "UAE",
    type: "Land Development · 180 acres",
    title: "Palm Hills Estate",
    description:
      "Desert-modern estate with native landscape and low-impact infra.",
    location: "Dubai South",
    year: "2024",
  },
];

export default function ProjectDetails() {
  const [featured, setFeatured] =
    useState(img.projectFeatured);

  const reduceMotion =
    useReducedMotion();

  return (
    <section className="nvp-detail">
      <div className="container">
        <div className="nvp-detail-head">
          <div className="nvp-detail-heading">
            <Reveal>
              <div className="nvp-section-head">
                <span>02</span>
                <i />
                <strong>
                  Project Overview
                </strong>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="nvp-title">
                Gulshan Reserve —
                <span>
                  560 acres.
                </span>
              </h2>
            </Reveal>

            <Reveal>
              <p className="nvp-detail-lead">
                Master-planned estate with
                resilient neighbourhoods,
                sustainable infrastructure
                and long-term community
                stewardship — from
                entitlements to handover.
              </p>
            </Reveal>

            <Reveal>
              <div className="nvp-meta">
                <span>
                  <LuMapPin />
                  Dhaka
                </span>

                <span>
                  <LuLayers3 />
                  Land
                </span>

                <span>
                  <LuRuler />
                  560 acres
                </span>

                <span>
                  <LuCalendarDays />
                  2025
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="nvp-detail-actions">
              <Link
                to="/portfolio"
                className="nvp-btn nvp-btn--outline"
              >
                <LuArrowLeft />
                Back to archive
              </Link>

              <Link
                to="/contact"
                className="nvp-btn nvp-btn--primary"
              >
                Enquire
                <LuArrowUpRight />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="nvp-detail-layout">
          <div className="nvp-detail-main">
            <Reveal>
              <div className="nvp-gallery">
                <div className="nvp-featured">
                  <img
                    src={featured}
                    alt="Gulshan Reserve — featured view"
                  />

                  <div className="nvp-featured-top">
                    <span className="nvp-featured-badge">
                      <i />
                      Featured
                    </span>
                  </div>

                  <Float
                    delay={0.3}
                    distance={6}
                    duration={6}
                    className="nvp-featured-country-float"
                  >
                    <span className="nvp-floating-flag">
                      <ReactCountryFlag
                        countryCode="BD"
                        svg
                        aria-label="Bangladesh"
                        title="Bangladesh"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </span>
                  </Float>
                </div>

                <div className="nvp-thumbs">
                  {gallery.map(
                    (image, index) => (
                      <button
                        key={index}
                        type="button"
                        className={
                          featured === image
                            ? "nvp-thumb nvp-thumb--active"
                            : "nvp-thumb"
                        }
                        onClick={() =>
                          setFeatured(
                            image
                          )
                        }
                        aria-label={`View Gulshan Reserve image ${
                          index + 1
                        }`}
                      >
                        <img
                          src={image}
                          alt=""
                          loading="lazy"
                        />
                      </button>
                    )
                  )}
                </div>
              </div>
            </Reveal>

            <div className="nvp-overview">
              <Reveal>
                <p className="nvp-kicker">
                  Overview
                </p>
              </Reveal>

              <Reveal>
                <h3>
                  An estate planned
                  <span>
                    for generations.
                  </span>
                </h3>
              </Reveal>

              <Reveal>
                <p>
                  <strong>
                    Gulshan Reserve
                  </strong>{" "}
                  is a 560-acre master
                  plan near Gulshan,
                  Dhaka — structured
                  around schools, parks,
                  walkable blocks and
                  low-impact
                  infrastructure.
                  Entitlements, trunk
                  services and landscape
                  come first; plots and
                  neighbourhoods follow.
                </p>
              </Reveal>

              <Reveal>
                <p>
                  Delivery is phased and
                  board-governed: audited
                  accounts, transparent
                  allocation and a
                  stewardship reserve for
                  parks, drainage and
                  community assets — the
                  same standard across all
                  four Nova markets.
                </p>
              </Reveal>

              <div className="nvp-feature-list">
                {features.map(
                  (feature, index) => (
                    <Reveal
                      key={feature}
                      delay={
                        index * 0.05
                      }
                    >
                      <div className="nvp-feature-item">
                        <span>
                          <LuCheck />
                        </span>

                        <p>
                          {feature}
                        </p>
                      </div>
                    </Reveal>
                  )
                )}
              </div>

              <div className="nvp-project-stats">
                {projectStats.map(
                  (item, index) => (
                    <Float
                      key={item.label}
                      delay={
                        index * 0.25
                      }
                    >
                      <motion.article
                        className="nvp-project-stat"
                        whileHover={
                          reduceMotion
                            ? undefined
                            : {
                                y: -8,
                              }
                        }
                        transition={
                          bounce
                        }
                      >
                        <strong>
                          {item.value}
                        </strong>

                        <span>
                          {item.label}
                        </span>
                      </motion.article>
                    </Float>
                  )
                )}
              </div>
            </div>
          </div>

          <aside className="nvp-detail-side">
            <Float delay={0.15}>
              <motion.div
                className="nvp-facts"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                transition={bounce}
              >
                <div className="nvp-side-title">
                  <span>
                    <LuShieldCheck />
                  </span>

                  <h4>
                    Project facts
                  </h4>
                </div>

                <dl>
                  {facts.map(
                    ({
                      label,
                      value,
                    }) => (
                      <div
                        key={label}
                      >
                        <dt>
                          {label}
                        </dt>

                        <dd>
                          {value}
                        </dd>
                      </div>
                    )
                  )}
                </dl>
              </motion.div>
            </Float>

            <Float
              delay={0.45}
              duration={6.5}
            >
              <motion.div
                className="nvp-enquire"
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                      }
                }
                transition={bounce}
              >
                <p className="nvp-kicker nvp-kicker--light">
                  Project enquiry
                </p>

                <h4>
                  Interested in
                  <span>
                    this project?
                  </span>
                </h4>

                <p>
                  Speak to an advisor
                  about allocation,
                  phasing and partnership
                  — response within 24
                  hours.
                </p>

                <Link
                  to="/contact"
                  className="nvp-btn nvp-btn--primary"
                >
                  Enquire now
                  <LuArrowUpRight />
                </Link>

                <a
                  href="tel:+880255661200"
                  className="nvp-enquire-phone"
                >
                  <LuPhone />
                  +880 2 5566 1200
                </a>
              </motion.div>
            </Float>

            <Reveal>
              <Link
                to="/portfolio"
                className="nvp-next"
              >
                <img
                  src={img.project1}
                  alt="Nova Meadows"
                />

                <div>
                  <small>
                    Next project
                  </small>

                  <strong>
                    Nova Meadows —
                    420 acres
                  </strong>
                </div>

                <LuArrowUpRight />
              </Link>
            </Reveal>
          </aside>
        </div>

        <section className="nvp-related">
          <div className="nvp-related-head">
            <div>
              <Reveal>
                <div className="nvp-section-head">
                  <span>03</span>
                  <i />
                  <strong>
                    Related
                  </strong>
                </div>
              </Reveal>

              <Reveal>
                <h3>
                  More from
                  <span>
                    the archive.
                  </span>
                </h3>
              </Reveal>

              <Reveal>
                <p>
                  Same standard — land,
                  residential and
                  commercial across four
                  markets.
                </p>
              </Reveal>
            </div>

            <Reveal>
              <Link
                to="/portfolio"
                className="nvp-text-link"
              >
                View all 14 projects
                <LuArrowUpRight />
              </Link>
            </Reveal>
          </div>

          <div className="nvp-related-grid">
            {relatedProjects.map(
              (
                project,
                index
              ) => (
                <Float
                  key={project.title}
                  delay={
                    index * 0.3
                  }
                >
                  <motion.article
                    className="nvp-related-card"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -10,
                          }
                    }
                    transition={bounce}
                  >
                    <div className="nvp-related-image">
                      <img
                        src={
                          project.image
                        }
                        alt={
                          project.title
                        }
                        loading="lazy"
                      />

                      <Float
                        delay={
                          0.35 +
                          index * 0.15
                        }
                        distance={6}
                        duration={
                          5.8 +
                          index * 0.2
                        }
                        className="nvp-related-country-float"
                      >
                        <span className="nvp-floating-flag">
                          <ReactCountryFlag
                            countryCode={
                              project.countryCode
                            }
                            svg
                            aria-label={
                              project.market
                            }
                            title={
                              project.market
                            }
                            style={{
                              width:
                                "100%",
                              height:
                                "100%",
                            }}
                          />
                        </span>
                      </Float>
                    </div>

                    <div className="nvp-related-body">
                      <span className="nvp-related-type">
                        {project.type}
                      </span>

                      <h4>
                        {project.title}
                      </h4>

                      <p>
                        {
                          project.description
                        }
                      </p>

                      <div className="nvp-related-foot">
                        <span>
                          <LuMapPin />

                          {
                            project.location
                          }
                        </span>

                        <span>
                          <LuCalendarDays />

                          {project.year}
                        </span>

                        <LuArrowUpRight />
                      </div>
                    </div>

                    <Link
                      to="/portfolio-single"
                      className="nvp-related-link"
                      aria-label={`View ${project.title} details`}
                    />
                  </motion.article>
                </Float>
              )
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
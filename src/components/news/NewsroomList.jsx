import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

import {
  LuArrowUpRight,
  LuClock3,
} from "react-icons/lu";

import { img } from "@/assets/images";

import Float, {
  Reveal,
  bounce,
} from "@/components/company-profile/Float";


const stories = [
  {
    id: "uk",
    flag: "GB",
    image: img.news2,
    imageAlt: "London",
    market: "UK",
    date: "28 Jun 2026",
    time: "2 min",
    title:
      "Nova completes 180-acre land assembly in London",
    description:
      "Strategic assembly for next-generation garden suburb — entitlements and resilient infrastructure.",
  },

  {
    id: "usa-1",
    flag: "US",
    image: img.news3,
    imageAlt: "USA",
    market: "USA",
    date: "05 May 2026",
    time: "4 min",
    title:
      "Nova Capital signs North American co-investment mandate",
    description:
      "Integrated capital + development model extends to New York with phased, risk-adjusted structure.",
  },

  {
    id: "bangladesh",
    flag: "BD",
    image: img.news4,
    imageAlt: "Dhaka",
    market: "Bangladesh",
    date: "18 Mar 2026",
    time: "3 min",
    title:
      "Nova announces new master-planned community in Dhaka",
    description:
      "560-acre estate near Gulshan — schools, parks and community stewardship at scale.",
  },

  {
    id: "group",
    flag: "",
    image: img.news5,
    imageAlt: "Report",
    market: "Group",
    date: "09 Jan 2026",
    time: "5 min",
    title:
      "Nova Development publishes 2025 sustainability report",
    description:
      "Audited delivery, native landscapes and places that outlive us — measured across 4 markets.",
  },

  {
    id: "dubai",
    flag: "AE",
    image: img.project6,
    imageAlt: "Boulevard",
    market: "Dubai",
    date: "14 Feb 2026",
    time: "2 min",
    title:
      "Boulevard Plaza activation — Downtown Dubai",
    description:
      "Retail and office destination sees phased opening with activated ground floors.",
  },

  {
    id: "usa-2",
    flag: "US",
    image: img.projectCommercial,
    imageAlt: "WTC",
    market: "USA",
    date: "22 Jan 2026",
    time: "3 min",
    title:
      "World Trade Offices — floor 62 advisory suites",
    description:
      "Capital with a long view at One World Trade Center — institutional-grade stewardship.",
  },
];


export default function NewsroomList() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="nvn-news">
      <div className="nvn-shell">
        {/* ================================
            FEATURED STORY
        ================================= */}

        <Reveal>
          <div className="nvn-section-label">
            <span>
              02
            </span>

            <i />

            <strong>
              Latest stories
            </strong>
          </div>
        </Reveal>


        <Float
          distance={7}
          duration={6.6}
          delay={0.15}
        >
          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : { y: -10 }
            }
            transition={bounce}
          >
            <Link
              to="/news-single"
              className="nvn-featured"
              aria-label="Read Nova announces new waterfront residences in Dubai Harbour"
            >
              <div className="nvn-featured-media">
                <img
                  src={img.news1}
                  alt="Dubai Harbour — featured"
                  loading="lazy"
                />

                <div className="nvn-featured-shade" />
              </div>


              <div className="nvn-featured-top">
                <span className="nvn-featured-badge">
                  Featured
                </span>

                <span className="nvn-flag">
                  <ReactCountryFlag
                    countryCode="AE"
                    svg
                    title="United Arab Emirates"
                    aria-label="United Arab Emirates"
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </span>
              </div>


              <div className="nvn-featured-content">
                <div className="nvn-meta nvn-meta--light">
                  <span>
                    Dubai
                  </span>

                  <i />

                  <span>
                    12 Aug 2026
                  </span>

                  <i />

                  <span className="nvn-meta-time">
                    <LuClock3 />
                    3 min
                  </span>
                </div>

                <h2>
                  Nova announces new waterfront
                  residences in Dubai Harbour
                </h2>

                <p>
                  Branded, waterfront and
                  investor-ready — expanding our
                  Gulf platform with audited,
                  board-governed delivery and
                  long-term stewardship.
                </p>

                <span className="nvn-read-link">
                  Read story
                  <LuArrowUpRight />
                </span>
              </div>
            </Link>
          </motion.div>
        </Float>


        {/* ================================
            STORY GRID
        ================================= */}

        <div className="nvn-news-grid">
          {stories.map((story, index) => (
            <Float
              key={story.id}
              distance={6}
              duration={5.8 + index * 0.18}
              delay={0.2 + index * 0.12}
            >
              <motion.div
                className="nvn-card-motion"
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -9 }
                }
                transition={bounce}
              >
                <Link
                  to="/news-single"
                  className="nvn-news-card"
                  aria-label={`Read ${story.title}`}
                >
                  <div className="nvn-news-image">
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      loading="lazy"
                    />

                    {story.flag && (
                      <span className="nvn-flag nvn-card-flag">
                        <ReactCountryFlag
                          countryCode={story.flag}
                          svg
                          title={story.market}
                          aria-label={story.market}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </span>
                    )}
                  </div>


                  <div className="nvn-news-body">
                    <div className="nvn-meta">
                      <span className="nvn-market">
                        {story.market}
                      </span>

                      <i />

                      <span>
                        {story.date}
                      </span>

                      <i />

                      <span className="nvn-meta-time">
                        <LuClock3 />
                        {story.time}
                      </span>
                    </div>

                    <h3>
                      {story.title}
                    </h3>

                    <p>
                      {story.description}
                    </p>

                    <span className="nvn-read-link">
                      Read story
                      <LuArrowUpRight />
                    </span>
                  </div>
                </Link>
              </motion.div>
            </Float>
          ))}
        </div>


        <div
          className="nvn-empty"
          id="newsEmpty"
          hidden
        >
          <h4>
            No stories for this market
          </h4>

          <p>
            Try another filter.
          </p>
        </div>
      </div>
    </section>
  );
}
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import { img } from "@/assets/images";
import "@/styles/journal.css";

const stories = [
  {
    id: 1,
    image: img.news2,
    date: "28 JUN 2026",
    market: "UK",
    title:
      "Nova completes 180-acre land assembly in London.",
  },
  {
    id: 2,
    image: img.news3,
    date: "05 MAY 2026",
    market: "USA",
    title:
      "Nova Capital signs North American co-investment mandate.",
  },
  {
    id: 3,
    image: img.news4,
    date: "18 MAR 2026",
    market: "BANGLADESH",
    title:
      "Nova announces new master-planned community in Dhaka.",
  },
  {
    id: 4,
    image: img.news5,
    date: "09 JAN 2026",
    market: "GROUP",
    title:
      "Nova Development publishes 2025 sustainability report.",
  },
];

export default function Journal() {
  const navigate = useNavigate();

  const openStory = () => {
    navigate("/news-single");
  };

  const handleKeyboard = (event) => {
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      openStory();
    }
  };

  return (
    <section
      id="news-media"
      className="journal-section"
    >
      <div
        className="journal-bg"
        aria-hidden="true"
      >
        <span className="journal-orb journal-orb--1" />
        <span className="journal-orb journal-orb--2" />
      </div>

      <div className="journal-container">

        {/* HEADER */}
        <header className="journal-header">
          <div>
            <div className="journal-eyebrow">
              <span />

              News &amp; Media
            </div>

            <h2>
              The latest
              <span>
                {" "}
                from Nova.
              </span>
            </h2>
          </div>

          <Link
            to="/news-single"
            className="journal-header-link"
          >
            <span>
              View newsroom
            </span>

            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
            />
          </Link>
        </header>

        {/* MAIN LAYOUT */}
        <div className="journal-layout">

          {/* FEATURED */}
          <article
            className="journal-featured"
            onClick={openStory}
            role="link"
            tabIndex={0}
            onKeyDown={handleKeyboard}
          >
            <div className="journal-featured__media">
              <img
                src={img.news1}
                alt="Nova Development waterfront residences"
              />

              <div className="journal-featured__overlay" />

              <div className="journal-featured__top">
                <span className="journal-featured__badge">
                  Featured
                </span>

                <span className="journal-featured__index">
                  01
                </span>
              </div>

              <div className="journal-featured__bottom">
                <span>
                  Dubai
                </span>

                <span>
                  12 Aug 2026
                </span>
              </div>
            </div>

            <div className="journal-featured__content">

              <div className="journal-featured__meta">
                <CalendarDays
                  size={14}
                  strokeWidth={1.6}
                />

                <span>
                  Dubai · 12 Aug 2026
                </span>
              </div>

              <h3>
                Nova announces new
                waterfront residences
                in Dubai Harbour
              </h3>

              <p>
                The group announces its
                latest luxury residential
                development as part of its
                expanding Gulf platform.
              </p>

              <div className="journal-featured__action">
                <span>
                  Read story
                </span>

                <span className="journal-featured__arrow">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                  />
                </span>
              </div>

            </div>
          </article>

          {/* SIDE STORIES */}
          <div className="journal-list">

            <div className="journal-list__heading">
              <span>
                Latest stories
              </span>

              <span>
                2026
              </span>
            </div>

            {stories.map(
              (
                story,
                index
              ) => (
                <article
                  key={story.id}
                  className="journal-story"
                  onClick={openStory}
                  role="link"
                  tabIndex={0}
                  onKeyDown={
                    handleKeyboard
                  }
                >
                  <div className="journal-story__number">
                    {String(
                      index + 2
                    ).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="journal-story__image">
                    <img
                      src={
                        story.image
                      }
                      alt={
                        story.title
                      }
                    />
                  </div>

                  <div className="journal-story__content">

                    <div className="journal-story__meta">
                      <span>
                        {story.date}
                      </span>

                      <small>
                        {story.market}
                      </small>
                    </div>

                    <h3>
                      {story.title}
                    </h3>

                    <div className="journal-story__link">
                      Read story

                      <ArrowUpRight
                        size={15}
                        strokeWidth={
                          1.6
                        }
                      />
                    </div>

                  </div>
                </article>
              )
            )}

          </div>
        </div>

        {/* FOOTER */}
        <div className="journal-footer">
          <span>
            Nova Development
            Journal
          </span>

          <span>
            Development · Investment ·
            Markets · Sustainability
          </span>
        </div>

      </div>
    </section>
  );
}
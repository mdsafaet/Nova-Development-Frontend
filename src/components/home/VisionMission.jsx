import { useState } from "react";
import {
  ArrowUpRight,
  Award,
  Handshake,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { img } from "@/assets/images";
import "@/styles/home-vission.css";

const content = {
  vision: {
    number: "01",
    label: "Our Vision",
    title: "Build the places people believe in.",
    image: img.community,
    alt: "Vision — places people believe in, community-first",
    caption: "Vision · Legacy over short-term",
    paragraphs: [
      "We envision a future where development is measured not only by financial performance, but by the lasting value it creates for people.",
      "Our vision extends to creating resilient neighborhoods, sustainable infrastructure and places that foster belonging — investments that compound in social, environmental and economic value over decades.",
      "Every master plan, every acre and every partnership is guided by long-term thinking, ensuring what we build today remains relevant and cherished tomorrow.",
    ],
  },

  mission: {
    number: "02",
    label: "Our Mission",
    title: "Turn opportunity into enduring value.",
    image: img.investor,
    alt: "Mission — enduring value, disciplined delivery",
    caption: "Mission · Discipline to delivery",
    paragraphs: [
      "We acquire intelligently, design responsibly and deliver with discipline — bringing together land, capital, people and expertise to create meaningful destinations.",
      "Our mission is operationalized through rigorous diligence, transparent governance and design excellence — from land assembly and entitlements to engineering, construction and long-term stewardship.",
      "By aligning capital with community needs, we de-risk growth for investors while delivering places that perform for owners and delight residents.",
    ],
  },
};

const principles = [
  {
    number: "01",
    title: "Integrity",
    text: "Do the right thing at every stage.",
    icon: ShieldCheck,
  },
  {
    number: "02",
    title: "Excellence",
    text: "Set a higher standard for delivery.",
    icon: Award,
  },
  {
    number: "03",
    title: "Stewardship",
    text: "Think beyond today's development.",
    icon: Leaf,
  },
  {
    number: "04",
    title: "Partnership",
    text: "Build lasting relationships.",
    icon: Handshake,
  },
];

export default function VisionMission() {
  const [tab, setTab] = useState("vision");

  const active = content[tab];

  return (
    <section
      id="vision-mission"
      className="
        vm-section
        rb:relative
        rb:overflow-hidden
      "
    >
      {/* background decoration */}
      <div className="vm-bg" aria-hidden="true">
        <span className="vm-orb vm-orb--1" />
        <span className="vm-orb vm-orb--2" />
        <span className="vm-orb vm-orb--3" />

        <span className="vm-dot vm-dot--1" />
        <span className="vm-dot vm-dot--2" />
        <span className="vm-dot vm-dot--3" />
        <span className="vm-dot vm-dot--4" />
      </div>

      <div
        className="
          rb:relative
          rb:z-10
          rb:mx-auto
          rb:w-[calc(100%-28px)]
          rb:max-w-[1450px]
          md:rb:w-[calc(100%-48px)]
        "
      >
        {/* ===========================
            HEADER
        ============================ */}

        <div className="vm-heading">
          <div
            className="
              rb:mb-5
              rb:inline-flex
              rb:items-center
              rb:gap-2
              rb:text-[10px]
              rb:font-bold
              rb:uppercase
              rb:tracking-[.18em]
              rb:text-[#23646c]
            "
          >
            <span className="rb:h-1.5 rb:w-1.5 rb:rounded-full rb:bg-[#23646c]" />

            Corporate Vision &amp; Mission
          </div>

          <span className="vm-big-quote">
            “
          </span>

          <h2>
            To become a trusted global development platform known for{" "}
            <span>
              places of lasting value.
            </span>
          </h2>
        </div>

        {/* ===========================
            TAB SHELL
        ============================ */}

        <div className="vm-shell">
          <div
            className="
              rb:grid
              rb:grid-cols-2
              rb:border-b
              rb:border-black/10
              rb:bg-[#efede7]/80
              rb:backdrop-blur-md
            "
            role="tablist"
            aria-label="Vision and Mission"
          >
            <button
              type="button"
              role="tab"
              id="tab-vision"
              aria-controls="panel-vision"
              aria-selected={tab === "vision"}
              onClick={() => setTab("vision")}
              className={`vm-tab ${
                tab === "vision"
                  ? "vm-tab--active"
                  : ""
              }`}
            >
              <span className="vm-tab__number">
                01
              </span>

              <span>
                Our Vision
              </span>

              <span className="vm-tab__line" />
            </button>

            <button
              type="button"
              role="tab"
              id="tab-mission"
              aria-controls="panel-mission"
              aria-selected={tab === "mission"}
              onClick={() => setTab("mission")}
              className={`vm-tab ${
                tab === "mission"
                  ? "vm-tab--active"
                  : ""
              }`}
            >
              <span className="vm-tab__number">
                02
              </span>

              <span>
                Our Mission
              </span>

              <span className="vm-tab__line" />
            </button>
          </div>

          {/* ===========================
              ACTIVE PANEL
          ============================ */}

          <div
            key={tab}
            id={`panel-${tab}`}
            role="tabpanel"
            aria-labelledby={`tab-${tab}`}
            className="vm-panel"
          >
            {/* IMAGE */}

            <div className="vm-panel__image">
              <img
                src={active.image}
                alt={active.alt}
              />

              <div className="vm-panel__overlay" />

              <span className="vm-panel__number">
                {active.number}
              </span>

              <div className="vm-panel__caption">
                <span className="vm-panel__caption-dot" />

                {active.caption}
              </div>
            </div>

            {/* CONTENT */}

            <div className="vm-panel__content">
              <div className="vm-panel__decor" />

              <div className="vm-panel__content-inner">
                <div
                  className="
                    rb:mb-5
                    rb:flex
                    rb:items-center
                    rb:justify-between
                    rb:gap-4
                  "
                >
                  <span
                    className="
                      rb:text-[10px]
                      rb:font-bold
                      rb:uppercase
                      rb:tracking-[.16em]
                      rb:text-[#23646c]
                    "
                  >
                    {active.label}
                  </span>

                  <div className="vm-arrow">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                <h3>
                  {active.title}
                </h3>

                <div className="vm-panel__copy">
                  {active.paragraphs.map(
                    (paragraph, index) => (
                      <p
                        key={index}
                        className={
                          index === 0
                            ? "vm-panel__lead"
                            : ""
                        }
                      >
                        {paragraph}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
            PRINCIPLES
        ============================ */}

        <div className="vm-principles">
          {principles.map(
            ({
              number,
              title,
              text,
              icon: Icon,
            }) => (
              <article
                key={number}
                className="vm-principle"
              >
                <div className="vm-principle__orb" />

                <div className="vm-principle__top">
                  <span className="vm-principle__number">
                    {number}
                  </span>

                  <div className="vm-principle__icon">
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                <div className="vm-principle__body">
                  <strong>
                    {title}
                  </strong>

                  <p>
                    {text}
                  </p>
                </div>

                <span className="vm-principle__line" />
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
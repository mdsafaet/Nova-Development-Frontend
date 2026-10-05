import "@/styles/four-pillars.css";

const pillars = [
  {
    number: "01",
    title: "Engineered to outlast.",
    text:
      "Desert heat, Atlantic storms, London clay, the Bengal delta. We design above each country's code, not to it — every structure independently peer-reviewed.",
    items: [
      "Dubai Building Code · UK Building Safety Act · NYC Code · BNBC-2020",
      "Wind-tunnel tested towers",
      "Seismic base isolation where the ground demands it",
    ],
    image: "/images/spire-blue-hour.jpg",
    alt: "A glass spire lit against a deep-blue sky",
    theme: "cobalt",
  },
  {
    number: "02",
    title: "Safety is architecture.",
    text:
      "Fire safety isn't a sticker on the door. It is pressurised stairs, sprinklers in every room, refuge floors and a command room staffed around the clock.",
    items: [
      "Sprinklers & detection in every room",
      "Pressurised escape stairs",
      "24/7 fire & life-safety command",
    ],
    image: "/images/pillar-safety.jpg",
    alt: "Modern tower architecture",
    theme: "indigo",
  },
  {
    number: "03",
    title: "Air, light & water.",
    text:
      "Deep balconies shade the glass, cross-ventilation replaces a third of the cooling load, and every drop of rain on our roofs is harvested.",
    items: [
      "LEED Gold · BREEAM Excellent · Estidama targets",
      "Rainwater & greywater recycling",
      "Rooftop solar & low-E glazing",
    ],
    image: "/images/infinity-dusk.jpg",
    alt: "An infinity pool overlooking the city at dusk",
    theme: "green",
  },
  {
    number: "04",
    title: "After the keys.",
    text:
      "Handover is the start of the relationship. Our own facility teams look after every building, and the owners’ app shows everything from service tickets to the reserve fund.",
    items: [
      "2 years free facility management",
      "10-year structural warranty",
      "Owners’ app & open accounts",
    ],
    image: "/images/pillar-after-keys.jpg",
    alt: "Luxury bedroom overlooking the city at night",
    theme: "mist",
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 18 18"
      className="pillar-check"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="7.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />

      <path
        d="M6.4 9.2 8.1 11 11.8 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FourPillars() {
  return (
    <section
      id="pillars"
      className="pillars-section"
      aria-label="Four pillars"
    >
      <div className="pillars-container">
        <div className="pillars-header">
          <div>
            <p className="pillars-eyebrow">
              <span className="pillars-level">
                L24
              </span>

              <span className="pillars-eyebrow-line" />

              <span>
                Four pillars
              </span>
            </p>

            <h2 className="pillars-heading">
              What we will{" "}
              <em>never</em>{" "}
              trade away.
            </h2>
          </div>

          <p className="pillars-intro">
            Price, finishes and floor plans can be negotiated.
            These four commitments can't — they're written into
            every contract we sign.
          </p>
        </div>

        <div className="pillars-stack">
          {pillars.map((pillar, index) => (
            <article
              key={pillar.number}
              className="pillar-card"
              style={{
                "--pillar-index": index,
              }}
            >
              <div
                className={`pillar-card__inner pillar-card__inner--${pillar.theme}`}
              >
                <div className="pillar-card__left">
                  <div className="pillar-card__number">
                    {pillar.number}
                  </div>

                  <div className="pillar-card__content">
                    <h3 className="pillar-card__title">
                      {pillar.title}
                    </h3>

                    <p className="pillar-card__description">
                      {pillar.text}
                    </p>

                    <ul className="pillar-card__list">
                      {pillar.items.map((item) => (
                        <li key={item}>
                          <CheckIcon />

                          <span>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pillar-card__label">
                  PILLAR {pillar.number} / 04
                </div>

                <div className="pillar-card__media">
                  <img
                    src={pillar.image}
                    alt={pillar.alt}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}